import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Front End Developer specialized in React.js, JavaScript, HTML, CSS, among other related technologies. I stand out for my passion in solving programming problems and my creativity in the creation and development process.":
          "Front End Developer specialized in React.js, JavaScript, HTML, CSS, among other related technologies. I stand out for my passion in solving programming problems and my creativity in the creation and development process.",
          "Front-End Developer": "Front-End Developer",
          "Abilities": "Abilities",
          "Portfolio": "Portfolio",
          "Contact": "Contact",
          "Improve code quality, reducing development time and improving user experience": "Improve code quality, reducing development time and improving user experience",
          "I improved code security, reducing the risk of errors":"I improved code security, reducing the risk of errors",
          "Developed a web application for a high-level client, which increased team productivity by 50%":"Developed a web application for a high-level client, which increased team productivity by 50%",
          "Developer leader, helping in their professional growth and teamwork":"Developer leader, helping in their professional growth and teamwork",
          "Highlighted Achievements":"Highlighted Achievements",
          "See Projects": "See Projects",
          "Download CV":"Download CV",
          "All rights reserved":"All rights reserved",
          "Web application developed with **React** that consumes a REST API to display real-time data. It uses **React Hooks** to manage state and asynchronous calls, **React Router** for navigation, and **Tailwind CSS** to create a modern, responsive interface.":"Web application developed with **React** that consumes a REST API to display real-time data. It uses **React Hooks** to manage state and asynchronous calls, **React Router** for navigation, and **Tailwind CSS** to create a modern, responsive interface.",
          "I developed a complete and modern e-commerce site using React for the frontend and Node.js with Express for the backend. The platform features a dynamic product catalog, an interactive shopping cart, and a secure checkout process integrated with Stripe. I implemented user authentication with JWT, allowing customers to create accounts, track orders, and save their preferences. The responsive design, created with Tailwind CSS, ensures a fluid user experience on mobile and desktop devices.":"I developed a complete and modern e-commerce site using React for the frontend and Node.js with Express for the backend. The platform features a dynamic product catalog, an interactive shopping cart, and a secure checkout process integrated with Stripe. I implemented user authentication with JWT, allowing customers to create accounts, track orders, and save their preferences. The responsive design, created with Tailwind CSS, ensures a fluid user experience on mobile and desktop devices.",
          "I participated in the development of an innovative social network for photographers, working in an agile team as part of No-Country Lumini project. As a front-end developer, I was responsible for 50% of the user interface development, using React to create an interactive and dynamic experience. The application, designed with Bootstrap to ensure a responsive and attractive design, allows photographers to upload, showcase and share their work in a professional way.":"I participated in the development of an innovative social network for photographers, working in an agile team as part of No-Country Lumini project. As a front-end developer, I was responsible for 50% of the user interface development, using React to create an interactive and dynamic experience. The application, designed with Bootstrap to ensure a responsive and attractive design, allows photographers to upload, showcase and share their work in a professional way.",
          "I developed an interactive Pokedex-like web application using React and Bootstrap, which displays detailed information about all the Pokémon in the series. This application consumes data from the PokeAPI to provide a complete and up-to-date experience to users.":"I developed an interactive Pokedex-like web application using React and Bootstrap, which displays detailed information about all the Pokémon in the series. This application consumes data from the PokeAPI to provide a complete and up-to-date experience to users.",
          "I developed an interactive web application using React and the Rick and Morty API, focused on exploring the birthplaces of the characters and their inhabitants. This application offers an immersive experience for fans of the series, allowing them to discover connections between characters and locations.":"I developed an interactive web application using React and the Rick and Morty API, focused on exploring the birthplaces of the characters and their inhabitants. This application offers an immersive experience for fans of the series, allowing them to discover connections between characters and locations.",
          "Full name": "Full name",
          "Email": "Email",
          "Subject": "Subject",
          "Message": "Message",
          "Send": "Send",
          "Manteños Gym: Gym Management Web App (2023)\n\nDeveloped a full-stack web application using React 18, Next.js 13 (App Router), and Firebase. Key features:\n- Modern, responsive UI with Tailwind CSS and shadcn/ui\n- User authentication and real-time database with Firebase\n- Membership management and class booking system\n- Admin panel for user and service control\n\nDemonstrated skills in full-stack development, UI/UX design, and modern web app architecture with a focus on performance and scalability.":"Manteños Gym: Gym Management Web App (2023)\n\nDeveloped a full-stack web application using React 18, Next.js 13 (App Router), and Firebase. Key features:\n- Modern, responsive UI with Tailwind CSS and shadcn/ui\n- User authentication and real-time database with Firebase\n- Membership management and class booking system\n- Admin panel for user and service control\n\nDemonstrated skills in full-stack development, UI/UX design, and modern web app architecture with a focus on performance and scalability.",
    }
  },
  es: {
    translation: {
      "Front End Developer specialized in React.js, JavaScript, HTML, CSS, among other related technologies. I stand out for my passion in solving programming problems and my creativity in the creation and development process.":"Desarrollador Front End especializado en React.js JavaScript, HTML, CSS, entre otras tecnologias relacionadas. Me destaco por mi pasión en resolver problemas de programación y mi creatividad en el proceso de creación y desarrollo.",
      "Front-End Developer": "Desarrollador Front End",
      "Abilities": "Habilidades",
      "Portfolio": "Portafolio",
      "Contact": "Contacto",
      "Improve code quality, reducing development time and improving user experience": "Mejorar la calidad del código, reducir el tiempo de desarrollo y mejorar la experiencia de usuario",
      "I improved code security, reducing the risk of errors": "Mejoré la seguridad del código, reduciendo el riesgo de errores",
      "Developed a web application for a high-level client, which increased team productivity by 50%": "Desarrollé una aplicación web para un cliente de alto nivel, lo que aumentó la productividad del equipo en un 50%",
      "Developer leader, helping in their professional growth and teamwork": "Lider de desarrollo, ayudándose en su progreso profesional y en la colaboración del equipo",
      "Highlighted Achievements": "Logros destacados",
      "See Projects": "Ver Proyectos",
      "Download CV": "Descargar CV",
      "All rights reserved": "Todos los derechos reservados",
      "Web application developed with **React** that consumes a REST API to display real-time data. It uses **React Hooks** to manage state and asynchronous calls, **React Router** for navigation, and **Tailwind CSS** to create a modern, responsive interface.":"Aplicación web desarrollada con **React** que consume una API REST para mostrar datos en tiempo real. Utiliza **React Hooks** para gestionar el estado y las llamadas asincrónicas, **React Router** para la navegación, y **Tailwind CSS** para crear una interfaz moderna y responsiva.",
      "I developed a complete and modern e-commerce site using React for the frontend and Node.js with Express for the backend. The platform features a dynamic product catalog, an interactive shopping cart, and a secure checkout process integrated with Stripe. I implemented user authentication with JWT, allowing customers to create accounts, track orders, and save their preferences. The responsive design, created with Tailwind CSS, ensures a fluid user experience on mobile and desktop devices.":'Desarrollé una plataforma completa y moderna de comercio electrónico utilizando React para el frontend y Node.js con Express para el backend. La plataforma cuenta con un catálogo de productos dinámicos, una carrita de compras interactiva y un proceso de pago seguro integrado con Stripe. Implementé autenticación de usuario con JWT, permitiendo a los clientes crear cuentas, rastrear pedidos y guardar sus preferencias. El diseño responsivo, creado con Tailwind CSS, garantiza una experiencia fluida del usuario en dispositivos móviles y de escritorio.',
      "I participated in the development of an innovative social network for photographers, working in an agile team as part of No-Country Lumini project. As a front-end developer, I was responsible for 50% of the user interface development, using React to create an interactive and dynamic experience. The application, designed with Bootstrap to ensure a responsive and attractive design, allows photographers to upload, showcase and share their work in a professional way.":'Participé en el desarrollo de una innovadora red social para fotógrafos, trabajando en un equipo ágil como parte del proyecto Lumini de la empresa de No-Country. Como desarrollador front-end, fui responsable del 50% del desarrollo de la interfaz de usuario, utilizando React para crear una experiencia interactiva y dinámica. La aplicación, diseñada con Bootstrap para garantizar un diseño responsivo y atractivo, permite a los fotógrafos subir, mostrar y compartir su trabajo de manera profesiona',
      "I developed an interactive Pokedex-like web application using React and Bootstrap, which displays detailed information about all the Pokémon in the series. This application consumes data from the PokeAPI to provide a complete and up-to-date experience to users.":'Desarrollé una aplicación web interactiva tipo Pokedex utilizando React y Bootstrap, que muestra información detallada de todos los Pokémon de la serie. Esta aplicación consume datos de la PokeAPI para proporcionar una experiencia completa y actualizada a los usuarios',
      "I developed an interactive web application using React and the Rick and Morty API, focused on exploring the birthplaces of the characters and their inhabitants. This application offers an immersive experience for fans of the series, allowing them to discover connections between characters and locations.":'Desarrollé una aplicación web interactiva utilizando React y la API de Rick and Morty, enfocada en explorar los lugares de nacimiento de los personajes y sus habitantes. Esta aplicación ofrece una experiencia inmersiva para los fans de la serie, permitiéndoles descubrir conexiones entre personajes y locaciones',
      "Full name": "Nombre completo",
      "Email": "Email",
      "Subject": "Asunto",
      "Message": "Mensaje",
      "Send": "Enviar",
      "Manteños Gym: Gym Management Web App (2023)\n\nDeveloped a full-stack web application using React 18, Next.js 13 (App Router), and Firebase. Key features:\n- Modern, responsive UI with Tailwind CSS and shadcn/ui\n- User authentication and real-time database with Firebase\n- Membership management and class booking system\n- Admin panel for user and service control\n\nDemonstrated skills in full-stack development, UI/UX design, and modern web app architecture with a focus on performance and scalability.":"Manteños Gym: Aplicación web de gestión de gimnasios (2023)\n\nDesarrollé una aplicación web full-stack usando React 18, Next.js 13 (App Router) y Firebase. Características clave:\n- UI moderna y receptiva con Tailwind CSS y shadcn/ui\n- Autenticación de usuario y base de datos en tiempo real con Firebase\n- Gestión de membresías y sistema de reserva de clases\n- Panel de administración para control de usuarios y servicios\n \nHabilidades demostradas en desarrollo completo, diseño UI/UX y arquitectura de aplicaciones web modernas con un enfoque en el rendimiento y la escalabilidad.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
