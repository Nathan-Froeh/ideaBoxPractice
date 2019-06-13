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

  // handleSubmit = () => {


  //   this.props.handleAdd()
  // }

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