import React from 'react';
import '../styles/list-item.css';
import deleteImg from '../images/delete.png';

class Listitem extends React.Component {
	render(){
		const {taskString, checkStatus} = this.props;
		return(
			<li className="list-item">
				<input className="check-box" type="checkbox" onChange={this.props.onChange} checked={checkStatus}/>
				<p>{taskString}</p>
				<button className="delete-button" onClick={this.props.onDeleteClick}>
					<img src={deleteImg} alt=""></img>
				</button>
			</li>
		);
  }
}

export default Listitem;