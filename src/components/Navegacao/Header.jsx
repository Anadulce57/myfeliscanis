import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sunny from "/public/icons/sunny.png";
import moon from "/public/icons/mode_night.png";

export default function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

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
      <nav className="md:flex justify-end items-center p-4">
        <ul>
          <li>
            
          </li>
        </ul>

        <ul className="flex space-x-10 me-12">
          <li>
            <button onClick={toggleTheme} className="cursor-pointer focus:outline-none">
              {theme === "dark" ? (
                <img src={sunny} alt="sol" />
              ) : (
                <img src={moon} alt="lua" />
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
    </header>
    )
}

