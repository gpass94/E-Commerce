import React, { Component } from 'react'
import '../styles/Clothing.css';
import TShirt from '../imgs/clothing/MensSuit.jpeg';
import Pants from '../imgs/clothing/Pants.jpeg';
import Suits from '../imgs/clothing/MensSuit.jpeg';



export default class Clothing extends Component {
  render() {
    return(
      <div className='clothing'>
        <div className='categories-clothing'>
          <img src={TShirt} alt='Tshirt'/>
          <h2>T-Shirts</h2>
          <p>Here are our designer line speciality T-Shirts</p>
        </div>
        <div className='categories-clothing'>
          <img src= {Pants} alt='pants'/>
          <h2>Pants</h2>
          <p>Here are our designer line speciality Pants</p>
        </div>
        <div className='categories-clothing'>
          <img src={Suits} alt='suits'/>
          <h2>Suits</h2>
          <p>Here are our designer line speciality Suits</p>
        </div>
      </div>
    )
  }
}
