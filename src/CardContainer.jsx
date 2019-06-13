import React, { Component } from 'react';
import Card from './Card';



export class CardContainer extends Component {



  render() {
    console.log('Rendering CardContainer')
    console.log(this.props.ideas)
    return (
      <section>
        {this.props.ideas.map(idea => {
          return <Card key={idea.id} id={idea.id} title={idea.title} 
          body={idea.body}/>
        })}
      </section>

    )
  }
}


export default CardContainer;