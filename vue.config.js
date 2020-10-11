/*
 * @Author: your name
 * @Date: 2020-10-04 14:33:15
 * @LastEditTime: 2020-10-04 21:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
		},
		module: {
			rules: [
				// {
				// 	test: /\.scss$/,
				// 	loader: 'sass-loader!style-loader!css-loader'
				// }
				{
					// test: /\.s[ac]ss$/i,
					// use: [
					// 	// Creates `style` nodes from JS strings
					// 	'style-loader',
					// 	// Translates CSS into CommonJS
					// 	'css-loader',
					// 	// Compiles Sass to CSS
					// 	'sass-loader',
					// ],
				}
			]
		}
  },
};
