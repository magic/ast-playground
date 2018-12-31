const fs = require('fs')
const path = require('path')
const deep = require('@magic/deep')
const is = require('@magic/types')

const library = require('../modules')
const { getFiles, isTagUsed, isUpperCase } = require('../lib')
const config = require('../config')

const stringifyComponent = component => {
  component.str = ''
  Object.keys(component).forEach(key => {
    if (isUpperCase(key) && is.fn(component[key])) {
      component.str += component[key].toString()
    }
  })
  return component
}

const prepare = ({ app }) => {
  const files = getFiles(config.DIR.PAGES)

  const prepared = prepare.pages(files, app)

  return {
    ...prepared,
    files,
  }
}

const preparePage = file => {
  const name = file.replace(config.DIR.PAGES, '').replace('index.js', '')

  return {
    ...require(file),
    name,
  }
}

const getDeepPageNameObject = (name, arg) => {
  const arr = name.split('/').filter(a => a)

  const obj = {}
  let temp = obj
  arr.forEach((_, i) => {
    let a = {}
    if (i === arr.length - 1) {
      // pass arg as deepest key
      a = arg
    }
    temp = temp[arr[i]] = a
  })

  return obj
}

prepare.pages = (files, app) => {
  const pages = files
    .map(preparePage)
    .map(stringifyComponent)
    .map(page => {
      let name = sanitizeName(page.name)
      const stateObject = getDeepPageNameObject(name, page.state)
      const actionObject = getDeepPageNameObject(name, page.actions)
      app.state = deep.merge(app.state, { pages: stateObject })
      app.actions = deep.merge(app.actions, { pages: actionObject })
      app.style = deep.merge(app.style, page.style)

      return {
        ...page,
        state: deep.merge(app.state, page.state),
        actions: deep.merge(app.actions, page.actions),
      }
    })

  return {
    pages,
    app,
  }
}

const sanitizeName = name => {
  if (name === '/' || !name) {
    name = 'index'
  }

  if (name.startsWith('/')) {
    name = name.substr(1, name.length)
  }

  if (name.endsWith('/')) {
    name = name.substr(0, name.length - 1)
  }
  return name
}

const stringifyObject = (object, indent = '') => {
  indent = indent + '  '

  if (is.string(object)) {
    object = `"${object}"`
  }
  if (is.array(object)) {
    object = `[${object.map(o => stringifyObject(o, indent)).join(',')}]`
  } else if (is.fn(object)) {
    object = object.toString()
  } else if (is.object(object)) {
    let str = Object.entries(object)
      .map(([k, o]) => `${indent}"${k}": ${stringifyObject(o, indent)}`)
      .join(',\n')

    object = `${indent}{\n${str}\n${indent}}\n`
  }

  return object
}

const handleDeps = ([name, component]) => {
  if (is.fn(component.View)) {
    component = `const ${name} = { View: ${component.View.toString()} }\n`
  } else if (is.fn(component)) {
    if (global.tags.body[name]) {
      component = `const ${name} = C('${name}')\n`
    } else {
      component = `const ${name} = ${component.toString()}\n`
    }
  } else {
    throw new Error(`unknown dependency type in ${name}: ${typeof component}`)
  }

  return component
}

prepare.vendor = props => {
  const { pages, dependencies } = props
  const hyperappFile = path.join(process.cwd(), 'node_modules', 'hyperapp', 'src', 'index.js')
  const hyperappContent = fs
    .readFileSync(hyperappFile, 'utf8')
    .replace(/export function (.*)\(/gm, (_, $1) => `function ${$1}(`)

  let vendorString = ''
  vendorString += hyperappContent

  vendorString += `const C = ${library.component.toString()}\n`
    .replace(/attributes/gm, 'a')
    .replace(/name/gm, 'n')
    .replace(/children/gm, 'c')

  const depString = Object.entries(props.dependencies)
    .map(handleDeps)
    .join('')
  // console.log({ depString })
  vendorString += depString

  vendorString += 'const pages = {}\n'

  let has404 = false

  pages.forEach(page => {
    let name = sanitizeName(page.name)

    if (name.includes('/')) {
      name = `[${name
        .split('/')
        .map(n => `"${n}"`)
        .join('][')}]`
    }

    if (name === '404') {
      has404 = true
    }


    const componentArgString = [
      `Object.assign({}, state, state.pages['${name}'])`,
      `Object.assign({}, actions, state.pages['${name}'])`,
    ].join(',')

    const view = page.Body.toString()
      .replace(/state\./gm, `state.pages['${name}'].`)
      .replace(/actions\./gm, `actions.pages['${name}'].`)
      // .replace(/\(state, actions\)/gm, `(${componentArgString})`)

    // console.log(view)

    const str = `pages['${name}'] = ${view}\n`
    vendorString += str
  })

  if (!has404) {
    vendorString += 'pages["404"] = div("404 not found")\n'
  }

  const stateString = `const state = ${stringifyObject(app.state)}\n`
  vendorString += stateString

  const actionString = `const actions = ${stringifyObject(app.actions)}\n`
  vendorString += actionString

  const getPageUrl = `
const pathname = window.location.pathname
let url = !pathname || pathname === '/' 
  ? 'index' 
  : pathname

if (url.indexOf('/') === 0) {
  url = url.substr(1, url.length)
}
if (url[url.length -1] === '/') {
  url = url.substr(0, url.length - 1)
}
state.url = url
`
  vendorString += getPageUrl

  const viewString = `
const view = (state, actions) => {
  const page = pages[state.url]
  state = { ...state, ...state.pages[state.url] }
  actions = { ...actions, ...actions.pages[state.url] }

  return div({ class: 'wrapper' }, [
    state.menu && Menu(state, actions),
    page
      ? page(state, actions)
      : pages['404'],
  ])
}
`

  vendorString += viewString

  const createMagic = `
let mDiv = document.getElementById('magic')
if (!mDiv) {
  mDiv = document.createElement('div')
  mDiv.id = 'magic'
  document.body.appendChild(mDiv)
}
app(state, actions, view, mDiv)\n
`
  vendorString += createMagic

  return vendorString
}

module.exports = prepare
