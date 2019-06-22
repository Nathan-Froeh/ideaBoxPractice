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

  handleUpdate = (e) => {
  const {name, value} = e.target
  this.setState({[name]: value})
  }


  render() {
    console.log('Render Form')
    return (
      <form onSubmit={this.handleAddIdea}>
        <input 
        type="text" 
        placeholder='Title' 
        name='title' 
        onChange={this.handleUpdate}
        />
        <input 
        type="text" 
        placeholder='Body' 
        name='body'
        onChange={this.handleUpdate}
        />
        <input 
        type="submit" 
        value='Submit'
        />
      </form>
    )
  }
}

export default Form
