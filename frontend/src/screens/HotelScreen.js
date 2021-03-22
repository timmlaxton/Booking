import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rating from '../components/Rating';

const HotelScreen = ({ match }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [hotel, setHotel] = useState({});

	useEffect(() => {
		const fetchHotel = async () => {
			const { data } = await axios.get(`/api/hotels/${match.params.id}`);

			setHotel(data);
		};

		fetchHotel();
	}, [match]);

	return (
		<>
			<Link className="button" to="/">
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
									<Col>
										<ListGroup.Item className="start-date">
											Start Date
											<br />
											<DatePicker
												className="datepicker"
												selected={startDate}
												onChange={(date) => setStartDate(date)}
												selectsStart
												startDate={startDate}
												endDate={endDate}
											/>
										</ListGroup.Item>
										<ListGroup.Item className="end-date">
											End date
											<br />
											<DatePicker
												className="datepicker"
												selected={endDate}
												onChange={(date) => setEndDate(date)}
												selectsEnd
												startDate={startDate}
												endDate={endDate}
												mindDate={startDate}
											/>
										</ListGroup.Item>
									</Col>
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
						<Image className="Pool-Image" src={hotel.image3} alt={hotel.name} fluid />
					</Zoom>
				</Col>
			</Row>
		</>
	);
};

export default HotelScreen;
