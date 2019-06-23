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

  handleQuality = (num) => {
    const stats = ['Swill', 'Not Bad', 'Cool', 'Sweet', 'Ledgen-Dairy']
    const index = stats.indexOf(this.props.idea.quality)
    if(index !== 0 && num === -1) {
      this.props.quality(this.props.idea.id, stats[index + num])
    } else if(index !== 4 && num === 1) {
      this.props.quality(this.props.idea.id, stats[index + num])
    }
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
        <button onClick={() => this.handleQuality(1)}>UP</button>
        <p>{quality}</p>
        <button onClick={() => this.handleQuality(-1)}>DOWN</button>
      </article>
    )
  }
}

export default Card




