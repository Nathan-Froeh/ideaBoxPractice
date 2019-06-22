import React, { Component } from 'react'
import Form from './Form'

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
      </main>
    )
  }
}

export default App
