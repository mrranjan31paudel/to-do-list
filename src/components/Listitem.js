import React from 'react';
import '../styles/list-item.css';

class Listitem extends React.Component {
	render(){
		const {taskString, checkStatus} = this.props;
		return(
			<li className="list-item">
				<p>{taskString}</p>
				<input className="check-box" type="checkbox" onChange={this.props.onChange} checked={checkStatus}/>
			</li>
		);
  }
}

export default Listitem;