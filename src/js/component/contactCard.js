import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


export const ContactCard = (props) => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleDelete = (event) => {
		event.preventDefault()
		actions.deleteContact(props.info.id)
		navigate("/contacts")
	}

	const edit = (event) => {
		event.preventDefault()
		navigate("/editContact", 
				{
					state: {
						"fullName": props.info.full_name, 
						"id": props.info.id, 
						"address": props.info.address, 
						"phone": props.info.phone,
						"email": props.info.email,
					}
				});
	}

	return (
		<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IvZ2fAIG0aUvttrAzZPAvQHaHa%26pid%3DApi&f=1&ipt=4138fbe50f6327c68d7897836bd86c838325499603141994b778708f19e36f5f&ipo=images" alt="twbs" width="100" height="100" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div className="text-start">
					<h6 className="mb-3 fs-5"> {props.info.full_name}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faLocationDot} size={"xs"} /> {props.info.address}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faPhone} size={"xs"} /> {props.info.phone}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faEnvelope} size={"xs"} /> {props.info.email}</h6>
				</div>

				<div className="d-flex justify-space-between">
					<button className="btn opacity-50" onClick={edit}> <FontAwesomeIcon className="me-1" icon={faPencil} /> </button>
					<button className="btn opacity-50" onClick={handleDelete}> <FontAwesomeIcon className="me-1" icon={faTrash} /> </button>
				</div>
			</div>
		</a>)
};