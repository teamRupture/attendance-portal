var path = require('path');
var config = {
	entry: path.resolve(__dirname, 'src/js/main.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		inline : true,
		port   : 3333
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}]
	}
};

module.exports = config;
