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
    // console.log(id)
    this.setState({ideas: this.state.ideas.filter(idea => idea.id !== id)})
  }

  render() {
    console.log('Render App')
    return (
      <main>
        <Form addIdea={this.addIdea}/>
        <CardContainer ideas={this.state.ideas} delete={this.handleDelete}/>
      </main>
    )
  }
}

export default App
