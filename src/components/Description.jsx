import React from 'react';
import image from '../picturs/logo_transparen.png';

const Description = () => {
  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
        <div className="w-full md:w-2/3 animate-scale-up-horizontal-left">
          <div className="border-none bg-transparent rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Logros Destacados</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Desarrollé una aplicación web que aumentó la productividad del equipo en un 30%</li>
              <li>Contribuí a proyectos de código abierto, mejorando la accesibilidad de componentes React</li>
              <li>Mentor de desarrolladores junior, ayudando en su crecimiento profesional</li>
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