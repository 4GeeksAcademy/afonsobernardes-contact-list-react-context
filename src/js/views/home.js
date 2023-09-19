import React, { useContext } from "react";
import { Navbar } from "../component/navbar"
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">

			<Navbar />

			<h1>INSERT YOUR USERNAME!</h1>
			
			<span> 
				<input className="text-center w-50 border rounded-3" placeholder="Write your username (agenda_slug)" onChange={(e) => store.setUser(e.target.value)}></input>
			</span>

			
		</div>
	);
};
