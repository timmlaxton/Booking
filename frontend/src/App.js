import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-browser-router';
import { Container } from 'react-bootstrap';
import LandingScreen from './screens/LandingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import HotelScreen from './screens/HotelScreen';
import HotelsScreen from './screens/HotelsScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import PaymentScreen from './screens/PaymentScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingScreen} />;
				<div>
					<Container>
						<Header />
						<Route path="/home" component={HomeScreen} />
						<Route path="/login" component={LoginScreen} />
						<Route path="/register" component={RegisterScreen} />
						<Route path="/profile" component={ProfileScreen} />
						<Route path="/hotels" component={HotelsScreen} />
						<Route path="/payment" component={PaymentScreen} />
						<Route path="/hotel/:id" component={HotelScreen} />
						<Route path="/delivery" component={DeliveryScreen} />
						<Route path="/cart/:id?" component={CartScreen} />
					</Container>
				</div>
				<Footer />
			</Switch>
		</Router>
	);
};

export default App;
