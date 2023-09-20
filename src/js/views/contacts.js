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

				<h2>{store.currentUser ? `Current user: ${store.currentUser}` : "No user selected."}</h2>

				<br />
				<ul>
					{
						store.contacts.map((item, index) => {
							console.log(item)
							return (
								<li>
									<ContactCard fullName={item.full_name} email={item.email} address={item.address} phone={item.phone} />
								</li>
							);
						})
					}
				</ul>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
		
	);
};
