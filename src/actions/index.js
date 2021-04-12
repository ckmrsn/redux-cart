import * as types from './actionTypes'

export const addToCart = (book) => {
	return {
		type: types.ADD_TO_CART,
		payload: book,
	}
}

export const increaseItem = (id) => {
	return {
		type: types.INCREASE_ITEM,
		payload: id,
	}
}

export const decreaseItem = (id) => {
	return {
		type: types.DECREASE_ITEM,
		payload: id,
	}
}

export const removeFromCart = (id) => {
	return {
		type: types.REMOVE_FROM_CART,
		payload: id,
	}
}
