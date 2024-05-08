import React from 'react';
import { Card, NavLink } from 'react-bootstrap';

const CardHref = ({ url, imag, titlecard }) => {
  return (
    <NavLink className=' blur-in-expand m-auto my-4' href={url}>
      <Card className='rounded-5 m-auto bg-info ' style={{ width: '350px', height: '400px' }}>
        <Card.Img className=' m-auto' variant="top" src={imag} alt='imagenproyect' />
        <Card.Text className=' m-auto text-black' ><h2>{titlecard}</h2></Card.Text>
      </Card>
    </NavLink>
  );
};

export default CardHref;