import React, { Component } from 'react';
import BooksImg from '../imgs/books/BooksImg.jpeg';
import KitchenAppliances from '../imgs/appliances/KitchenAppliances.jpeg';
import MensApparel from '../imgs/clothing/MensApparel.jpeg';
import MultipleDevices from '../imgs/entertainment/MultipleDevices.jpeg';

import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">

        <div className='homeDiv-1'>
          <h2>Welcome to the New Amazon !</h2>
        </div>

                {/* Mid Page Section */}

        <div className="carousel slide midSectionDiv" data-ride="carousel" data-interval="3000">
          <div className="carousel-inner midSectionDiv" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid homeImgs" src={BooksImg} alt="Books"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid homeImgs" src={KitchenAppliances} alt="Appliances"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid homeImgs" src={MensApparel} alt="Clothing"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid homeImgs" src={MultipleDevices} alt="Entertainment Devices"/>
            </div>
          </div>
        </div>

        <p className='descriptionDev'> Here at the <strong>New Amazon</strong> we have a number of things to choose from
          so please look around and see if there is somthing that catches you eye. After you found something you like then
         just add it to you cart and keep on browsing till you are ready to checkout!</p>
        <p className='descriptionDev'> Have fun and spend some money ;)</p>

        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}
