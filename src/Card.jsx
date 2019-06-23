import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

export class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    }
  }

  handleTitle = (e) => {
    const {id, body} = this.props.idea
    this.setState({title: e.target.value})
    this.props.updateIdea(id, e.target.value, body)
  }

  handleBody = (e) => {
    const {id, title} = this.props.idea
    this.setState({body: e.target.value})
    this.props.updateIdea(id, title, e.target.value)
  }

  render() {
    console.log('Render Card')
    const {id} = this.props.idea
    const {title, body} = this.state
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




// content editable