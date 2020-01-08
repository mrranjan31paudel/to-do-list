import React from 'react';
import '../styles/button.css';

class Button extends React.Component {
	render(){
		return (
			<button className={'button-'+this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
		);
	}
}
export default Button;