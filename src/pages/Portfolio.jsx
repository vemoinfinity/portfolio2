import React from 'react';
import CardHref from '../components/CardHref';
import rick from '../picturs/api-rickandmorthy.png';
import ecommerce from '../picturs/e-commerce.png';
import pelis from '../picturs/pelisview.png';
import Lumini from '../picturs/lumini.png';
import pokeapi from '../picturs/pokeapi.png';

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 animate-blur-in-expand ">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardHref url={'https://peliviewinfo.netlify.app/'} imag={pelis} titlecard={'PelisView APP'} description={'Aplicación web desarrollada con **React** que consume una API REST para mostrar datos en tiempo real. Utiliza **React Hooks** para gestionar el estado y las llamadas asincrónicas, **React Router** para la navegación, y **Tailwind CSS** para crear una interfaz moderna y responsiva.'}/>   
        <CardHref url={'https://polite-maamoul-8f220e.netlify.app/'} imag={ecommerce} titlecard={'E-Commerce'} description={'Desarrollé un e-commerce completo y moderno utilizando React para el frontend y Node.js con Express para el backend. La plataforma cuenta con un catálogo de productos dinámico, un carrito de compras interactivo y un proceso de pago seguro integrado con Stripe. Implementé autenticación de usuarios con JWT, permitiendo a los clientes crear cuentas, realizar seguimiento de pedidos y guardar sus preferencias. El diseño responsivo, creado con Tailwind CSS, garantiza una experiencia de usuario fluida en dispositivos móviles y de escritorio'}/> 
        <CardHref url={'https://voluble-genie-013061.netlify.app/'} imag={Lumini} titlecard={'Lumini'} description={'Participé en el desarrollo de una innovadora red social para fotógrafos, trabajando en un equipo ágil como parte del proyecto Lumini de la empresa de No-Country. Como desarrollador front-end, fui responsable del 50% del desarrollo de la interfaz de usuario, utilizando React para crear una experiencia interactiva y dinámica. La aplicación, diseñada con Bootstrap para garantizar un diseño responsivo y atractivo, permite a los fotógrafos subir, mostrar y compartir su trabajo de manera profesiona'}/> 
        <CardHref url={'https://apidexpoke.netlify.app/'} imag={pokeapi} titlecard={'Pokeapi'}description={'"Desarrollé una aplicación web interactiva tipo Pokedex utilizando React y Bootstrap, que muestra información detallada de todos los Pokémon de la serie. Esta aplicación consume datos de la PokeAPI para proporcionar una experiencia completa y actualizada a los usuarios'}/>
        <CardHref url={'https://adorable-sundae-c494df.netlify.app/'} imag={rick} titlecard={'Rick And Morthy'} description={'Desarrollé una aplicación web interactiva utilizando React y la API de Rick and Morty, enfocada en explorar los lugares de nacimiento de los personajes y sus habitantes. Esta aplicación ofrece una experiencia inmersiva para los fans de la serie, permitiéndoles descubrir conexiones entre personajes y locaciones'}/>
      </div>
    </div>
  );
};

export default Portfolio;