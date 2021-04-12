import * as actionTypes from '../actions/actionTypes'
import { data } from '../data'
const INITIAL_STATE = {
	bookList: data,
	cart: [],
}

const bookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return {
				...state,
				cart: state.cart.find((item) => item.id === action.payload.id)
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, count: item.count + 1 }
								: { ...item }
					  )
					: [...state.cart, { ...action.payload, count: 1 }],
			}

		case actionTypes.INCREASE_ITEM:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload
						? { ...item, count: item.count + 1 }
						: { ...item }
				),
			}

		case actionTypes.DECREASE_ITEM:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload
						? item.count > 1
							? { ...item, count: item.count - 1 }
							: { ...item }
						: { ...item }
				),
			}

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			}

		default:
			return state
	}
}

export default bookReducer
