import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Entertainment.css';
import '../styles/BaseLayout.css';


export default class Entertainment extends Component {
  render() {
    return(
    <div className='entertainmentDiv'>


        <div className='categoriesDiv'>
         <h1>Televisions</h1>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
        </div>

        <div className='categoresDiv'>
         <h1>Computers</h1>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
        </div>

        <div className='categoresDiv'>
         <h1>Printers</h1>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
        </div>





      </div>
    )
  }
}
