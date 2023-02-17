import React, { useRef, useState } from 'react';
import { Button, Card, CardGroup, Container, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
const Result=()=>{
  return(
    <p>Your message has been successfully sent. I will contact you soon</p>
  )
};
const ContactMe = () => {

  const [result, showResult]= useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4u80xpt', 'template_8202itr', form.current, 'y7HILcpAYVMWYvDBO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };
  setTimeout(() => {
showResult(false);
  },5000)

  return (
    <Container >
          <Card className='m-auto' style={{ width: '500px'}}> 
            <h1 className='u m-5 '>Contact Me</h1>                    
                <Form  ref={form} onSubmit={sendEmail}>
                  <Form.Group className='my-3' controlId="fullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control name='fullName' size='md' type="text"
                      placeholder="Full name" />
                  </Form.Group>
                  <Form.Group className='my-3'  controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' size='md' type="email"
                      placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className='my-3'  controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name='subject' size='md' type="text"
                      placeholder="Subject" />
                  </Form.Group>
                  <Form.Group className='my-3'  controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name='message' size='md' as="textarea" rows={4}/>
                  </Form.Group>
                  <Button className="m-2" variant="success" type="submit">
                    Submit
                  </Button>
                  <Form.Label>{result ? <Result/>: null }</Form.Label>
                </Form>                   
          </Card>
    </Container>
  );
};

export default ContactMe;
