import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar"

import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

import "../../styles/contacts.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid wrapper w-100 px-0">
			<Navbar />

			<div className="container-fluid mx-auto text-center">

				<h1>{store.currentUser}</h1>

				<br />

				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
		
	);
};
