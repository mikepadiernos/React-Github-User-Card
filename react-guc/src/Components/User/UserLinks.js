import React from "react";

const UserLinks = props => {
	return (
		<div className="user user-links">
			<div><span><a href={props.blog}>{props.blog}</a></span></div>
			<div><span><a href={props.url}>{props.url}</a></span></div>

		</div>
	)
};

export default UserLinks;