import axios from 'axios';
import { CART_ADD_RESERVATION } from '../constants/cartConstants';

export const addToCart = (id, startDate, endDate) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/hotels/${id}`);

	dispatch({
		type: CART_ADD_RESERVATION,
		payload: {
			hotel: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			startDate: data.startDate,
			endDate: data.endDate
		}
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
