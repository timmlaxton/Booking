import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer
} from './reducers/userReducers';
import { hotelListReducer, hotelDetailsReducer } from './reducers/hotelReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	hotelList: hotelListReducer,
	hotelDetails: hotelDetailsReducer,
	cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
	uerLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
