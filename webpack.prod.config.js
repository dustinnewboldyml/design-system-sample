const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./src/index.ts', './src/styles/theme.css'],
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /src\/styles\/theme.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.css$/,
				exclude: /src\/styles/,
				loader: 'css-loader',
				options: {
					exportType: 'css-style-sheet',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[hash][ext][query]'
				}
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, './index.html'),
			filename: './index.html',
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.css'],
	},
	output: {
		filename: 'component-library.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
}
