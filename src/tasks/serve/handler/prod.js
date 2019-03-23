const path = require('path')
const { getFiles, getContentType, fs } = require('../../../lib')

const { parse } = require('url')

const maybeGetFiles = async dir => {
  try {
    if (await fs.exists(dir)) {
      return await getFiles(dir)
    }
  } catch (e) {
    return []
  }
  return []
}

const handler = async app => {
  const publicFiles = await maybeGetFiles(config.DIR.PUBLIC)
  const apiFiles = await maybeGetFiles(config.DIR.API)

  const static = {}
  if (publicFiles.length) {
    await Promise.all(
      publicFiles.map(async name => {
        const rootName = name.replace(config.DIR.PUBLIC, '')
        static[rootName] = await fs.readFile(name)
      }),
    )
  }
  const hasStatic = Object.keys(static).length > 0

  const lambdas = {}
  if (apiFiles.length) {
    apiFiles.forEach(name => {
      const rootName = name.replace(config.DIR.API, '').replace('.js', '/')
      lambdas[rootName] = require(name)
    })
  }
  const hasApi = Object.keys(static).length > 0

  return async (req, res) => {
    const url = parse(req.url.replace(config.WEB_ROOT, '/'))
    const { pathname } = url

    if (config.FOR_DEATH_CAN_NOT_HAVE_HIM) {
      res.setHeader('X-Clacks-Overhead', 'GNU Terry Pratchet')
    }

    if (hasStatic) {
      let name
      if (static[pathname]) {
        name = pathname
      } else if (static[`${pathname}index.html`]) {
        name = `${pathname}index.html`
      }

      const headers = {
        'content-type': getContentType(name),
      }


      if (static[`${name}.gz`]) {
        if (req.headers['accept-encoding'].includes('gzip')) {
          name = `${name}.gz`
          headers['content-encoding'] = 'gzip'
        }
      }

      const content = static[name]
      if (content) {
        res.writeHead(200, headers)
        res.end(content)
        return
      }
    }

    if (req.method === 'POST') {
      if (hasApi && pathname.startsWith('/api')) {
        const action = pathname.replace('/api', '')
        if (typeof lambdas[action] === 'function') {
          return await lambdas[action](req, res)
        }
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(static['/404/index.html'])
  }
}

module.exports = handler
