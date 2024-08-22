import { Button, Tab, Tabs } from "react-bootstrap";

import React from "react";
import Footer from "../07 - Footer/Footer";

import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="homeContents">
        <div className="homeContentTitle">
          <p>We Provide Outsourced</p>
          <p>IT Services</p>
          <p>For Business</p>
          <div className="homeContBtns d-flex">
            <Button variant="primary">
              Explore More <i className="bi bi-arrow-right"></i>
            </Button>{" "}
            <Button variant="outline-light">
              Get in touch <i className="bi bi-arrow-right"></i>
            </Button>{" "}
          </div>
        </div>

        <div className="homeContWhoWe">
          <p>Who We Are</p>
          <p>Custom IT solutions for your business</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nemo voluptates, voluptatem aspernatur eum soluta dolorem sapiente
            sequi omnis! Officiis nulla beatae eaque perspiciatis quo dolorem,
            consequuntur quidem deserunt recusandae.
          </p>
        </div>

        <div className="homeContAreasWeServe">
          <p>Areas We Serve</p>
          <p>Best Practies from Industry Experts</p>

          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Digital Transformation">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Technology Consulting">
              Tab content for Profile
            </Tab>
            <Tab eventKey="about" title="Digital Transformation">
              Tab content for Home
            </Tab>
            <Tab eventKey="contact" title="Technology Consulting">
              Tab content for Profile
            </Tab>
          </Tabs>
        </div>

<Footer />
      </div>
    </div>
  );
}
