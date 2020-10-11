/*
 * @Author: your name
 * @Date: 2020-10-05 23:02:03
 * @LastEditTime: 2020-10-06 23:42:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\network\home.js
 */
import {request} from './request'

export function getHomeMultidata () {
	return request({
		url: '/home/multidata'
	})
}

export function getHomeGoods (type, page) {
	return request({
		url: 'home/data',
		params: {
			type,
			page
		}
	})
}