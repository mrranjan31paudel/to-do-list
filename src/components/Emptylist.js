import React from 'react';
import '../styles/empty-list.css';

class Emptylist extends React.Component {
	render(){
		return(
			<div className="empty-list">
				<p>
					No tasks to show!
				</p>
			</div>
		);
	}
}

export default Emptylist;