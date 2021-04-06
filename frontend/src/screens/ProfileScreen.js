import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';

const ProfileScreen = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		} else {
			if (!user.name) {
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, history, userInfo, user]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords are incorrect, please try again');
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password }));
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h1>Profile Details</h1>

				{message && <Message variant="danger">{message}</Message>}
				{error && <Message variant="danger">{error}</Message>}
				{success && <Message variant="success">Profile updated</Message>}
				{loading && <Loader />}

				<Form onSubmit={submitHandler}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="name"
							placeHolder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Passwpord</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="confrimPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							value={password}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Update details
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h1>My orders</h1>
				<Table bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>Booking Date</th>
						</tr>
					</thead>
				</Table>
			</Col>
		</Row>
	);
};

export default ProfileScreen;
