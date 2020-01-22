import React from "react";

const Search = props => {

	return (
		<section className="search search-container">
			<div className="wrapper wrapper-search">
				<input
					placeholder='Search ...'
					onChange={props.handleChange}
					type="text"
					name="searchTerm"
					value={props.searchTerm}
				/>
			</div>
		</section>
	)
};

export default Search;