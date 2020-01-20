import React from "react";

const UserTitles = props => {
	return (
		<header>
			<span className="user-name">
				<h1>{props.name}</h1>
			</span>
			<span className="user-login">
				<h2>@{props.login}</h2>
			</span>
		</header>
	)
};

export default UserTitles;