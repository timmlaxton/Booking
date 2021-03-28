import { CART_ADD_RESERVATION, CART_REMOVE_RESERVATION } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_RESERVATION:
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x.hotel === item.hotel);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => (x.hotel === existItem.hotel ? item : x))
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				};
			}
		case CART_REMOVE_RESERVATION:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.hotel !== action.payload)
			};
		default:
			return state;
	}
};
