const css = require('@magic/css')

module.exports = async ([reset, style]) => {
  reset = await css(reset, config.THEME_VARS)
  style = await css(style, config.THEME_VARS)

  return {
    css: `/* reset */\n${reset.css}\n/* app */\n${style.css}`,
    minified: `${reset.minified}\n${style.minified}`,
  }
}
