import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveDeliveryAddress } from '../actions/cartActions';

const DeliveryScreen = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { deliveryAddress } = cart;

	const [fullName, setFullName] = useState(deliveryAddress.fullName);
	const [number, setNumber] = useState(deliveryAddress.number);
	const [address, setAddress] = useState(deliveryAddress.address);
	const [city, setCity] = useState(deliveryAddress.city);
	const [county, setCounty] = useState(deliveryAddress.county);
	const [postCode, setPostCode] = useState(deliveryAddress.postCode);
	const [country, setCountry] = useState(deliveryAddress.country);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveDeliveryAddress({ fullName, number, address, city, county, postCode, country }));
		history.push('/payment');
	};

	return (
		<>
			<Row>
				<Col md={6}>
					<h1>Delivery Details</h1>

					<Form onSubmit={submitHandler}>
						<Form.Group controlId="fullName">
							<Form.Label>Full Name (First and Last Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Name"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="number">
							<Form.Label>House/ Flat Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter house/ flat number"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="address">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="city">
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter city"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="county">
							<Form.Label>County</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter county"
								value={county}
								onChange={(e) => setCounty(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="postCode">
							<Form.Label>PostCode</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter postcode"
								value={postCode}
								onChange={(e) => setPostCode(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="country">
							<Form.Label>Country</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Country"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button className="justify-content-center" type="submit" variant="primary">
							Continue
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default DeliveryScreen;
