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
              <img src="../img/product.jpg" />
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. '</p>
            </div>
            <div className='products'>
              <img src="../img/product.jpg" />
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. '</p>
            </div>
            <div className='products'>
              <img src="../img/product.jpg" />
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
              <a href='#'>
              my link
              </a>
            </div>
           </div>


          <div className='categoriesDiv'>
           <h1>Sci-Fi</h1>
           <div className='products'>
            <img src="../img/product.jpg" />
           <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies     aliquet sit amet, imperdiet id mi. ' </p>
           </div>
           <div className='products'>
            <img src="../img/product.jpg" />
             <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
             <a href='#'>
             my link
             </a>
           </div>
           <div className='products'>
            <img src="../img/product.jpg" />
             <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
             <a href='#'>
             my link
             </a>
           </div>

          </div>



          <div className='categoriesDiv bottomCategory'>
           <h1>Children</h1>
           <div className='products'>
            <img src="../img/product.jpg" />
           <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
           <a href='#'>
           my link
           </a>
            </div>
            <div className='products'>
              <img src="../img/product.jpg" />
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
              <a href='#'>
              my link
              </a>
            </div>
            <div className='products'>
              <img src="../img/product.jpg" />
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. ' </p>
              <a href='#'>
              my link
              </a>
            </div>
           </div>

          </div>
    )
  }
}
