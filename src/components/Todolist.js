import React from 'react';
import Listitem from './Listitem';
import '../styles/todo-list.css';

class Todolist extends React.Component {
	
	render(){
		const { value } = this.props;
		return(
			<ul className="todo-list">
				{value.map((val) => 
				<Listitem key={val.id} 
				taskString={val.title} 
				onChange={()=>this.props.onCheckBoxClick(val.id)} 
				onDeleteClick={()=>this.props.onDeleteClick(val.id)}
				checkStatus={val.checked}/>)}
			</ul>
		);
  }
}

export default Todolist;