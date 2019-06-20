import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'

export class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.title,
       body: this.props.body,
       star: this.props.star,
       quality: this.props.quality
    }
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value})
    this.props.handleUpdate(this.props.id, e.target.value, this.state.body)
  }
  
  handleBody = (e) => {
    this.setState({body: e.target.value})
    this.props.handleUpdate(this.props.id, this.state.title, e.target.value)
  }

  handleUpdateStar = () => {
    this.setState({star: !this.state.star})
    this.props.handleStar(this.props.id)
  }

  handleUpdateQuality = (num) => {
    let quality = ['Swill', 'Neat', 'Legendary']
    let index = quality.indexOf(this.state.quality)
    if (index === 0 && num === -1) {
      num = 0
    } else if (index === 2 && num === 1) {
      num = 0
    }
    this.setState({quality: quality[index + num]})
    this.props.handleQuality(this.props.id, quality[index + num])
  }

  render() {
    console.log('Rendering Card')
    const {id, handleDelete} = this.props
    const {title, body} = this.state
    return (
      <article id={id}>
        <button name='star' onClick={this.handleUpdateStar}>
          {'Star ' + this.state.star}
        </button>
        <ContentEditable html={title} onChange={this.handleTitle} tagName='p'/>
        <ContentEditable html={body} onChange={this.handleBody} tagName='p'/>
        <button onClick={() => this.handleUpdateQuality(1)}>Up</button>
        <p>{this.state.quality}</p>
        <button onClick={() => this.handleUpdateQuality(-1)}>Down</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </article>
    )
  }
}


export default Card;