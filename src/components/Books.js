import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Books.css';
import '../styles/BaseLayout.css';

export default class Books extends Component {
  render() {
    return(
      <div className='booksDiv'>


          <div className='categoriesDiv'>
           <h1>Non-Fiction</h1>
            <div className='products'>
            </div>
            <div className='products'>
            </div>
            <div className='products'>
            </div>
          </div>

          <div className='categoresDiv'>
           <h1>Sci-Fi</h1>
           <div className='products'>
           </div>
           <div className='products'>
           </div>
           <div className='products'>
           </div>
          </div>

          <div className='categoresDiv'>
           <h1>Children</h1>
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
