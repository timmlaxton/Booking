import axios from 'axios';
import { CART_ADD_RESERVATION, CART_REMOVE_RESERVATION } from '../constants/cartConstants';

export const addToCart = (id, qty, startDate, endDate) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/hotels/${id}`);

	dispatch({
		type: CART_ADD_RESERVATION,
		payload: {
			hotel: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			qty,
			startDate,
			endDate
		}
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_RESERVATION,
		payload: id
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};