import e from 'express';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const DeliveryScreen = ({ history }) => {
	const [fullName, setFullName] = useState('');
	const [number, setNumber] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [county, setCounty] = useState('');
	const [postCode, setPostCode] = useState('');
	const [country, setCountry] = useState('');

	const dispatch = useDispatch();

	const submitHandler = () => {
		e.preventDefault();
		console.log('Submit');
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
								requiredonChange={(e) => setFullName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="number">
							<Form.Label>House/ Flat Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter house/ flat number"
								value={number}
								required
								onChange={(e) => setNumber(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="address">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter address"
								value={address}
								required
								oChange={(e) => setAddress(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="city">
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter city"
								value={city}
								required
								onChange={(e) => setCity(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="county">
							<Form.Label>County</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter county"
								value={county}
								required
								onChange={(e) => setCounty(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="postCode">
							<Form.Label>PostCode</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter postcode"
								value={postCode}
								required
								onChange={(e) => setPostCode(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="country">
							<Form.Label>Country</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Country"
								value={country}
								required
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
