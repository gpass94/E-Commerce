import React, { Component } from 'react';
import '../styles/Checkout.css';

export default class Checkout extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (


            <div className="shippingform">
                <h1>Checkout</h1>


                        {/* // Billing form */}


                <form action="form">
                    <p className="required">* Required Fields</p>
                    <div className="fieldset">
                        <fieldset>
                            <legend>Billing Info</legend>
                            <p><label className="field" for="Name"><span className="asterik">*</span><span>Name:</span></label></p>
                            <input  className= "inputfield" type = "text" name = "input" id= "required" required/>
                            <p><label className="field" for="Card Number"><span className="asterik">*</span><span>Card Info:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="Expiration Date"><span className="asterik">*</span><span>Expiration Date:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="CVC"><span className="asterik">*</span><span>CVC:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="Address"><span className="asterik">*</span><span>Address:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="City"><span className="asterik">*</span><span>City:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="State"><span className="asterik">*</span><span>State:</span></label></p>
                            <input className= "inputfield" type = "text" name = "input" id = "reguired" required/>
                            <p><label className="field" for="Zipcode"><span className="asterik">*</span><span>Zipcode:</span></label></p>
                            <input className= "inputfield" type = "text" name = "billName" id = "billingName" required/><br/>
                            <input className="formbtn" type="submit" value="submit" />
                        </fieldset>
                    </div>


                            {/* // Shipping form */}


                    <div className="fieldset">
                        <fieldset>
                            <legend>Shipping Info</legend>
                            <p><label className="field" for="Name"><span className="asterik">*</span><span>Name: </span></label></p>
                            <input className= "inputfield" type = "text" name = "billName" id = "billingName" required/>
                            <p><label className="field" for="Address"><span className="asterik">*</span><span>Address:</span></label></p>
                            <input  className= "inputfield" type = "text" name = "billName" id = "billingName" required/>
                            <p><label className="field" for="City"><span className="asterik">*</span><span>City:</span></label></p>
                            <input className= "inputfield" type = "text" name = "billName" id = "billingName" required/>
                            <p><label className="field" for="State"><span className="asterik">*</span><span>State:</span></label></p>
                            <input className= "inputfield" type = "text" name = "billName" id = "billingName" required/>
                            <p><label className="field" for="Zipcode"><span className="asterik">*</span><span>Zipcode:</span></label></p>
                            <input className= "inputfield"type = "text" name = "billName" id = "billingName" required/>
                            <p><label className="field" for="Phone"><span className="asterik">*</span><span>Phone Number:</span></label></p>
                            <input className= "inputfield" type = "text" name = "billName" id = "billingName" required/><br/>
                            <input className="formbtn" type="submit" value="Submit" />
                        </fieldset>
                    </div>
                </form>

                {/* // Items table */}
                <div className="carttable">
                <h3 id="tabletitle">My Cart</h3>

                <table class="table">
                        <tr>
                            <th>Items</th><br/>
                            <th className="price">Price</th>
                        </tr>

                        <tr class="coloredline">
                            <td>Business Hours + Weekly Kiln</td><br/>
                            <br/><td className="price">$50</td>
                        </tr>

                        <tf>Total Cost</tf>
                </table>
                </div>
            </div>

    );
  }
}
