import React from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import cssimg from '../picturs/css-3-logo.png';
import htmlimg from '../picturs/HTML6_logo.png';
import reactimg from '../picturs/react-logo.png';
import javascript from '../picturs/js2-logo.svg';
import git from '../picturs/git-icon.svg';
import github from '../picturs/github.png';
import bootstrap from '../picturs/Bootstrap_logo.svg.png'; 
import BaseCard from './BaseCard';
const CardAbilities = () => {
  return (
    
      <Card className='justify-content-lg-center'>
            <h1 className='m-auto my-5 '>Abilities</h1>
            <Row className='mx-4'>
              <BaseCard imag={reactimg} titlecard={'React JS'}/>
              <BaseCard imag={htmlimg} titlecard={'Html 5'}/>   
              <BaseCard imag={javascript} titlecard={'JavaScript'}/>   
              <BaseCard imag={cssimg} titlecard={'Css 3'}/>
              <BaseCard imag={git} titlecard={'Git'}/>
              <BaseCard imag={github} titlecard={'Github'}/> 
              <BaseCard imag={bootstrap} titlecard={'BootStrap'}/>                                                                       
            </Row>
          </Card>
  );
};

export default CardAbilities;