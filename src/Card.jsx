import React, { Component } from 'react';


export class Card extends Component {


  render() {
    console.log('Card')
    const {title, body} = this.props
    return(
      <article>
        <p>{title}</p>
        <p>{body}</p>
        <button>Delete</button>
      </article>

    )
  }
  
}


export default Card;