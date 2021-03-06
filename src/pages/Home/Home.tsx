import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import { Row, Col } from 'reactstrap';

const Home = () => {
  const [showAfter, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 3000);
    return (
      <Row>
        <Col xs="12">
          <div className="hero-full-wrapper">
            <div className="text-content">
              <h1>Ciao,</h1>
              <span className="color-white py-3">Mi chiamo Giuseppe Giovanni</span>
              <span className="color-white py-3" style={{
                display: showAfter ? 'block' : 'none'
              }}>Front End Developer per passione e per lavoro</span>
              <div className="py-3">
                <a href="#"><button className="btn color-white">Scarica CV</button></a>
              </div> 
            </div>
          </div>
        </Col>
        </Row>
    );
  }

export default Home;
