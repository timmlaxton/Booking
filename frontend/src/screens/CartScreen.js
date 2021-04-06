import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
	const hotelId = match.params.id;

	const startDate = location.search ? Date(location.search.split('=')[1]) : 1;

	const endDate = location.search ? Date(location.search.split('=')[2]) : 2;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (hotelId) {
			dispatch(addToCart(hotelId, startDate, endDate));
		}
	}, [dispatch, hotelId, startDate, endDate]);

	const removeFromCartHandeler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {};
	history.push('/login?redirect=shipping');

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>
						Your cart is empty <Link to="/">Go back</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => (
							<ListGroup.Item key={item.hotel}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid />
									</Col>
									<Col md={3}>
										<Link to={`/hotel/${item.hotel}`}>{item.name}</Link>
									</Col>
									<Col className="startdate" md={2}>
										From:
										{item.startDate}
									</Col>
									<Col className="enddate" md={2}>
										To: {item.endDate}
									</Col>
									<Col md={1}>£{item.price}</Col>
									<Col md={1}>
										<Button
											className="trashButton"
											type="button"
											variant="light"
											onClick={() => removeFromCartHandeler(item.hotel)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2 className="subTotal">SubTotal: £ {cartItems.reduce((acc, item) => acc + item.price, 0)} </h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								className="checkout-button"
								type="button"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed to checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default CartScreen;
