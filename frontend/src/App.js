import React from 'react';
import { BrowserRouter as Router, Route } from 'react-browser-router';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={Homescreen} exact />
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
