import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import CardHref from '../components/CardHref';
import rick from '../picturs/api-rickandmorthy.png';
import ecommerce from '../picturs/e-commerce.png';
import wheather from '../picturs/wheater-app.png';
import Lumini from '../picturs/lumini.png';
import pokeapi from '../picturs/pokeapi.png';
const Portfolio = () => {
  return (
    <Card className='justify-content-center' >
        <h1 className='blur-in-expand m-auto my-5'>Portfolio</h1>
          <CardGroup>
            <CardHref url={'https://polite-maamoul-8f220e.netlify.app/'} imag={ecommerce} titlecard={'E-Commerce'}/> 
            <CardHref url={'https://adorable-sundae-c494df.netlify.app/'} imag={rick} titlecard={'Rick And Morthy'}/>
            <CardHref url={'https://graceful-centaur-4ccb88.netlify.app/'} imag={wheather} titlecard={'Wheather App'}/>   
            <CardHref url={'https://voluble-genie-013061.netlify.app/'}  imag={Lumini}  titlecard={'Lumini'}/> 
            <CardHref url={'https://apidexpoke.netlify.app/'} imag={pokeapi} titlecard={'Pokeapi'}/>
          </CardGroup>
        </Card>
  );
};

export default Portfolio;