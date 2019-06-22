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


  render() {
    return (
      <main>
        <Form addIdea={this.addIdea}/>
        <CardContainer ideas={this.state.ideas}/>
      </main>
    )
  }
}

export default App
