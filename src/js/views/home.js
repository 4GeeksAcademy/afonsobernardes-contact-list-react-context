import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="wrapper text-center mt-3 py-3">

			<h1 className="mt-4">INSERT YOUR USERNAME!</h1>
			
			<span className="mt-5"> 
				<input className="text-center border rounded-3" value={store.currentUser ? store.currentUser : ""} placeholder="Insert username (agenda_slug)." onChange={(event) => actions.setUser(event.target.value)}></input>
			</span>

			<br/>

			
			<Link to="/contacts">
				<button className="btn btn-success mt-2"> 
					GET CONTACTS
				</button>
			</Link>

			
		</div>
	);
};
