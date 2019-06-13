
import React, { Component } from 'react';
import Form from './Form';
import CardContainer from './CardContainer';
import './App.css';



export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       ideas: []
    }
  }
  
  handleAdd = (idea) => {
    console.log(idea)
  }

  render() {
    console.log('Rendering App')

    return (
      <div className='App'>
        <Form handleAdd={this.handleAdd}/>
        <CardContainer ideas={this.state.ideas}/>
      </div>
    )
  }
}


export default App;
