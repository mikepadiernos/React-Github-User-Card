import React from "react";

const UserLinks = props => {
	return (
		<div className="user user-links">
			<span>Github:</span>
			<span><a href={props.url}>{props.url}</a></span>
		</div>
	)
}

export default UserLinks;