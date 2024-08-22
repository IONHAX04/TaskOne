import React from "react";
import { Row, Col } from "react-bootstrap";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">

      <p className="reachOut">
        To Know More About US
      </p>
      <div className="footerSec">

        <Col lg="3">
          <h5>Company</h5>
          <ul>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
          </ul>
        </Col>

        <Col lg="3">
          <h5>Company</h5>
          <ul>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
          </ul>
        </Col>

        <Col lg="3">
          <h5>Company</h5>
          <ul>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
            <li>Text 1</li>
          </ul>
        </Col>

      </div>
      <div className="contactDetails">
        <div className="contCards">
          <img src="" alt="image" />
          <div className="info">
            <p>Phone Number</p>
            <p>Mobile number. </p>
          </div>
        </div>
        <div className="contCards">
          <img src="" alt="image" />
          <div className="info">
            <p>Phone Number</p>
            <p>Mobile number. </p>
          </div>
        </div>
        <div className="contCards">
          <img src="" alt="image" />
          <div className="info">
            <p>Phone Number</p>
            <p>Mobile number. </p>
          </div>
        </div>
      </div>

      <p className="copyRightSec">2024 Copyright section</p>
    </div>
  );
}
