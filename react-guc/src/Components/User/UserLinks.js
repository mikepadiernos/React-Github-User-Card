import React from "react";

const UserLinks = props => {
	return (
		<div className="user user-links">
			<div>
				<a href={props.blog}>
					<i className="fa fa-globe" />
						<span>Blog</span>
				</a>
			</div>
			<div>
				<a href={props.url}>
					<i className="fa fa-github" />
						<span>Github</span>
				</a>
			</div>
		</div>
	)
};

export default UserLinks;