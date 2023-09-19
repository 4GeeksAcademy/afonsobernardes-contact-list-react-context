import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";

import "../../styles/contacts.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid mx-auto text-center my-5">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<ContactCard contact={item}/>
					);
				})}
			</ul>

			<br />

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
