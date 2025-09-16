import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")
    const [isOpen, setIsOpen] = useState(false); // 👈 aqui entra o state do menu

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const root = document.documentElement

        root.classList.remove("dark")

        if(theme === "dark") {
            root.classList.add("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "" ? "dark" : "");
    };


    return(
        <header>
              {/* Botão hamburguer - só aparece no mobile */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
     <span class="material-symbols-outlined">close</span>
        ) : (
            <span class="material-symbols-outlined">menu</span>
        )}
      </button>

        {/* Menu desktop */}
      <nav className="hidden md:flex justify-end items-center p-4">
        <ul className="flex space-x-10 me-12">
          <li>
            <button
              onClick={toggleTheme}
              className="cursor-pointer focus:outline-none"
            >
              {theme === "dark" ? (
                <span className="material-symbols-outlined">wb_sunny</span>
              ) : (
                <span className="material-symbols-outlined">moon_stars</span>
              )}
            </button>
          </li>
                    <li className="hover:underline">
                        <Link to="/instrucoes">Instruções</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/produto">O produto</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/game">Nosso jogo</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/membros">Quem somos?</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/referencias">Referências</Link>
                    </li>
                </ul>
        </nav>
          {/* Menu lateral - mobile */}
      {isOpen && (
        <div className="absolute top-0 right-0 h-screen w-2/3 bg-white text-black shadow-lg flex flex-col items-start p-6 space-y-6 md:hidden z-50">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <Link to="/instrucoes">Instruções</Link>
          <Link to="/produto">O produto</Link>
          <Link to="/game">Nosso jogo</Link>
          <Link to="/membros">Quem somos?</Link>
          <Link to="/referencias">Referências</Link>
        </div>
      )}

    </header>
    )
}

