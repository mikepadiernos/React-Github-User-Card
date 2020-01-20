import React from "react";
import Follower from "./Follower";

const FollowerList = props => {
	return (
		<section className="followers followers-container">
			<div className="wrapper wrapper-followers">
				<ul className="list-followers">
					{props.followers.map(follower => (
						<Follower
							key={follower.id}
							login={follower.login}
							avatar_url={follower.avatar_url}
						/>
					))}
				</ul>
			</div>
		</section>
	)
};

export default FollowerList;