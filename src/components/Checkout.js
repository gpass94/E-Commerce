import React, { Component } from 'react';
import '../styles/Checkout.css';

export default class Checkout extends Component {
    constructor(props){
        super(props);
    }

    render( {

        return (


            <div className="shippingform">
                <h1>Checkout</h1>


                        // Billing form


                <form action="form">
                    <p className="required">* Required</p>
                    <div className="fieldset">
                        <fieldset>
                            <legend>Billing Info</legend>
                            <p><label className="field" for="Name">*<span>Name</label></p>
                            <p><label className="field" for="Card Number">*<span>Card Info</label></p>
                            <p><label className="field" for="Expiration Date">*<span>Expiration Date</label></p>
                            <p><label className="field" for="CVC">*<span>CVC</label></p>
                            <p><label className="field" for="Address">*<span>Address</label></p>
                            <p><label className="field" for="City">*<span>City</label></p>
                            <p><label className="field" for="State">*<span>State</label></p>
                            <p><label className="field" for="Zipcode">*<span>Zipcode</label></p>
                        </fieldset>
                    </div>


                            // Shipping form


                    <div className="fieldset">
                        <fieldset>
                            <legend>Shipping Info</legend>
                            <p><label className="field" for="Name">*<span>Name</label></p>
                            <p><label className="field" for="Address">*<span>Address</label></p>
                            <p><label className="field" for="City">*<span>City</label></p>
                            <p><label className="field" for="State">*<span>State</label></p>
                            <p><label className="field" for="Zipcode">*<span>Zipcode</label></p>
                            <p><label className="field" for="Phone">*<span>Phone Number</label></p>
                        </fieldset>
                    </div>
                </form>

                // Items table

            <table>
                <tr>
                <th>My Cart</th>
                <td>>
                <ul>
                <li>Apples</li>
                <li>Oranges</li>
                <li>Bananas</li>
                </ul>
                </td>
                </tr>

                <tr>
                <th>Total Cost</th>
                <td>
                <ul>
                <li>$9.00</li>
                <li>$10.00</li>
                <li>$11.00</li>
                </ul>
                </td>
                </tr>
                </table>
                <input type="submit" value="Confirm Order">


            </div>


                )

            )
        }

    }
