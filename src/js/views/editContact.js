import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useLocation } from "react-router-dom";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    
    // Want to use old values to initialise.
    const [fullName, setFullName] = useState(location.state.fullName)
    const [email, setEmail] = useState(location.state.email)
    const [phone, setPhone] = useState(location.state.phone)
    const [address, setAddress] = useState(location.state.address)
    const [id, setId] = useState(location.state.id)


    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editContact({"fullName": fullName, "id": id, "email": email, "phone": phone, "address": address, "user": store.currentUser})
        navigate("/contacts")
    }

    return (
        <div className="container-fluid wrapper w-100 px-0">
            <h1 className="text-center mt-5">Update contact from {store.currentUser}'s list.</h1>

            <div className="container flex-column justify-content-start mt-3">
                <form className="border border-2 border-dark-subtle rounded-2 p-3">

                    <div className="mb-3">
                        <label htmlFor="fullName" value={fullName} className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name." aria-describedby="nameHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailAddress" value={email} className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address." aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneNumber" value={phone} className="form-label">Phone</label>
                        <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number." id="phoneNumber" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="physicalAddress" value={address} className="form-label">Address</label>
                        <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Enter your physical address." id="physicalAddress" />
                    </div>

                    
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>Save</button>
                    
                
                </form>
            </div>
        </div>

    );
};
