import React, { useState } from 'react';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">

      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 flex h-8 w-8 flex-col items-center justify-center space-y-2 focus:outline-none md:hidden"
      >
        <div
          className={`h-0.5 w-6 transform bg-black transition duration-300 ease-in-out ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
            isOpen ? 'scale-0 opacity-0' : ''
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 transform bg-black transition duration-300 ease-in-out ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        ></div>
      </button>

      {/* Menu de navegação */}
      <nav
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center space-y-6 text-xl font-bold text-gray-800">
          <li><a onClick={toggleMenu} href="#Instruções">Instruções</a></li>
          <li><a onClick={toggleMenu} href="#produto">O produto</a></li>
          <li><a onClick={toggleMenu} href="#game">Nosso jogo</a></li>
          <li><a onClick={toggleMenu} href="#Membro">Quem somos?</a></li>
          <li><a onClick={toggleMenu} href="#referencias">Referências</a></li>
        </ul>
      </nav>
    </div>
  );
};