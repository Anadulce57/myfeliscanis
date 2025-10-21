import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import sunny from "/icons/sunny.png";
import moon from "/icons/mode_night.png";
import homeDark from "/icons/homeDark.png";
import homeWhite from "/icons/homeWhite.png";
import menuDark from "/icons/menuDark.png.png";
import menuWhite from "/icons/menuWhite.png.png";

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
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <nav className="flex justify-between items-center p-4">
        {/* Ícones sempre visíveis no mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={enviarHome} className="focus:outline-none">
            {theme === "dark" ? (
              <img src={homeDark} alt="home" className="h-6 w-6" />
            ) : (
              <img src={homeWhite} alt="home" className="h-6 w-6" />
            )}
          </button>

          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === "dark" ? (
              <img src={sunny} alt="sol" className="h-6 w-6" />
            ) : (
              <img src={moon} alt="lua" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Botão Hamburger */}
        <button
          onClick={toggleMenu}
          className={`md:hidden flex flex-col justify-center items-center space-y-1.5 h-8 w-8 ${
            isMenuOpen ? "hidden" : "flex"
          }`}
        >
          {theme === "dark" ? (
             <img src={menuWhite} alt="menu" />
              ) : (
            <img src={menuDark} alt="menu" />
          )}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-10 me-12 items-center justify-end w-full pr-1">
          <li>
            <button onClick={enviarHome} className="cursor-pointer focus:outline-none">
              {theme === "dark" ? (
                <img src={homeDark} alt="home" />
              ) : (
                <img src={homeWhite} alt="home" />
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
          <li className="hover:underline"><Link to="/referencias">Referências</Link></li>
          <li className="hover:underline"><Link to="/apresentacao">Comece aqui</Link></li>
        </ul>
      </nav>

      {/* Fundo escuro quando menu aberto */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[rgba(0,0,0,0.25)] transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menu Mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } bg-white text-black dark:bg-white dark:text-black`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-2xl font-bold"
        >
          ✕
        </button>

        <ul className="flex h-full flex-col items-start justify-center pl-8 space-y-6 text-xl font-bold">
          <li className="hover:underline"><Link to="/instrucoes" onClick={toggleMenu}>Instruções</Link></li>
          <li className="hover:underline"><Link to="/produto" onClick={toggleMenu}>O produto</Link></li>
          <li className="hover:underline"><Link to="/game" onClick={toggleMenu}>Nosso jogo</Link></li>
          <li className="hover:underline"><Link to="/membros" onClick={toggleMenu}>Quem somos?</Link></li>
          <li className="hover:underline"><Link to="/referencias" onClick={toggleMenu}>Referências</Link></li>
          <li className="hover:underline"><Link to="/apresentacao">Comece aqui</Link></li>
        </ul>
      </nav>
    </header>
  );
}
