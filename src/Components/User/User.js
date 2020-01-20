import React from "react";
import UserAvatar from "./UserAvatar";
import UserBiography from "./UserBiography";
import UserLinks from "./UserLinks";
import UserStats from "./UserStats";
import UserTitles from "./UserTitles";

const User = props => {
	return (
		<header role="banner" className="banner banner-container">
			<div className="wrapper wrapper-banner">
				<section className="user user-avatar">
					<UserAvatar
						avatar_url={props.avatar_url}
						login={props.login}
					/>
				</section>
				<section className="user user-demographics">
					<UserTitles
						name={props.name}
						login={props.login}
					/>
					<UserLinks
						blog={props.blog}
						html={props.html}
						repos_url={props.repos_url}
					/>
					<UserBiography
						bio={props.bio}
						location={props.location}
					/>
					<UserStats
						public_repos={props.public_repos}
						followers={props.followers}
						following={props.following}
					/>
				</section>
			</div>
		</header>
	)
};

export default User;