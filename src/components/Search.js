import React from 'react';
import '../styles/search.css';

class Search extends React.Component {
	onChangeHandle = (e) => {
		this.props.onChange(e.target.value);
	}

	render(){
		return(
			<div className="search-box">
				<input className="search-text" placeholder="Search" onChange={this.onChangeHandle} value={this.props.searchText}/>
			</div>
		);
	}
}

export default Search;