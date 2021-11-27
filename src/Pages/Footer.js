import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';

function Footer(props) {
return (
    <footer id="footer">
    <div className="footer-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Our Newsletter</h4>
                    <p>The winter collection is coming! More fun is waiting for you</p>
                </div>
                <div className="col-lg-6">
                    <form action="" method="post"> <input placeholder="Join us for a better revenue..." type="email" name="email"/><input type="submit"  value="Subscribe"/> </form>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 footer-links" style={{textAlign:"center"}}>
                    <h4>Useful Links</h4>
                    <ul style={{display:"inline-table"}}>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Home</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">About us</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Services</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links" style={{textAlign:"center"}}>
                    <h4>Our Services</h4>
                    <ul style={{display:"inline-table"}}>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Shopping</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Free Delivery</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Quality Guarantee</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Marketing</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a style={{textDecoration:"none"}} href="#">Selling</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p> 111 Gia Long <br/> Ho Chi Minh City<br/> Viet Nam <br/><br/> <strong>Phone:</strong> +1 2345 678<br/> <strong>Email:</strong> info@example.com<br/> </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-info">
                    <h3>About SHOPANORDIC</h3>
                    <p>We are global site brings you all the services you need. Your life will become a heaven by joining us.</p>
                    <div className="social-links mt-3"> <a href="#" className="twitter"><Icon icon="bx:bxl-twitter" /></a> <a href="#" className="facebook"><Icon icon="bx:bxl-facebook-circle" /></a> <a href="#" className="instagram"><Icon icon="entypo:email" />
</a> <a href="#" className="linkedin"><Icon icon="entypo-social:linkedin-with-circle" /></a> </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright"> © Copyright <strong><span>THIEN</span></strong>. All Rights Reserved </div>
        <div className="credits"> Designed by <a href="#">THIEN NGUYEN</a> </div>
    </div>
</footer>
)
}

export default Footer;