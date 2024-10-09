import React from 'react';
import BaseCard from './BaseCard';
import cssimg from '../picturs/css-3-logo.png';
import htmlimg from '../picturs/HTML6_logo.png';
import reactimg from '../picturs/react-logo.png';
import javascript from '../picturs/js2-logo.svg';
import git from '../picturs/git-icon.svg';
import github from '../picturs/github.png';
import bootstrap from '../picturs/Bootstrap_logo.svg.png'; 
import tailwind from '../picturs/Taicon.png'
import vue from '../picturs/Vue.png'

const CardAbilities = () => {
  return (
    <div className=" shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-8  animate-blur-in-expand">Abilities</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <BaseCard imag={reactimg} titlecard={'React JS'}/>
        <BaseCard imag={htmlimg} titlecard={'Html 5'}/>   
        <BaseCard imag={javascript} titlecard={'JavaScript'}/>   
        <BaseCard imag={cssimg} titlecard={'Css 3'}/>
        <BaseCard imag={git} titlecard={'Git'}/>
        <BaseCard imag={github} titlecard={'Github'}/> 
        <BaseCard imag={bootstrap} titlecard={'BootStrap'}/>  
        <BaseCard imag={tailwind} titlecard={'Tailwind CSS'}/>  
        <BaseCard imag={vue} titlecard={'Vue JS'}/>                                                                     
      </div>
    </div>
  );
};

export default CardAbilities;