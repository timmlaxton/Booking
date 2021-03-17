import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Rating from '../components/Rating';
import hotels from '../hotels';

const HotelScreen = ({ match }) => {
	const hotel = hotels.find((p) => p._id === match.params.id);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Zoom>
						<Image className="Hotel-Image" src={hotel.image} alt={hotel.name} fluid />
					</Zoom>
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>{hotel.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={hotel.rating} text={`${hotel.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>Single Room: £{hotel.single} p/n</ListGroup.Item>
						<ListGroup.Item>Double Room: £{hotel.double} p/n</ListGroup.Item>
						<ListGroup.Item>King Room: £{hotel.king} p/n</ListGroup.Item>
						<ListGroup.Item>{hotel.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>{hotel.description}</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
			<br />
			<Row>
				<Col md={1}>
					<Zoom>
						<Image className="Room-Image" src={hotel.image2} alt={hotel.name} fluid />
					</Zoom>
				</Col>
				<Col md={1}>
					<Zoom>
						<Image className="Room-Image" src={hotel.image2} alt={hotel.name} fluid />
					</Zoom>
				</Col>
			</Row>
		</>
	);
};

export default HotelScreen;
