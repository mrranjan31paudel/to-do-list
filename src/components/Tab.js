import React from 'react';
import '../styles/tab-button.css';

class Tab extends React.Component {
	clickHandle = () => {
		this.props.onClick(this.props.value);
	}
	render(){
		return(
		<a className={'tab-button '+this.props.status} href={this.props.link} onClick={this.clickHandle}>{this.props.value}</a>
		);
	}
}

export default Tab;