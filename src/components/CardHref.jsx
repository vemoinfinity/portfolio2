import React from 'react';
import { Link } from 'react-router-dom';

const CardHref = ({ url, imag, titlecard, description }) => {
  return (
    <Link to={url} className="block m-auto my-4 animate-blur-in-expand">
      <div className="relative w-[350px] h-[400px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300 group hover:scale-105">
        <img 
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30" 
          src={imag} 
          alt={titlecard} 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-xl font-bold text-center mb-2">{titlecard}</h2>
          <p className="text-sm  text-center">{description}</p>
        </div>
        
      </div>
    </Link>
  );
};

export default CardHref;