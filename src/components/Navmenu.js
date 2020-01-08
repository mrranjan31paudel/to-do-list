import React from 'react';
import Tab from './Tab';

class Navmenu extends React.Component {
	clickHandle = tabName => {
		this.props.tabClick(tabName);
	}
	render(){
		return(
			<div className = "nav-menu">
				<Tab value="Home" status={'Home'===this.props.activeTab? 'active': ''} onClick={this.clickHandle}/>
				<Tab value="Completed" status={'Completed'===this.props.activeTab? 'active': ''} onClick={this.clickHandle}/>
				<Tab value="Remaining" status={'Remaining'===this.props.activeTab? 'active': ''} onClick={this.clickHandle}/>
			</div>
		);
	}
}

export default Navmenu;