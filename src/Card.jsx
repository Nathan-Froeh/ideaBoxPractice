import React, { Component } from 'react';


export class Card extends Component {


  render() {
    console.log('Rendering Card')
    const {title, body, id} = this.props
    return(
      <article>
        <p>{title}</p>
        <p>{body}</p>
        <button onClick={() => this.props.handleDelete(id)}>Delete</button>
      </article>

    )
  }
  
}


export default Card;