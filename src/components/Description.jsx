import React from 'react';
import image from '../picturs/logo_transparen.png';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const {t}= useTranslation()
  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
        <div className="w-full md:w-2/3 animate-scale-up-horizontal-left">
          <div className="border-none bg-transparent rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">{t('Highlighted Achievements')}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Improve code quality, reducing development time and improving user experience')}</li>
              <li>{t('I improved code security, reducing the risk of errors')}</li>
              <li>{t('Developed a web application for a high-level client, which increased team productivity by 50%')}</li>
              <li>{t('Developer leader, helping in their professional growth and teamwork')}</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 animate-scale-up-horizontal-right">
          <div className="border-none bg-transparent rounded-full overflow-hidden shadow-lg">
            <img src={image} alt="logo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;