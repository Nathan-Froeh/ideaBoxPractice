import React, { Component } from 'react'
import Form from './Form'
import CardContainer from './CardContainer'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       ideas: []
    }
  }

  addIdea = (idea) => {
    this.setState({ideas: [...this.state.ideas, idea]})
  }

  handleDelete = (id) => {
    this.setState({ideas: this.state.ideas.filter(idea => idea.id !== id)})
  }

  handleIdea = (id, title, body) => {
    console.log('winning')
    this.setState({ideas: this.state.ideas.map(idea => {
      if (idea.id === id) {
        idea.title = title
        idea.body = body
      }
      return idea;
    })})
  }

  handleStar = (id) => {
    this.setState({ideas: this.state.ideas.map(idea => {
      if(idea.id === id) {
        idea.star = !idea.star
      }
      return idea;
    })})
  }



  render() {
    console.log('Render App')
    return (
      <main>
        <Form addIdea={this.addIdea}/>
        <CardContainer 
        ideas={this.state.ideas} 
        delete={this.handleDelete}
        updateIdea={this.handleIdea}
        star={this.handleStar}
        />
      </main>
    )
  }
}

export default App
