import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


export const ContactCard = (info, index) => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleDelete = (event) => {
		event.preventDefault()
		actions.deleteContact(info.id)
		navigate("/contacts")
	}

	return (
		<a href="#" key={index} className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IvZ2fAIG0aUvttrAzZPAvQHaHa%26pid%3DApi&f=1&ipt=4138fbe50f6327c68d7897836bd86c838325499603141994b778708f19e36f5f&ipo=images" alt="twbs" width="100" height="100" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div className="text-start">
					<h6 className="mb-3 fs-5"> {info.full_name}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faLocationDot} size={"xs"} /> {info.address}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faPhone} size={"xs"} /> {info.phone}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faEnvelope} size={"xs"} /> {info.email}</h6>
				</div>

				<div className="d-flex justify-space-between">
					<div className="btn opacity-50"> <FontAwesomeIcon className="me-1" icon={faPencil} /> </div>
					<div className="btn opacity-50" onClick={() => actions.deleteContact(info.id)}> <FontAwesomeIcon className="me-1" icon={faTrash} /> </div>
				</div>
			</div>
		</a>)
};