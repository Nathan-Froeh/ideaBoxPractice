import React, { Component } from 'react'
import Card from './Card'

export class CardContainer extends Component {

  render() {
    console.log('Render CardContainer')
    const cards = this.props.ideas.map(idea => {
    return <Card 
      idea={idea} 
      key={idea.id} 
      delete={this.props.delete}
      updateIdea={this.props.updateIdea}
      star={this.props.star}
      />
    })
    return (
      <section>
        {cards}
      </section>
    )
  }
}

export default CardContainer
