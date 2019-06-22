import React, { Component } from 'react'

export class Card extends Component {
  render() {
    console.log('Render Card')
    return (
      <article>
        <p>{this.props.idea.title}</p>
        <p>{this.props.idea.body}</p>
      </article>
    )
  }
}

export default Card
