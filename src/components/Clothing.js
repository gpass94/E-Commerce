import React, { Component } from 'react'
import '../styles/Clothing.css';
import '../styles/BaseLayout.css';
import TShirt from '../imgs/clothing/TShirt.jpg';
import Pants from '../imgs/clothing/Pants.jpeg';
import Suits from '../imgs/clothing/MensSuit.jpeg';



export default class Clothing extends Component {
  render() {
    return(
      <div className='clothing'>
        <div className='categories-tshirt'>
          <img src={TShirt} alt='Tshirt'/>
          <h2>T-Shirts</h2>
          <h6>15.99</h6>
          <p>Here are our designer line speciality T-Shirts</p>
        </div>
        <div className='categories-pants'>
          <img src= {Pants} alt='pants'/>
          <h2>Pants</h2>
          <h6>25.99</h6>
          <p>Here are our designer line speciality Pants</p>
        </div>
        <div className='categories-suits'>
          <img src={Suits} alt='suits'/>
          <h2>Suits</h2>
          <h6>149.99</h6>
          <p>Here are our designer line speciality Suits</p>
        </div>
      </div>
    )
  }
}
