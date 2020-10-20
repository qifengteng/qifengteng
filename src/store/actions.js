/*
 * @Author: your name
 * @Date: 2020-10-19 21:24:56
 * @LastEditTime: 2020-10-20 21:53:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\store\actions.js
 */
import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-types'
export default {
	// 调用action用this.$store.dispatch
	// actions里addCart(context, payload)的第一个参数是context上下文
	addCart(context, payload) {
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find((item) => {
				return item.iid === payload.iid
			})
			if (oldProduct) {
				context.commit(ADD_COUNTER, oldProduct)
				resolve('当前商品数量+1')
			} else {
				payload.count = 1
				context.commit(ADD_TO_CART, payload)
				resolve('添加了新的商品')
			}
		})
	}
}