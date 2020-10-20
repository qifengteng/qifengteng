/*
 * @Author: your name
 * @Date: 2020-10-19 21:23:00
 * @LastEditTime: 2020-10-19 23:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\store\mutations.js
 */
import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-types'
export default {
	// 调用mutations用this.$store.commit
	// mutations唯一的目的是修改state的值
	// 目的尽量单一
	// 所以我们放到actions里
	// mutations里addCart(state, payload)的第一个参数是state
					// addCart(state, payload) {
					// 	let oldProduct = state.cartList.find((item) => {
					// 		return item.iid === payload.iid
					// 	})
					// 	if (oldProduct) {
					// 		oldProduct.count += 1
					// 	} else {
					// 		payload.count = 1
					// 		state.cartList.push(payload)
					// 	}
					// }
	[ADD_COUNTER] (stata, payload) {
		payload.count ++
	},
	[ADD_TO_CART] (state, payload) {
		payload.checked = true
		state.cartList.push(payload)
	}
}