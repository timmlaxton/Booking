import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/home">
						<Navbar.Brand className="nav-brand">Doon the watter</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/hotels">
								<Nav.Link className="header-links">Hotels</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cart">
								<Nav.Link className="header-links">Cart</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown className="login-name" title={userInfo.name} id="uername">
									<LinkContainer className="dropdown-home" to="/profile">
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link className="header-links">Login</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
