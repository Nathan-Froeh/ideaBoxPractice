import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'

export class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.title,
       body: this.props.body
    }
  }

  handleTitle = (e) => {
    console.log(e)
    this.setState({title: e.target.value})
  }
  
  handleBody = (e) => {
    this.setState({body: e.target.value})
  }

  render() {
    console.log('Rendering Card')
    const {id, handleDelete} = this.props
    const {title, body} = this.state
    return(
      <article id={id}>
        <ContentEditable html={title} onChange={this.handleTitle} tagName='p' id={id}/>
        <ContentEditable html={body} onChange={this.handleBody} tagName='p'/>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </article>

    )
  }
  
}


export default Card;