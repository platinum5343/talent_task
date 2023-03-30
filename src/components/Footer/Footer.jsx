import React from "react";
import "./Footer.scss";
import footer from "../../Assets/techtime.png";
import last1 from "../../Assets/last1.png"
import last2 from "../../Assets/last2.png"
import last4 from "../../Assets/last4.png"
import last5 from "../../Assets/last5.png";
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <img src={footer} alt="" />
            <p className="text-white">reach out to us on any of our social media networks</p>
            <div className="fotimg">
                <div>
                <img src={last1} alt="" />
                </div>
                <div>
                <img src={last2} alt="" />
                </div>
                <div>
                <FaYoutube className="ic"/>
                </div>
                <div>
                <img src={last4} alt="" />
                </div>
                <div>
                <img src={last5} alt="" />
                </div>
            </div>
          </div>
          <div className="col-md-2">
            <h5 className="text-white">Useful links</h5>
            <ul className="list-unstyled text-white">
              <li>Home</li>
              <li>About Us</li>
              <li>Our courses</li>
              <li>Testimonies</li>
              <li>Our Community</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="text-white">Community</h5>
            <ul className="list-unstyled text-white">
              <li>Help Centers</li>
              <li>Partners</li>
              <li>Suggestion</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Subscribe Us</h5>
            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="nft123@gmail.com"
              />
              <button
                className="btn btn-primary btn-lg"
                type="button"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
