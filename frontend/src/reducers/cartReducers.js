import { CART_ADD_RESERVATION, CART_REMOVE_RESERVATION } from '../constants/cartConstants';

export const cartReducer = (state = { cartReservations: [] }, action) => {
	switch (action.type) {
		case CART_ADD_RESERVATION:
			const reservation = action.payload;

			const existReservation = state.cartReservations.find((x) => x.hotel === reservation.hotel);

			if (existReservation) {
				return {
					...state,
					cartReservations: state.cartReservations.map((x) => (x.hotel === existReservation.hotel ? reservation : x))
				};
			} else {
				return {
					...state,
					cartReservations: [...state.cartReservations, reservation]
				};
			}
		default:
			return state;
	}
};
