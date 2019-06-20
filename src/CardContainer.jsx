import React, { Component } from 'react';
import Card from './Card';



export class CardContainer extends Component {

  render() {
    console.log('Rendering CardContainer')
    console.log(this.props.ideas)
    const cards = this.props.ideas.map(idea => {
      return(
         <Card 
            key={idea.id} 
            id={idea.id} 
            title={idea.title} 
            body={idea.body} 
            star={idea.star}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
            handleStar={this.props.handleStar}
        />
      )
    })
    
    return (
      <section>
        {cards}
      </section>

    )
  }
}


export default CardContainer;