import React from "react";
import GitHubCalendar from "react-github-calendar";

const Follower = props => {
	return (
		<li className="card list-item">
			<article className="card-follower">
				{/*<header className="card-header">*/}
				{/*	<h3 className="card-title">*/}
				{/*		<a href={props.html_url}>*/}
				{/*			<i className="fa fa-github-alt" />*/}
				{/*			<span>@{props.login}</span>*/}
				{/*		</a>*/}
				{/*	</h3>*/}
				{/*</header>*/}
				<div className="card-avatar">
					<img src={props.avatar_url} alt={props.login} />
				</div>
				{/*<div className="card-links">*/}
				{/*	<a href={props.html_url}>*/}
				{/*		<i className="fa fa-github-alt" />*/}
				{/*		<span>Github</span>*/}
				{/*	</a>*/}
				{/*</div>*/}
				<GitHubCalendar
					username={props.login}
					// years={[2020, 2019]}
					// blockSize={5}
					// fullYear={false}
				/>
			</article>
		</li>
	)
};

export default Follower;