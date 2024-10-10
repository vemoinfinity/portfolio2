import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail} from "lucide-react"
import { useTranslation } from 'react-i18next';
const FooterMenu = () => {
  const {t}= useTranslation()
  return (
    <footer className="py-2 bg-black ">
          <Card className='bg-transparent border-none' >
            <CardContent className="flex mx-auto container justify-center p-6 gap-7">          
                
                  <Button variant="outline" size="icon" asChild className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950">
                    <a href="https://www.linkedin.com/in/omar-vera-a74b71249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950">
                    <a href="https://github.com/vemoinfinity" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950">
                    <a href="mailto:veraomar50@gmail.com" aria-label="Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>              
            </CardContent>
          </Card>
        
    <div className="container mx-auto px-4 text-center text-gray-200 dark:text-gray-400">
      <p>&copy;2024 Omar Vera {t('All rights reserved')}</p>
    </div>
  </footer>
  );
};

export default FooterMenu;