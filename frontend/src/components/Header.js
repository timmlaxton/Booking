import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">Doon the watter</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#hotels">Hotels</Nav.Link>
							<Nav.Link href="#cart">Cart</Nav.Link>
							<Nav.Link href="#login">Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
