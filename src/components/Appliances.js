import React, { Component } from 'react';
import '../styles/Appliances.css';
import KitchenAppliances from '../imgs/appliances/KitchenAppliances.jpeg';
import Dryer1 from '../imgs/appliances/dryer1.png';
import Dryer2 from '../imgs/appliances/dryer2.png';
import Dryer3 from '../imgs/appliances/dryer3.png';
import IceBox from '../imgs/appliances/icebox.png';
import Microwave from '../imgs/appliances/microwave.png';
import Oven from '../imgs/appliances/oven.png';
import Washer1 from '../imgs/appliances/washer1.png';
import Washer2 from '../imgs/appliances/washer2.png';
import Washer3 from '../imgs/appliances/washer3.png';

export default class Appliances extends Component {
  render() {
    return(
      <div>
      <div className="responsive">
        <div className="gallery">
          <img src={KitchenAppliances} alt="KitchenAppliances.jpeg" width="300" height="200"/>
          <div className="desc">Choose From Our Warehouse</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Dryer1} alt="dryer1.png" width="300" height="200"/>
          <div className="desc">Doubles As A Time Machine</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Dryer2} alt="dryer2.png" width="300" height="200"/>
          <div className="desc">Looks Good, Buy It!!</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Dryer3} alt="dryer3.png" width="300" height="200"/>
          <div className="desc">Not For Drying Raccoon Meat</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={IceBox} alt="icebox.png" width="300" height="200"/>
          <div className="desc">Keep You A Cold One Here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Microwave} alt="microwave.png" width="300" height="200"/>
          <div className="desc">Zap It Up!!</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Oven} alt="oven.png" width="300" height="200"/>
          <div className="desc">Best Seller Right Here!!</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Washer1} alt="washer1.png" width="300" height="200"/>
          <div className="desc">Not For Washing Raccoon Meat</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Washer2} alt="dryer1.png" width="300" height="200"/>
          <div className="desc">Doubles As A Time Machine, Also</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <img src={Washer3} alt="washer3.png" width="300" height="200"/>
          <div className="desc">Nice House Warming Gift!!</div>
        </div>
      </div>
      </div>
    )
  }
}




// <div className="clearfix"></div>
//
// <div style="padding:6px;">
// <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
// <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
// </div>
