import React from 'react';
import { Card, NavLink } from 'react-bootstrap';

const CardHref = ({ url, imag, titlecard }) => {
  return (
    <NavLink className='m-auto my-4' href={url}>
      <Card className='m-auto bg-info ' style={{ width: '350px', height: '400px' }}>
        <Card.Img className=' m-auto' variant="top" src={imag} />
        <Card.Text className=' m-auto' ><h5>{titlecard}</h5></Card.Text>
      </Card>
    </NavLink>
  );
};

export default CardHref;