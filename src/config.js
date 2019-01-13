const fs = require('fs')
const path = require('path')
const deep = require('@magic/deep')

const configPath = path.join(process.cwd(), 'config.js')
let config = {}
if (fs.existsSync(configPath)) {
  config = require(configPath)
  if (config.ROOT) {
    if (!config.ROOT.startsWith(process.cwd())) {
      config.ROOT = path.resolve(process.cwd(), config.ROOT)
    }
  } else {
    config.ROOT = process.cwd()
  }
}

const PAGES = path.join(config.ROOT, 'pages')
const PUBLIC = path.join(process.cwd(), 'public')
const ASSETS = path.join(config.ROOT, 'assets')
const MODULES = path.join(config.ROOT, 'modules')
const STATIC = path.join(ASSETS, 'static')
const THEMES = path.join(ASSETS, 'themes')

const ZIPPABLE = [
  'css',
  'js',
  'html',
  'json',
  'xml',
  'pdf',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  'odt',
  'csv',
  'text',
  'txt',
  'ico',
]
const IMAGES = ['jpg', 'jpeg', 'png', 'svg', 'gif']

config = deep.merge(config, {
  DIR: {
    PAGES,
    PUBLIC,
    ASSETS,
    MODULES,
    STATIC,
    THEMES,
  },
  FILETYPES: {
    ZIPPABLE,
    IMAGES,
  },
  IMAGEMIN: {
    PNG: '60-80',
    JPG: 70,
  },
  ENV: process.env.MAGIC_ENV || process.env.NODE_ENV,
})

module.exports = config
