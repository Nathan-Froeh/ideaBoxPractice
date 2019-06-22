import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleAddIdea = (e) => {
    e.preventDefault()
    const idea = {
      title: this.state.title,
      body: this.state.body,
      id: Date.now(),
      star: false,
      quality: 'swill'
    }
    this.props.addIdea(idea)
  }


  render() {
    return (
      <form onSubmit={this.handleAddIdea}>
        <input type="text" placeholder='Title' name='inputTitle'/>
        <input type="text" placeholder='Body' name='inputBody'/>
        <input type="submit" value='Submit'/>
      </form>
    )
  }
}

export default Form
