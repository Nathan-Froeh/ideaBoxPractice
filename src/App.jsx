
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
    this.setState({ideas: [...this.state.ideas, idea]})
  }

  handleDelete = (id) => {
    this.setState({ideas: this.state.ideas.filter(idea => idea.id !== id)})
  }

  render() {
    console.log('Rendering App')

    return (
      <div className='App'>
        <Form handleAdd={this.handleAdd}/>
        <CardContainer ideas={this.state.ideas} 
          handleDelete={this.handleDelete}/>
      </div>
    )
  }
}






export default App;



