import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Row, Image } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const userlogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userlogin;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<>
			<Row>
				<Col md={3}>
					<h1>Sign In</h1>
					{error && <Message variant="danger">{error}</Message>}
					{loading && <Loader />}
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="email">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Label>Enter Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type="submit" variant="primary">
							Sign In
						</Button>
					</Form>

					<Row className="py-3">
						<Col>
							New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
						</Col>
					</Row>
				</Col>
				<Col className="Hotel-Image">
					<Image
						className="Hotel-Image"
						src="https://images.unsplash.com/photo-1515258124536-ca51b09d5b1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaGxhbmQlMjBjb3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						alt=""
						fluid
					/>
				</Col>
			</Row>
		</>
	);
};

export default LoginScreen;
