import React, { Component } from 'react';
import '../styles/Appliances.css';
import KitchenAppliances from '../imgs/appliances/KitchenAppliances.jpeg';
import DeepFreeze from '../imgs/appliances/deepfreeze.png';
import Dryer1 from '../imgs/appliances/dryer1.png';
import Dryer2 from '../imgs/appliances/dryer2.png';
import Dryer3 from '../imgs/appliances/dryer3.png';
import HotTub from '../imgs/appliances/hottub.png';
import IceBox from '../imgs/appliances/icebox.png';
import Microwave from '../imgs/appliances/microwave.png';
import Oven from '../imgs/appliances/oven.png';
import Toaster from '../imgs/appliances/toaster.png';
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
          <img src={DeepFreeze} alt="deepfreeze.png" width="300" height="200"/>
          <div className="desc">Can Put Many Fish Sandwiches Here</div>
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
          <img src={HotTub} alt="hottub.png" width="300" height="200"/>
          <div className="desc">That Is Plenty Hotdog Water!!</div>
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
          <img src={Toaster} alt="toaster.png" width="300" height="200"/>
          <div className="desc">No, You Cannot Cook Unwashed Rat In Here!!</div>
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
          <div className="clearfix"></div>
      </div>
    )
  }
}
