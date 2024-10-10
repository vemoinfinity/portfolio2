import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-1 rounded-full overflow-hidden hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={currentLanguage === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      {currentLanguage === 'en' ? (
        <img
          src="https://flagicons.lipis.dev/flags/4x3/es.svg"
          alt="Bandera de España"
          className="w-8 h-8 rounded-full"
        />
      ) : (
        <img
          src="https://flagicons.lipis.dev/flags/4x3/us.svg"
          alt="USA Flag"
          className="w-8 h-8 rounded-full"
        />
      )}
    </button>
  );
};

export default LanguageToggle;