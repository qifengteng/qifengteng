/*
 * @Author: your name
 * @Date: 2020-10-13 22:37:16
 * @LastEditTime: 2020-10-17 23:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\network\detail.js
 */
import {request} from './request'
export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
		this.discount = itemInfo.discountDesc
	}
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodsCount = shopInfo.cGoods
	}
}

export class GoodsParams {
	constructor (info, rule) {
		// 注： image可能没有值，有些商品有，有些没
		this.image = info.images ? info.images[0] : ''
		this.infos = info.set
		this.sizes = rule.tables
	}
}