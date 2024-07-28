import React from "react";
import '../css/ContactUs.css'


export default function ContactUs() {
    return (
        <div class="content">
            <h2>Contact Us</h2>
            <p class="para">Resume your travel button, we're planning your next adventure & delightful vacation with your family & friends,
                have a question for us, or need inspiration? We're here to help.</p>
            <div className="contact-details">
                <div className="address">
                    <h3>Address</h3>
                    <p>2nd Floor, S.S. Heights,<br />
                        Dammaiguda, P.S. Rao Nagar,<br />
                        Hyderabad - 500083</p>
                </div>
                <div className="contact-info">
                    <h3>Contact Info:</h3>
                    <p>Email: help@gotravelindia.in<br />
                        Gaurav: +91-9490247125 <br />
                        Dev Rajput: +91-7799333590 </p>

                </div>

            </div>

        </div>

    );
}