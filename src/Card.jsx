import React, { Component } from 'react'

export class Card extends Component {
  render() {
    console.log('Render Card')
    return (
      <article>
        <p>{this.props.idea.title}</p>
        <p>{this.props.idea.body}</p>
        <button onClick={() => this.props.delete(this.props.idea.id)}>Delete</button>
      </article>
    )
  }
}

export default Card
