import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.addContact({"fullName": fullName, "email": email, "phone": phone, "address": address, "user": store.currentUser})
        navigate("/contacts")
    }

    return (
        <div className="container-fluid wrapper w-100 px-0">
            <h1 className="text-center mt-5">Add new contact to {store.currentUser}'s list.</h1>

            <div className="container flex-column justify-content-start mt-3">
                <form className="border border-2 border-dark-subtle rounded-2 p-3">

                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name." aria-describedby="nameHelp" />
                    </div>

                    <div class="mb-3">
                        <label for="emailAddress" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailAddress" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address." aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                        <label for="phoneNumber" class="form-label">Phone</label>
                        <input type="text" class="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number." id="phoneNumber" />
                    </div>

                    <div class="mb-3">
                        <label for="physicalAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Enter your physical address." id="physicalAddress" />
                    </div>

                    <button type="submit" class="btn btn-primary w-100" onSubmit={handleSubmit}>Save</button>
                    
                </form>
            </div>
        </div>

    );
};
