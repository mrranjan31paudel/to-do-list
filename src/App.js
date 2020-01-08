import React from 'react';
import Navmenu from './components/Navmenu';
import Search from './components/Search';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import Emptylist from './components/Emptylist';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data : [],
      searchInputString : '',
      clickedTabName : 'Home',
      indexUpdate : 0,
    };
  }

  taskInputCompleted = (keyCode, inputTitle) => {
    if(keyCode === 13){
      this.setState({
        data : [...this.state.data, {id:this.state.indexUpdate, title: inputTitle, checked: false}],
        indexUpdate : this.state.indexUpdate + 1,
      });
    }
  }

  searchInput = input => {
    this.setState({
      searchInputString : input,
    }); 
  }

  tabClickHandle = clickedTab => {
    this.setState({
      clickedTabName : clickedTab,
      searchInputString : '',
    });
  }

  checkBoxHandle = (indexOftask) => {
    const formerPortion = this.state.data.slice(0, indexOftask);
    const toChange = {id:this.state.data[indexOftask].id, title:this.state.data[indexOftask].title, checked: this.state.data[indexOftask].checked};
    const laterPortion = this.state.data.slice(indexOftask+1);
    this.setState({
      data : [...formerPortion, {id:toChange.id, title: toChange.title, checked: !toChange.checked}, ...laterPortion],
    });
  }

  filterDataToRender = () => {
    if(this.state.clickedTabName === 'Home'){
      return this.state.data.filter(val => val.title.includes(this.state.searchInputString));
    }
    else if(this.state.clickedTabName === 'Completed'){
      return this.state.data.filter(val => val.checked===true).filter(val => val.title.includes(this.state.searchInputString));
    }
    else if(this.state.clickedTabName === 'Remaining'){
      return this.state.data.filter(val => val.checked===false).filter(val => val.title.includes(this.state.searchInputString));
    }
  }

  render(){
    return (
      <div className="App">
        <Navmenu tabClick={this.tabClickHandle} activeTab={this.state.clickedTabName}/>
        <Search onChange={this.searchInput} searchText={this.state.searchInputString}/>
        <Addtodo onKeyDown={this.taskInputCompleted}/>
        {
          this.filterDataToRender().length!==0 ? //if
          <Todolist value={this.filterDataToRender()} onCheckBoxClick={this.checkBoxHandle}/> : //else
          <Emptylist/>
        }
      </div>
    );
  }
}

export default App;