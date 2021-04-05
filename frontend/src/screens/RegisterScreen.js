import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Row, Image } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match, please try again');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<>
			<Row>
				<div className="register-Image">
					<Image
						src="https://images.unsplash.com/photo-1543707012-c0830c6880e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29vZCUyMGZpcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
						alt=""
						fluid
					/>
				</div>
				<Col md={3}>
					<h1>Register an Account</h1>
					{message && <Message variant="danger">{message}</Message>}
					{error && <Message variant="danger">{error}</Message>}
					{loading && <Loader />}
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

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
								placeholder="Enter Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="confirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type="submit" variant="primary">
							Register Account
						</Button>
					</Form>

					<Row className="py-3">
						<Col>
							Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default RegisterScreen;
