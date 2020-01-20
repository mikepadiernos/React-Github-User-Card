import React from "react";

const Follower = props => {
	return (
		<li className="card list-item">
			<article className="card-follower">
				<header className="card-header">
					<h3 className="card-title">
						<span>{props.login}</span>
					</h3>
				</header>
				<div className="card-avatar">
					<img src={props.avatar_url} alt={props.login} />
				</div>
				<div className="card-links">
					<a href={props.html}>
						<i className="fa fa-github" />
						<span>Github</span>
					</a>
				</div>
			</article>
		</li>
	)
};

export default Follower;