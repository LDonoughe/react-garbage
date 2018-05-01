import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {garbage: []}
    this.addGarbage = this.addGarbage.bind(this)
  }

  addGarbage() {
    alert('🗑️ haha you\'ve been totally trashed by React Garbage! 🗑️')
    this.setState({
      garbage: this.state.garbage + ['trash']
    })
  }
  
  render() {
    return (
      <div className="App">
        Welcome to React Garbage
      <br />
      <GenerateTrashButton addGarbage={this.addGarbage}/>
      </div>
    );
  }
}

const GenerateTrashButton = ({addGarbage}) => <button onClick={addGarbage}>Generate Trash</button> 

export default App;
