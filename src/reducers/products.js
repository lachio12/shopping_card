import * as types from './../constants/ActionType';

let defaultState = [
	{
		id: 'aplusautomation123',
		name: 'S8 black',
		image: 's8 den.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 329,
		canBuy: true
	},
	{
		id: 'aplusia123',
		name: 'iphone 6',
		image: 'iphone-6.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 119,
		canBuy: true
	},
	{
		id: 'robofigcombo123',
		name: 'iphone 7',
		image: 'iphone7-black.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 139,
		canBuy: true
	},
	{
		id: 'target-leap-frog',
		name: 'SamSung S9',
		image: 'samsung-S9.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 399,
		canBuy: true
	},
	{
		id: 'target-leap-frog',
		name: 'xiaomi-mi-9-xanh-',
		image: 'xiaomi-mi-9-xanh-1.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 279,
		canBuy: true
	}
];


const products = (state = defaultState, action) => {

	switch(action.type){
		case types.LIST_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default products;