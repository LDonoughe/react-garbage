import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {garbage: []}
    this.addGarbage = this.addGarbage.bind(this)
    this.removeTrash = this.removeTrash.bind(this)
  }

  addGarbage() {
//    alert('🗑️ haha you\'ve been totally trashed by React Garbage! 🗑️')
    this.setState({
      garbage: [...this.state.garbage, 'trash']
    })
  }

  removeTrash() {
    this.setState({
      garbage: []
    })
  }
  
  render() {
    return (
      <div className="App">
        Welcome to React Garbage
      <br />
      <GenerateTrashButton addGarbage={this.addGarbage}/>
      <div className="Trash">
        {this.state.garbage.map(garbage => <div>{garbage}</div>)}
      </div>
      <RemoveTrashButton removeTrash={this.removeTrash}/>
      </div>
    );
  }
}

const GenerateTrashButton = ({addGarbage}) => <button onClick={addGarbage}>Generate Trash</button> 
const RemoveTrashButton = ({removeTrash}) => <button onClick={removeTrash}>Take out the Trash!</button> 

export default App;
