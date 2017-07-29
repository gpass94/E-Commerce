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
            <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. Proin blandit pretium tincidunt. Morbi molestie neque id dui tincidunt aliquet. Vivamus malesuada magna et justo pellentesque ornare. Phasellus pellentesque nisi eros, a fermentum arcu scelerisque ut. Quisque iaculis neque urna, sed suscipit ex pellentesque pharetra. Mauris condimentum volutpat lobortis. Proin efficitur ex pharetra quam laoreet luctus quis at mi. Curabitur in massa ullamcorper, suscipit eros non, molestie neque. Nam at purus eget enim condimentum congue. Etiam et varius metus.'</p>
          </div>

          <div className='products'>
            <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. Proin blandit pretium tincidunt. Morbi molestie neque id dui tincidunt aliquet. Vivamus malesuada magna et justo pellentesque ornare. Phasellus pellentesque nisi eros, a fermentum arcu scelerisque ut. Quisque iaculis neque urna, sed suscipit ex pellentesque pharetra. Mauris condimentum volutpat lobortis. Proin efficitur ex pharetra quam laoreet luctus quis at mi. Curabitur in massa ullamcorper, suscipit eros non, molestie neque. Nam at purus eget enim condimentum congue. Etiam et varius metus.'</p>
          </div>

          <div className='products'>
            <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, ultricies nec aliquet sit amet, imperdiet id mi. Proin blandit pretium tincidunt. Morbi molestie neque id dui tincidunt aliquet. Vivamus malesuada magna et justo pellentesque ornare. Phasellus pellentesque nisi eros, a fermentum arcu scelerisque ut. Quisque iaculis neque urna, sed suscipit ex pellentesque pharetra. Mauris condimentum volutpat lobortis. Proin efficitur ex pharetra quam laoreet luctus quis at mi. Curabitur in massa ullamcorper, suscipit eros non, molestie neque. Nam at purus eget enim condimentum congue. Etiam et varius metus.'</p>
          </div>
        </div>

        <div className='categoriesDiv'>
         <h1>Computers</h1>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
          <div className='products'>
          </div>
        </div>

        <div className='categoriesDiv'>
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
