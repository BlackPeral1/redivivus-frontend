import "./landing.css"
import TopNav from "../../../components/topnav/TopNav"
import { Image } from "react-bootstrap"
import Redivivus from '../../../assets/logo.png'
import { Container, Row, Col } from "react-bootstrap"
import Lottie from 'react-lottie';
import animationData from '../../../assets/logo-animated.json'
import { useState } from "react"
import Button from "react-bootstrap/Button"

export default function Landing() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <TopNav />
      <Container>
        <Row className="justify-content-md-center welcome" >
          <Col >
            <h2>Welcome to</h2>
          </Col>
        </Row>
        <Row></Row>
        <Row lg={3} className="justify-content-md-center body-content">
          <Col>
            <Image src={Redivivus} />
          </Col>
        </Row>
        <Row className="justify-content-md-center body-content" >
          <Col>
            <h5>The best online garbage recycling platform</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Lottie
              options={defaultOptions}
              height={200}
              width={200} />
          </Col>
        </Row>

        <Row className="justify-content-md-center body-content">
          <Col>
            <Button>
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
