import React from 'react';
import { BrowserRouter as Router, Route } from 'react-browser-router';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';
import Hotelscreen from './screens/HotelScreen';
import Hotelsscreen from './screens/HotelsScreen';
import Cartscreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={Homescreen} exact />
				<Route path="/hotels" component={Hotelsscreen} exact />
				<Route path="/hotel/:id" component={Hotelscreen} exact />
				<Route path="/cart/:id?" component={Cartscreen} exact />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
