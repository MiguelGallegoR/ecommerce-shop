import React from "react";
import { Divider } from "antd";
import "../styles/Footer.css";
import "boxicons";
function Footer() {
  return (
    <div>
      <Divider />
      <div className="footer-subcontainer">
        <div className="footer-info-container">
          <h2>HEAVENLY</h2>
          <p className="footer-info">
            Online brand clothing store founded in 2023 in Spain. Heavenly focus
            on selling only quality and branded items, limited edition
            collections by fashion designers.
          </p>
          <div className="footer-icons-container">
            <div className="footer-icon">
              <box-icon type="logo" name="facebook" size="2em" color="white" />
            </div>
            <div className="footer-icon">
              <box-icon type="logo" name="instagram" size="2em" color="white" />
            </div>
            <div className="footer-icon">
              <box-icon name="twitter" type="logo" size="2em" color="white" />
            </div>
          </div>
        </div>
        <div className="footer-navigation-container">
          <div className="footer-navigation-column">
            <span className="footer-navigation-title">NAVIGATION</span>
            <span className="footer-navigation-link">WOMEN</span>
            <span className="footer-navigation-link">MEN</span>
            <span className="footer-navigation-link">KIDS</span>
            <span className="footer-navigation-link">BRANDS</span>
          </div>
          <div className="footer-navigation-column">
            <span className="footer-navigation-title">CUSTOMERS</span>
            <span className="footer-navigation-link">PROMOTION</span>
            <span className="footer-navigation-link">DELIVERY</span>
            <span className="footer-navigation-link">PAYMENT</span>
            <span className="footer-navigation-link">GIFT CARD</span>
          </div>
          <div className="footer-navigation-column">
            <span className="footer-navigation-title">ABOUT</span>
            <span className="footer-navigation-link">NEWS</span>
            <span className="footer-navigation-link">PUBLIC OFFER</span>
            <span className="footer-navigation-link">USER AGREEMENT</span>
            <span className="footer-navigation-link">PRIVACY POLICY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
