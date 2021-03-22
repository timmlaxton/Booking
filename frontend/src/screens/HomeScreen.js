import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Hotel from '../components/Hotel';

const HomeScreen = () => {
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		const fetchHotels = async () => {
			const { data } = await axios.get('/api/hotels');

			setHotels(data);
		};

		fetchHotels();
	}, []);

	return (
		<>
			<Jumbotron className="jumbotron">
				<img className="image" alt="" src="images/homepage.jpg" />
			</Jumbotron>

			<div className="container-3">
				<h4 className="homepage-language-title">Who we are:</h4>
				<h4>Well howdy partner</h4>
				{/* <i className="fab fa-js fa-7x"></i> {''}
				<i className="fab fa-react fa-7x"></i> {''}
				<i className="fab fa-node fa-7x"></i> {''}
				<i className="fab fa-envira fa-7x"></i> {''}
				<i className="fab fa-bootstrap fa-7x"></i> {''} */}
			</div>
			<br />
			<h1>Hotels</h1>
			<Row>
				{hotels.map((hotel) => (
					<Col key={hotel._id} sm={12} md={6} lg={4} xl={3}>
						<Hotel hotel={hotel} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
