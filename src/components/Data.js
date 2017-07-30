import React { Component } from 'react'

export default class Data extends Component {
  constructor(props){
    super(props);

    this.state={
      cartStaged: [],
      cartUnStaged: [],
      value: ''
    }
  }
  render(){
    return(
      <div className='dataDiv'>
        <p>Happy Day !</p>
      </div>
    )
  }
}
