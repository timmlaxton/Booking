import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Hotels = ({ hotel }) => {
	return (
		<Card className="my-3 p-3">
			<Link to={`/hotel/${hotel._id}`}>
				<Card.Img className="card-image" src={hotel.image} variant />
			</Link>

			<Card.Body className="card">
				<Link to={`/hotels/${hotel._id}`}>
					<Card.Title className="card.title" as="div">
						<strong>{hotel.name}</strong>
					</Card.Title>
				</Link>
			</Card.Body>

			<Card.Text as="div" className="card-rating">
				<Rating value={hotel.rating} text={`${hotel.numReviews} reviews`} />
			</Card.Text>
		</Card>
	);
};

export default Hotels;
