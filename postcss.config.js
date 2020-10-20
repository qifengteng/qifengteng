/*
 * @Author: your name
 * @Date: 2020-10-20 23:40:01
 * @LastEditTime: 2020-10-21 00:13:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\postcss.config.js
 */

module.exports = {
	plugins: {
		autoprefixer: {},
		"postcss-px-to-viewport": {
			viewportWidth: 375, // 视窗的宽度， 对应的使我们750设计稿的宽度
			viewportHeight: 667, // 视窗的高度， 对应的使我们1334设计稿的高度
			unitPrecision: 5, // 指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
			viewportUnit: 'vw', // 指定需要转化成的视窗单位，建议vw
			selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类
			minPixelValue: 1, // 小于或等于'1px'不转换为视窗单位
			mediaQuery: false, // 允许在媒体查询中转化 'px'
			exclude: [/TabBar/] // 排除文件必须是正则
		}
	}
}

// 1. 在js中使用正则： /正则相关的规则/
// 2. exclude中存放的元素必须是正则表达式
// 3. 按照排除的文件写对应的正则
// 正则的规则
// 1. ^abc: 表示匹配的内容必须abc开头
// 2. abc$: 表示匹配的内容必须abc结尾
