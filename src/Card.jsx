import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

export class Card extends Component {

  handleTitle = (e) => {
    const {id, body} = this.props.idea
    this.props.updateIdea(id, e.target.value, body)
  }

  handleBody = (e) => {
    const {id, title} = this.props.idea
    this.props.updateIdea(id, title, e.target.value)
  }

  render() {
    console.log('Render Card')
    const {id, title, body} = this.props.idea
    return (
      <article>
        <ContentEditable html={title} onChange={this.handleTitle}/>
        <ContentEditable html={body} onChange={this.handleBody}/>
        <button onClick={() => this.props.delete(id)}>
          Delete
        </button>
      </article>
    )
  }
}

export default Card




