import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Books from './components/Books';
import ContactUs from './components/ContactUs';


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/books' component={Books} />
        <Route path='/contactUs' component={ContactUs} />
      </Switch>

    </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
