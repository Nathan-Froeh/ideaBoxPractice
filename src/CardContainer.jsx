import React, { Component } from 'react'
import Card from './Card'

export class CardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  
  render() {
    // console.log(this.props.ideas)
    const cards = this.props.ideas.map(idea => <Card idea={idea} key={idea.id}/>)
    return (
      <section>
        {cards}
      </section>
    )
  }
}

export default CardContainer
