import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='baseLayout'>
        <nav className="row navbar navbar-inverse">
            <div className="container-fluid">
              <div className='navbar-header navDiv'>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <NavLink activeClassName='selected' className="nav-link" to='/'>Home</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink activeClassName='selected' className="nav-link" to="/books">Books</NavLink>
                  </li>

                  <li className ="nav-item">
                    <NavLink activeClassName='selected' className="nav-link" to="/appliances">Appliances</NavLink>
                  </li>

                  <li className ="nav-item">
                    <NavLink activeClassName='selected' className="nav-link" to="/clothing">Clothing</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink activeClassName='selected' className="nav-link" to="/checkout">Checkout</NavLink>
                  </li>
                </ul>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer>
          <p className='footer-p fp1'>Thank you for visiting our site today. </p>
           <p className='footer-p fp2'> Please feel
          free to contact us if you have any questions.</p>
          <nav className='footerNav'>
            <ul className="nav footerUl">
              <li className="nav-item">
                <NavLink activeClassName='selected' className='footerLink' activeStyle={{color: 'lightBlue'}} to="/contactUs">Contact Us</NavLink>
              </li>
            </ul>
          </nav>

        </footer>

      </div>
    )
  }
}
