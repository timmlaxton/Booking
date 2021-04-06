import React from 'react';
import { BrowserRouter as Router, Route } from 'react-browser-router';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import HotelScreen from './screens/HotelScreen';
import HotelsScreen from './screens/HotelsScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/login" component={LoginScreen} exact />
				<Route path="/register" component={RegisterScreen} exact />
				<Route path="/profile" component={ProfileScreen} exact />
				<Route path="/hotels" component={HotelsScreen} exact />
				<Route path="/hotel/:id" component={HotelScreen} exact />
				<Route path="/shipping" component={DeliveryScreen} exact />
				<Route path="/cart/:id?" component={CartScreen} exact />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
