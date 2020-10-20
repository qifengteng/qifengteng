/*
 * @Author: your name
 * @Date: 2020-10-11 21:34:18
 * @LastEditTime: 2020-10-18 21:23:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\common\utils.js
 */
export function debounce (func, delay = 100) {
	let timer = null
	return function (...args) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}

// 正则表达式是干什么的？字符串匹配利器（难：规则太多）
export function formatDate(date, fmt) {
	// 1.获取年份
	// y+  ->  一个或者多个y
	// y*  ->  0个或者多个y
	// y?  ->  0个或者一个y
	
	// 2019 
	// yy - 19
	// yyyy - 2019
	// yyy - 019
	// y - 9
	// 19-MM-dd
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	// 获取
	let o = {
		'M+': date.getMonth() + 1,   
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? str : padLeftZero(str))
		}
	}
	return fmt
}

function padLeftZero (str) {
	// 巧妙的算法04:04:04
	// 如果传过来的不足两位，用0补齐
	//04     00     04              2            
	return ('00' + str).substr(str.length)
}