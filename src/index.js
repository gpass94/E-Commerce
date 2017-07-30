import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Books from './components/Books';
import ContactUs from './components/ContactUs';
import Appliances from './components/Appliances';
import Clothing from './components/Clothing';
<<<<<<< HEAD
import Entertainment from './components/Entertainment';
=======
import Checkout from './components/Checkout';
>>>>>>> 6709904e0406be99fe921f8ad1064325506732fd



ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>

      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/books' component={Books} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/appliances' component={Appliances} />
        <Route path='/clothing' component={Clothing} />
<<<<<<< HEAD
        <Route path='/entertainment' component={Entertainment} />
=======
        <Route path='/checkout' component={Checkout} />
>>>>>>> 6709904e0406be99fe921f8ad1064325506732fd

      </Switch>

    </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
