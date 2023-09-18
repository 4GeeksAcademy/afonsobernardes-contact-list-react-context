import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<h1>{item.title}</h1>
					);
				})}
			</ul>

			<br />

			<Link to="/">
				<button className="btn btn-primary mx-auto">Back home</button>
			</Link>
		</div>
	);
};
