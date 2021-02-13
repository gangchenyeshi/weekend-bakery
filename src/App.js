import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';
import Button from './Components/Buttons';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTabs : 'add',
      items : []
    }
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.add = this.add.bind(this)
  }
  selectAdd() {
    this.setState ({
      activeTabs : 'add'
    })
  }
  selectList() {
    this.setState ({
      activeTabs : 'list'
    })
  }
  selectPay() {
    this.setState ({
      activeTabs : 'pay'
    })
  }
  add(name, price) {
    const obj = {
      name: name,
      price: parseInt(price)
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }
  
  renderContent = () => {
    switch(this.state.activeTabs) {
      case "add" :
        return <Add addItem = {this.add}></Add>
      case "list" :
        return <List listItems = {this.state.items}></List>
      case "pay" : 
      return <Pay items={this.state.items}></Pay> 
    }
  }

  render(){
    return(
      <div>
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs === "add" ? true : false}>Add</Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTabs === "list"  ? true : false}>List</Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs === "pay"  ? true : false}>Pay</Button>

        {this.renderContent()}
      </div>
    )
  }
}
export default App;
