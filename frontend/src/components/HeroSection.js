import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroSection = () => {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted />
			<h1>Your next adventure awaits</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button className="btns">
					<Link className="landingbutton " to="/home">
						Get Started
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
