import React, { Component } from 'react';
import Card from './Card';



export class CardContainer extends Component {



  render() {
    console.log('Rendering CardContainer')
    
    return (
      <section>
        card container
        <Card/>
      </section>

    )
  }
}


export default CardContainer;