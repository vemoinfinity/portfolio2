import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import image from '../picturs/logo_transparen.png';
const Description = () => {
  return (
    <Row className='justify-content-lg-center my-3' variante='fluid'>
      <Col lg={8} sm={6} >
      <div className="scale-up-horizontal-left card border-secondary mb-3 cardtext" style={{ maxwidth: '20rem' }}>
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <h5 className='text-secondary' >
              <p>Desarrollador Front End familiarizado con tecnologias como
              Java-Script HTML, CSS, REACT.
              me destaco como alguien a quien le encanta resolver problemas
              de programacion y divertise en el proceso de creacion y creatividad</p>
              </h5>
          </div>
        </div>       
      </Col>
      <Col sm={6} lg={4} >
        <Card className='scale-up-horizontal-right border-0 rounded-circle'>
      <Image src={image} />
        </Card>
      </Col>
    </Row>
  );
};

export default Description;