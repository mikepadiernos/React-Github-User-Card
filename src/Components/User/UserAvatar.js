import React from "react";

const UserAvatar = props => {
	return (
		<section className="avatar avatar-container">
			<img src={props.avatar_url} alt={props.login} className="image image-avatar" />
		</section>
	)
};

export default UserAvatar;