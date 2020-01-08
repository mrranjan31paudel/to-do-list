import React from 'react';
import '../styles/add-todo.css';

class Addtodo extends React.Component {
	
	keyDownCheck = e => {
		if(e.keyCode === 13 && e.target.value){
			this.props.onKeyDown(e.keyCode, e.target.value);
			e.target.value = '';
		}
	}
	render(){
		return(
			<div className="add-todo-box">
				<input className="add-todo-text" placeholder="Add a task" onKeyDown={this.keyDownCheck}/>
			</div>
		);
	}
}

export default Addtodo;