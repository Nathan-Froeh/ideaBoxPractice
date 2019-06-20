
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

  handleUpdate = (id, title, body) => { 
    this.state.ideas.forEach(idea => {
      if(idea.id === id) {
        idea.title = title;
        idea.body = body;
      }
    })
  }

  handleStar = (id) => {
    this.state.ideas.forEach(idea => {
      if(idea.id === id) {
        idea.star = !idea.star;
      }
    })
  }
  
  handleQuality = (id, quality) => {
    console.log('handleQuality')
    this.state.ideas.forEach(idea => {
      if(idea.id === id) {
        idea.quality = quality
      }
    })
  }

  render() {
    console.log('Rendering App')

    return (
      <div className='App'>
        <Form handleAdd={this.handleAdd}/>
        <CardContainer 
          ideas={this.state.ideas} 
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleStar={this.handleStar}
          handleQuality={this.handleQuality}
          />
      </div>
    )
  }
}






export default App;



