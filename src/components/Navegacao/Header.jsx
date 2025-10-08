import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import sunny from "/icons/sunny.png";
import moon from "/icons/mode_night.png";
import homeDark from "/icons/homeDark.png";
import homeWhite from "/icons/homeWhite.png";

export default function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;

    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""));
  };

  const enviarHome = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="md:flex justify-end items-center p-4 relative z-50">
        {/* Botão Hamburger para mobile */}
        <button
          onClick={toggleMenu}
          className="fixed top-6 right-6 z-50 flex h-8 w-8 flex-col items-center justify-center space-y-2 focus:outline-none md:hidden"
        >
          <div className={`h-0.5 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? 'translate-y-2 rotate-45 bg-black' : 'bg-black'}`}></div>
          <div className={`h-0.5 w-6 transition duration-300 ease-in-out ${isMenuOpen ? 'scale-0 opacity-0' : 'bg-black'}`}></div>
          <div className={`h-0.5 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? '-translate-y-2 -rotate-45 bg-black' : 'bg-black'}`}></div>
        </button>

        {/* Menu Mobile */}
        <nav
          className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-800"}`}
        >
          <ul className="flex h-full flex-col items-center justify-center space-y-6 text-xl font-bold">
          <li className="hover:underline"><Link to="/instrucoes">Instruções</Link></li>
          <li className="hover:underline"><Link to="/produto">O produto</Link></li>
          <li className="hover:underline"><Link to="/game">Nosso jogo</Link></li>
          <li className="hover:underline"><Link to="/membros">Quem somos?</Link></li>
          <li className="hover:underline"><Link to="/referencias">referencias</Link></li>
          </ul>
        </nav>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-10 me-12 items-center">
          <li>
            <button onClick={enviarHome} className="cursor-pointer focus:outline-none">
              {theme === "dark" ? (
                <img src={homeDark} alt="símbolo claro" />
              ) : (
                <img src={homeWhite} alt="símbolo escuro" />
              )}
            </button>
          </li>

          <li>
            <button onClick={toggleTheme} className="cursor-pointer focus:outline-none">
              {theme === "dark" ? (
                <img src={sunny} alt="sol" />
              ) : (
                <img src={moon} alt="lua" />
              )}
            </button>
          </li>

          <li className="hover:underline"><Link to="/instrucoes">Instruções</Link></li>
          <li className="hover:underline"><Link to="/produto">O produto</Link></li>
          <li className="hover:underline"><Link to="/game">Nosso jogo</Link></li>
          <li className="hover:underline"><Link to="/membros">Quem somos?</Link></li>
          <li className="hover:underline"><Link to="/referencias">referencias</Link></li>
        </ul>
      </nav>
    </header>
  );
}
