export const View = (props = 'menu') => state => {
  if (typeof props === 'string') {
    props = { name: props }
  }

  let { name = 'menu', class: cl = 'Menu', items = [], collapse = true } = props
  let { url, [name]: maybeItems = [] } = state
  items = !items.length ? maybeItems : items

  if (!items.length) {
    return
  }

  if (state.hash) {
    url += `#${state.hash}`
  }

  return nav({ class: cl }, ul(items.map(i => MenuItem({ ...i, url, collapse }))))
}

export const style = {
  float: 'right',
  margin: '1.5em 0 0',
  position: 'relative',

  ul: {
    ul: {
      position: 'absolute',
      left: 0,
    },
  },
}

export let MenuItem = ({
  url,
  text,
  items = [],
  parentTo = undefined,
  collapse,
  ...item
}) => state => {
  // if the item has no values, we quit
  if (!item.to && !text) {
    return
  }

  const p = {
    class: 'MenuItem',
  }

  if (parentTo) {
    const isExternal = item.to.includes('://')
    const isAbsolute = item.to.startsWith('/')
    const startsLikeParent = !parentTo || item.to.startsWith(parentTo)
    if (!startsLikeParent && !isAbsolute && !isExternal) {
      if (!parentTo.endsWith('/') && !item.to.startsWith('-')) {
        parentTo = `${parentTo}/`
      }

      item.to = parentTo + item.to
    }
  }

  const rooted = item.to.startsWith(state.root) ? item.to : `${state.root}${item.to.substr(1)}`
  const active = url.startsWith(rooted)
  const current = url === rooted
  if (current) {
    p.class += ' active'
  }

  let children = []
  if ((items.length && active) || !collapse) {
    children = ul(items.map(i => MenuItem({ parentTo: item.to, url, collapse, ...i })))
  }

  return li(p, [item.to ? Link(item, text) : span(item, text), children])
}

MenuItem.style = {
  float: 'left',
  margin: '0 .5em 0 0',

  '&.active': {
    '> a': {
      textDecoration: 'underline',
    },
  },
  a: {
    display: 'block',
  },
}