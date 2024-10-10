import React from 'react';
import CardHref from '../components/CardHref';
import rick from '../picturs/api-rickandmorthy.png';
import ecommerce from '../picturs/e-commerce.png';
import pelis from '../picturs/pelisview.png';
import Lumini from '../picturs/lumini.png';
import pokeapi from '../picturs/pokeapi.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const {t}= useTranslation()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 animate-blur-in-expand ">{t('Portfolio')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardHref url={'https://peliviewinfo.netlify.app/'} imag={pelis} titlecard={'PelisView APP'} description={t('Web application developed with **React** that consumes a REST API to display real-time data. It uses **React Hooks** to manage state and asynchronous calls, **React Router** for navigation, and **Tailwind CSS** to create a modern, responsive interface.`')}/>   
        <CardHref url={'https://polite-maamoul-8f220e.netlify.app/'} imag={ecommerce} titlecard={'E-Commerce'} description={t('I developed a complete and modern e-commerce site using React for the frontend and Node.js with Express for the backend. The platform features a dynamic product catalog, an interactive shopping cart, and a secure checkout process integrated with Stripe. I implemented user authentication with JWT, allowing customers to create accounts, track orders, and save their preferences. The responsive design, created with Tailwind CSS, ensures a fluid user experience on mobile and desktop devices.')}/> 
        <CardHref url={'https://voluble-genie-013061.netlify.app/'} imag={Lumini} titlecard={'Lumini'} description={t('I participated in the development of an innovative social network for photographers, working in an agile team as part of No-Country Lumini project. As a front-end developer, I was responsible for 50% of the user interface development, using React to create an interactive and dynamic experience. The application, designed with Bootstrap to ensure a responsive and attractive design, allows photographers to upload, showcase and share their work in a professional way.')}/> 
        <CardHref url={'https://apidexpoke.netlify.app/'} imag={pokeapi} titlecard={'Pokeapi'}description={t('I developed an interactive Pokedex-like web application using React and Bootstrap, which displays detailed information about all the Pokémon in the series. This application consumes data from the PokeAPI to provide a complete and up-to-date experience to users.')}/>
        <CardHref url={'https://adorable-sundae-c494df.netlify.app/'} imag={rick} titlecard={'Rick And Morthy'} description={t('I developed an interactive web application using React and the Rick and Morty API, focused on exploring the birthplaces of the characters and their inhabitants. This application offers an immersive experience for fans of the series, allowing them to discover connections between characters and locations.')}/>
      </div>
    </div>
  );
};

export default Portfolio;