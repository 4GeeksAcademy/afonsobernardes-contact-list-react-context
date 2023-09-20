import React from "react";

export const ContactCard = (info) => {
	return (
		<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IvZ2fAIG0aUvttrAzZPAvQHaHa%26pid%3DApi&f=1&ipt=4138fbe50f6327c68d7897836bd86c838325499603141994b778708f19e36f5f&ipo=images" alt="twbs" width="100" height="100" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div>
					<h6 className="mb-0">{info.fullName}</h6>
					<h6 className="mb-0">{info.address}</h6>
					<h6 className="mb-0">{info.phone}</h6>
					<h6 className="mb-0">{info.email}</h6>
					<p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
				</div>
				<small className="opacity-50 text-nowrap">now</small>
			</div>
		</a>)
};