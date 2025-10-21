import React from 'react';
import logo from '../imagenes/logo.jpg'; // Importar imagen para que Vite la procese correctamente

const AppHeader = () => (
  <header className="text-center mb-10 mt-8 p-4 rounded-xl shadow-md
                     bg-white/20 backdrop-blur-sm border border-white/30
                     dark:bg-darkBg/50 dark:border-white/20">
    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-bordo dark:border-white/30">
      <img src={logo} alt="Logo Milka" className="w-full h-full object-cover" />
    </div>
    <h1 className="text-3xl font-extrabold tracking-wider text-bordo dark:text-darkText">
      MILKA
    </h1>
    <p className="text-lg mt-1 font-medium text-bordo/60 dark:text-darkText/70">
      Joyas y accesorios
    </p>
  </header>
);

export default AppHeader;
