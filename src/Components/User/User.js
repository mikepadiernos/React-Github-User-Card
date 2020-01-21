import React from "react";
import UserAvatar from "./UserAvatar";
import UserBiography from "./UserBiography";
import UserLinks from "./UserLinks";
import UserStats from "./UserStats";
import UserTitles from "./UserTitles";

const User = props => {
	return (
			<div className="wrapper wrapper-banner">
				<UserAvatar
					avatar_url={props.avatar_url}
					login={props.login}
				/>
				<section className="user user-demographics">
					<header className="user-header">
						<UserTitles
							name={props.name}
							login={props.login}
						/>
						<UserLinks
							blog={props.blog}
							html={props.html}
							repos_url={props.repos_url}
						/>
					</header>
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
	)
};

export default User;