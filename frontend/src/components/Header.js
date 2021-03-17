import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
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
							<LinkContainer to="/login">
								<Nav.Link className="header-links">Login</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
