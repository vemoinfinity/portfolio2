import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterMenu = () => {
  return (
    <Navbar className='scale-up-vertical-bottom bg-secondary mt-5'>           
            <Row className=' ms-4 my-3 text-dark'>
              <Col >
              <Row>
                <h4 className="text-primary">Information</h4>
                <h7> Front-End Developer</h7> <br/>
                <h7> Omar Elias Vera Macias</h7><br/>
                <h7> Manta,Manabi,Ecuador</h7><br/>
                <h7>Email:<a>veraomar50@gmail.com</a></h7>
              </Row>
              </Col>
              <Col >
              <Row >
               <Nav.Link><h4 className="text-primary" >Redes</h4></Nav.Link> 
                <Nav.Link href='https://www.linkedin.com/in/omar-vera-a74b71249/'>Linkedin</Nav.Link>
                <Nav.Link href='https://github.com/vemoinfinity'>Github</Nav.Link>
                <Nav.Link href='https://drive.google.com/file/d/1smdOFKLo3qvz1lFHFdbK_nA7K6wpBm_6/view?usp=sharing'>Download My CV</Nav.Link>
              </Row>
              </Col>
              <Col>
              <Row >                
                <Nav.Link to="/" as={Link}><h4 className="text-primary">Menu</h4></Nav.Link>
                <Nav.Link  to="/abilities" as={Link}>Abilities</Nav.Link>
                <Nav.Link  to="/portfolio" as={Link}>Portfolio</Nav.Link>
                <Nav.Link  to="/contactme" as={Link}>Contact Me</Nav.Link>
              </Row>
              </Col>
            </Row>         
    </Navbar>

  );
};

export default FooterMenu;