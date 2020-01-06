import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(store.agenda[props.match.params.theindex].full_name);
	const [address, setAddress] = useState(store.agenda[props.match.params.theindex].address);
	const [phone, setPhone] = useState(store.agenda[props.match.params.theindex].phone);
	const [email, setEmail] = useState(store.agenda[props.match.params.theindex].email);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">
					Edit contact
					{props.match.params.theid}
				</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={name}
							onChange={e => setName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={address}
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={address}
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => actions.editContact(name, address, phone, email)}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object
};
