import React, { Component } from 'react';

export class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       body: ''
    }
  }
  

  handleUpdate = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, body} = this.state;
    const idea = {
      title: title,
      body: body,
      id: Date.now(),
      star: false,
      quality: 'Swill'
    }
    this.props.handleAdd(idea)
  }

  render() {
    console.log('Rendering Form')

    const {title, body} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='title' value={title} onChange={this.handleUpdate}/>
        <input type="text" name='body' value={body} onChange={this.handleUpdate}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default Form;