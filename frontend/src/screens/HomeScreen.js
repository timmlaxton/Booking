import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import hotels from '../hotels';
import Hotel from '../components/Hotel';

const HomeScreen = () => {
	return (
		<>
			<Jumbotron className="jumbotron">
				<img className="image" alt="" src="images/homepage.jpg" />
			</Jumbotron>

			<div className="container-3">
				<h4 className="homepage-language-title">Who we are:</h4>
				<i className="fab fa-js fa-7x"></i> {''}
				<i className="fab fa-react fa-7x"></i> {''}
				<i className="fab fa-node fa-7x"></i> {''}
				<i className="fab fa-envira fa-7x"></i> {''}
				<i className="fab fa-bootstrap fa-7x"></i> {''}
			</div>
			<br />
			<h1>Hotels</h1>
			<Row>
				{hotels.map((hotel) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Hotel hotel={hotel} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
