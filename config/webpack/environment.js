const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    Popper: ['popper.js', 'default'],
    jQuery: 'jquery',
    $: 'jquery'
  })
)

module.exports = environment
