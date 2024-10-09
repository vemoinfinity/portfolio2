import React from 'react';
import cara from '../picturs/myface.jpg';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HeaderMe = () => {
  return (
    <section className="mb-16">
    <Card className="overflow-hidden border-none bg-transparent">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-indigo-500 dark:border-indigo-400">
            <img
              src={cara}
              alt="Omar Vera"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Sr. Omar Vera</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Front-End Developer</h2>
            <p className="text-lg mb-6">
              Desarrollador Front End especializado en React.js JavaScript, HTML, CSS, entre otras tecnologias relacionadas. 
              Me destaco por mi pasión en resolver problemas de programación y mi 
              creatividad en el proceso de creación y desarrollo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                <a href="#/portfolio">Ver Proyectos</a>
              </Button>
              <Button variant="outline" asChild className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950">
                <a href="https://drive.google.com/file/d/1smdOFKLo3qvz1lFHFdbK_nA7K6wpBm_6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
  );
};

export default HeaderMe;