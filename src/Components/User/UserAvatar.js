import React from "react";

const UserAvatar = props => {
	return (
		<div className="avatar avatar-container">
			<img src={props.avatar_url} alt={props.login} className="image image-avatar" />
		</div>
	)
};

export default UserAvatar;