import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end">
			<Link to="/contacts">
				<button className="btn btn-success me-5">Add new contact</button>
			</Link>
		</nav>
	);
};
