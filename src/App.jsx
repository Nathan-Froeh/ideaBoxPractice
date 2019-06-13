
import React, { Component } from 'react';
import Form from './Form';
import CardContainer from './CardContainer';
import './App.css';



export class App extends Component {



  render() {
    console.log('Rendering App')

    return (
      <div className='App'>
        <Form/>
        <CardContainer/>
      </div>
    )
  }
}


export default App;
