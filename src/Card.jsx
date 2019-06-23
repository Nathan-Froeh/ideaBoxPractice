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
    console.log(this.props.idea.star)
    const {id, title, body, star, quality} = this.props.idea
    return (
      <article>
        <button onClick={() => this.props.star(id)}>{`${star}`}</button>
        <ContentEditable html={title} onChange={this.handleTitle}/>
        <ContentEditable html={body} onChange={this.handleBody}/>
        <button onClick={() => this.props.delete(id)}>
          Delete
        </button>
        <button>UP</button>
        <p>{quality}</p>
        <button>DOWN</button>
      </article>
    )
  }
}

export default Card




