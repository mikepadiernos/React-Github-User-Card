import React from "react";
import UserTitles from "./UserTitles";
import UserLinks from "./UserLinks";
import UserBiography from "./UserBiography";

const User = props => {
	return (
		<header role="banner" className="banner banner-container">
			<section className="user user-avatar">
				<img src={props.avatar_url} alt={props.login}/>
			</section>
			<section className="user user-demographics">
				<UserTitles
					name={props.name}
					login={props.login}
				/>
				<UserLinks
					url={props.url}
					repos_url={props.repos_url}
				/>
				<UserBiography
					bio={props.bio}
				/>
			</section>
		</header>
	)
};

export default User;