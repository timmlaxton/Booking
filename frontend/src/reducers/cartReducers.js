import { CART_ADD_RESERVATION } from '../constants/cartConstants';

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
		default:
			return state;
	}
};
