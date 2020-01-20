import React from "react";

const UserBiography = props => {
	return (
		<div className="user user-biography">
			<span className="bio-text">{props.bio}</span>
			<span className="bio-label">Biography</span>
			<span className="bio-text">{props.location}</span>
			<span className="bio-label">Location</span>
		</div>
	)
};

export default UserBiography;