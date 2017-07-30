import React, { Component } from 'react'
import '../styles/Clothing.css';

export default class Clothing extends Component {
  render() {
    return(
      <div className='clothing'>
        <div className='categories-clothing'>
          <img src= '../imgs/clothing/TShirt.jpg' alt='Tshirt'/>
          <h2>T-Shirts</h2>
          <p>Here are our designer line speciality T-Shirts</p>
        </div>
        <div className='categories-clothing'>
          <img src= '../imgs/clothing/Pants.jpeg' alt='pants'/>
          <h2>Pants</h2>
          <p>Here are our designer line speciality Pants</p>
        </div>
        <div className='categories-clothing'>
          <img src= '../imgs/clothing/MensSuit.jpeg' alt='suits'/>
          <h2>Suits</h2>
          <p>Here are our designer line speciality Suits</p>
        </div>
      </div>
    )
  }
}
