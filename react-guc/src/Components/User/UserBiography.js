import React from "react";

const UserBiography = props => {
	return (
		<div className="user user-biography">
			<p>
				{props.bio}
			</p>
		</div>
	)
}

export default UserBiography;