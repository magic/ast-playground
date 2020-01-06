import cluster from 'cluster'

import { master } from './master.mjs'
import { build } from './build.mjs'
import { watch } from './watch.mjs'
import { runConfig } from '../config.mjs'

export const runCluster = async options => {
  const { args, commands } = options

  // get the config
  const config = await runConfig()

  if (!global.CHECK_PROPS) {
    const { CHECK_PROPS } = await import('../lib/CHECK_PROPS.mjs')
    global.CHECK_PROPS = CHECK_PROPS
  }

  if (cluster.isMaster) {
    await master({ cluster, commands, config })
  } else if (cluster.isWorker) {
    if (commands.serve && cluster.worker.id === 1) {
      // watcher,
      // watches the directory and tells master to restart the build process when files change
      watch({ args, config })
    } else {
      // builder
      // builds the files and pages needed
      build({ commands, config })
    }

    process
      .on('unhandledRejection', error => {
        process.send({ evt: 'error', error: error.toString(), stack: error.stack })
      })
      .on('uncaughtException', error => {
        process.send({ evt: 'error', error: error.toString(), stack: error.stack })
      })
  }
}

export default runCluster
