import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
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

const StatelessApp = (garbage) => {
  console.log('garbage')
  console.log(garbage)
  return (
  <div className="App">
        Welcome to React Garbage
      <br />
      <GenerateTrashButton/> 
      <div className="Trash">
        {garbage.map(garbage => <div>{garbage}</div>)}
      </div>
      <RemoveTrashButton/>
      </div>
  )
}

const GenerateTrashButton = ({addGarbage}) => <button onClick={addGarbage}>Generate Trash</button> 
const RemoveTrashButton = ({removeTrash}) => <button onClick={removeTrash}>Take out the Trash!</button> 

  FIXME: debug state to props
export default connect(state => ({garbage: state}))(StatelessApp)
