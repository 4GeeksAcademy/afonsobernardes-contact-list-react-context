import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const ContactCard = (info) => {
	return (
		<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IvZ2fAIG0aUvttrAzZPAvQHaHa%26pid%3DApi&f=1&ipt=4138fbe50f6327c68d7897836bd86c838325499603141994b778708f19e36f5f&ipo=images" alt="twbs" width="100" height="100" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div className="text-start">
					<h6 className="mb-3 fs-5"> {info.full_name}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faLocationDot} size={"xs"}/> {info.address}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faPhone} size={"xs"}/> {info.phone}</h6>
					<h6 className="mb-1 opacity-50"> <FontAwesomeIcon className="me-1" icon={faEnvelope} size={"xs"}/> {info.email}</h6>
				</div>
				<small className="opacity-50 text-nowrap">now</small>
			</div>
		</a>)
};