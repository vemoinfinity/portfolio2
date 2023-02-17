import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import image from '../picturs/myface.jpg';
const HeaderMe = () => {
  return (
    <Row className='justify-content-lg-center my-4' variante='fluid'>
    <Col sm={5} lg={3} >
    <Card className="rounded-circle border-secondary mb-3">
      <Image className='rounded-circle' src={image} />
    </Card>
    </Col>
    <Col xl={8}>
      <Card className="border-primary mb-3 cardtext">       
          <h1 className="card-title">Front-End Developer</h1>
        <h2 className="card-title text-secondary"> Sr. Omar Vera</h2>       
      </Card>
    </Col>
  </Row>
  );
};

export default HeaderMe;