import React, { Component } from 'react'
import Card from './Card'

export class CardContainer extends Component {

  render() {
    console.log('Render CardContainer')
    const cards = this.props.ideas.map(idea => <Card idea={idea} key={idea.id}/>)
    return (
      <section>
        {cards}
      </section>
    )
  }
}

export default CardContainer
