const path = require("path");
const fs = require("fs");

// get flask port
const rawdata = fs.readFileSync("../config.json");
const flaskConfig = JSON.parse(rawdata);
process.env.VUE_APP_FLASK_PORT = flaskConfig.flaskPort;

module.exports = {
  outputDir: path.resolve(__dirname, '../flask_app/static'), 
  publicPath: process.env.NODE_ENV === 'development' ? "./" : "./static/",
  productionSourceMap: false,
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: config => {
   
    // drop console logs for production
    if (process.env.NODE_ENV === 'production') {
      if ('terserOptions' in config.optimization.minimizer[0].options || {}) {
        // eslint-disable-next-line no-console
        console.log('dropping console logs for production.');
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      }
    }
  }
};
