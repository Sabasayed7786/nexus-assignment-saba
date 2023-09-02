import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [subscribeChecked, setSubscribeChecked] = useState(false);

  const handleSubscribeChange = () => {
    setSubscribeChecked(!subscribeChecked);
  };

  return (
    <footer className="footer">
      <div className="Parent">
      <div className="subscribe-and-email">
        <div className="subscribe-section">
          <label>
            <input
              type="checkbox"
              checked={subscribeChecked}
              onChange={handleSubscribeChange}
            />
            Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.
          </label>
        </div>
        <div className="email-section">
          <p>Subscribe to Aesop communications.</p>
          <input type="email" placeholder="Email address" className="email-sec"/>
        </div>
      </div>
      <div className="footer-links">
        <div className="column">
          <h4>Orders and support</h4>
          <ul>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order history</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="column">
          <h4>Services</h4>
          <ul>
            <li>Live assistance</li>
            <li>Corporate gifts</li>
            <li>Facial Appointments</li>
            <li>Click and Collect</li>
            <li>Video consultation</li>
            <li>Location preferences</li>
          </ul>
        </div>
        <div className="column">
          <h4>Shipping:</h4>
          <p>Hong Kong SAR, China</p>
          <h4>Language:</h4>
          <p>繁體中文</p>
          <p>English</p>
        </div>
      </div>
      <div className="sustainability-section">
        <p>
          All Aesop products are vegan, and we do not test our formulations or
          ingredients on animals. We are Leaping Bunny approved and a Certified
          B Corporation. Learn more
        </p>
      </div>
      <div className="about-and-social">
        <div className="about-section">
          <h4>About</h4>
          <ul>
            <li>Our story</li>
            <li>Foundation</li>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Accessibility</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="social-media-section">
          <h4>Social media</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>WeChat</li>
            <li>Weibo</li>
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <p>© Aesop</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
