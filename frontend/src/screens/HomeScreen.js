import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Hotel from '../components/Hotel';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listHotels } from '../actions/hotelActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const hotelList = useSelector((state) => state.hotelList);
	const { loading, error, hotels } = hotelList;

	useEffect(() => {
		dispatch(listHotels());
	}, [dispatch]);

	return (
		<>
			<Jumbotron className="jumbotron">
				<img className="image" alt="" src="images/homepage.jpg" />
			</Jumbotron>

			<div className="container-3">
				<h4 className="homepage-language-title">Who we are:</h4>
				<h4>Well howdy partner</h4>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Row>
						{hotels.map((hotel) => (
							<Col key={hotel._id} sm={12} md={6} lg={4} xl={3}>
								<Hotel hotel={hotel} />
							</Col>
						))}
					</Row>
				)}
				{/* <i className="fab fa-js fa-7x"></i> {''}
				<i className="fab fa-react fa-7x"></i> {''}
				<i className="fab fa-node fa-7x"></i> {''}
				<i className="fab fa-envira fa-7x"></i> {''}
				<i className="fab fa-bootstrap fa-7x"></i> {''} */}
			</div>
			<br />
			<h1>Hotels</h1>
		</>
	);
};

export default HomeScreen;
