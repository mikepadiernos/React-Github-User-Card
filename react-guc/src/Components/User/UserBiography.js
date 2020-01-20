import React from "react";

const UserBiography = props => {
	return (
		<div className="user user-biography">
			<div className="bio-container">
				<span className="bio bio-text">{props.bio}</span>
				{/*<span className="bio bio-label">Biography</span>*/}
			</div>
			{/*<div className="bio bio-container">*/}
			{/*	<span className="bio bio-text">{props.location}</span>*/}
			{/*	<span className="bio bio-label">Location</span>*/}
			{/*</div>*/}
		</div>
	)
};

export default UserBiography;