import React from 'react';
import { Card } from 'react-bootstrap';

const BaseCard = ({ imag, titlecard }) => {
  return (
    <Card className='blur-in-expand border-0 rounded mx-4 my-2 ' style={{ width: '175px' }} >
      <Card.Img className='mt-auto img-fluid' src={imag} alt='imagenabilitie'/>
      <Card.Text className='m-auto my-2'><h2>{titlecard}</h2></Card.Text>
    </Card>
  );
};

export default BaseCard;