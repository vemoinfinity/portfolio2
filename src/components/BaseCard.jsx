import React from 'react';

const BaseCard = ({ imag, titlecard }) => {
  return (
    <div className="flex flex-col items-center p-4  rounded-lg shadow-md animate-blur-in-expand">
      <img className="w-24 h-24 object-contain mb-4" src={imag} alt={titlecard} />
      <h2 className="text-lg font-semibold text-center">{titlecard}</h2>
    </div>
  );
};

export default BaseCard;