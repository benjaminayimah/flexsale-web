const {GenerateSW} = require('workbox-webpack-plugin');
module.exports = {
    css: {
      loaderOptions: {
        // by default the `sass` option will apply to both syntaxes
        // because `scss` syntax is also processed by sass-loader underlyingly
        // but when configuring the `prependData` option
        // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
        // in that case, we can target the `scss` syntax separately using the `scss` option
        sass: {
          prependData: `@import "@/assets/index.scss";`
        },
       
      }
    },
    pwa: {
      name: 'Flexsale Web',
      shortName: 'Flexsale',
      themeColor: '#ffffff',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
    }
    
  }