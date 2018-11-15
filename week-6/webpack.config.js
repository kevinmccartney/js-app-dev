// const path = require('path');

// const APP_DIR = path.resolve(__dirname, 'Static/react');

module.exports = {
	entry: {
		myApp: "./webpack-app/js/index.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/webpack-app/dist'
	},
	watch: true,
	watchOptions: {
    // we should not be recompiling node modules on watch as they should not be changing
    ignored: /node_modules/,
    // we have to include this configuration to make sure that the watch process recompiles modules
    // imported in the entry
    // https://webpack.js.org/configuration/watch/#watchoptions-poll
    poll: true,
  },
}
