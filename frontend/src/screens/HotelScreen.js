import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rating from '../components/Rating';
import { listHotelDetails } from '../actions/hotelActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HotelScreen = ({ match, history }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const dispatch = useDispatch();

	const hotelDetails = useSelector((state) => state.hotelDetails);
	const { loading, error, hotel } = hotelDetails;

	useEffect(() => {
		dispatch(listHotelDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?starDate=${startDate}?endDate=${endDate}`);
	};

	return (
		<>
			<Link className="button" to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
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
												<ListGroup.Item className="reservation-button">
													<Button onClick={addToCartHandler} className="btn-block" type="button">
														Make a Reservation
													</Button>
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
			)}
		</>
	);
};

export default HotelScreen;
