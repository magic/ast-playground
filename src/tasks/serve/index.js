const http = require('http')

const log = require('@magic/log')

const handler = require('./handler')

const listen = async server =>
  await {
    then(r, f) {
      server.on('listening', r)
      server.on('error', f)
    },
  }

const startServer = async (server, options) => {
  try {
    server.listen(options)
    await listen(server)
  } catch (e) {
    if (e.code === 'EADDRINUSE') {
      options.port += 1
      log.warn('Address in use', `incrementing port to ${options.port}...`)
    } else {
      throw e
    }

    return startServer(server, options)
  }
  return options
}

const serve = async app => {
  const handle = await handler(app)

  const server = http.createServer(handle)

  const options = {
    port: config.PORT,
    host: config.HOST,
    // do not make other workers listen to the same port
    // exclusive: true,
  }

  try {
    const { port, host } = await startServer(server, options)
    log(`listening to http://${host}:${port}${config.WEB_ROOT}`)
  } catch (e) {
    log.error(e)
  }

  return server
}

module.exports = serve
