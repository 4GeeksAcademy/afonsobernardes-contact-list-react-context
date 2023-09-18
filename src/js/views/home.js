import React from "react";
import { Navbar } from "../component/navbar"
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center">

		<Navbar />

		<h1>INSERT YOUR USERNAME!</h1>
		
		<span> 
			<input className="text-center"></input>
		</span>

		
	</div>
);
