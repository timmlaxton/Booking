import React from 'react';
import { Card } from 'react-bootstrap';

const Hotels = ({ hotel }) => {
	return (
		<Card className="my-3 p-3">
			<a href={`/hotel/${hotel._id}`}>
				<Card.Img src={hotel.image} variant />
			</a>

			<Card.Body className="card">
				<a href={`/hotels/${hotel._id}`}>
					<Card.Title className="card.title" as="div">
						{hotel.name}
					</Card.Title>
				</a>
			</Card.Body>
		</Card>
	);
};

export default Hotels;
