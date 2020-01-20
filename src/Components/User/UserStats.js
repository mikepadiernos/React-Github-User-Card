import React from "react";

const UserStats = props => {
	return (
		<div className="user user-stats">
			<div className="stats-container stats-repo">
				<span className="stats stats-text">{props.public_repos}</span>
				<span className="stats stats-label">Repos</span>
			</div>
			<div className="stats-container stats-followers">
				<span className="stats stats-text">{props.followers}</span>
				<span className="stats stats-label">Followers</span>
			</div>
			<div className="stats-container stats-following">
				<span className="stats stats-text">{props.following}</span>
				<span className="stats stats-label">Following</span>
			</div>
		</div>
	)
};

export default UserStats;