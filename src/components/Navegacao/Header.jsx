import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
         <nav className="lg:flex justify-end items-center p-4">
         <ul className="flex space-x-10 me-12">
                    <li>
            <button onClick={toggleTheme} className="cursor-pointer focus:outline-none">
              {theme === "dark" ? (
                // Ícone do Sol quando o tema é dark
                <span className="material-symbols-outlined">wb_sunny</span>
              ) : (
                // Ícone da Lua quando o tema não é dark (claro)
                <span className="material-symbols-outlined">dark_mode</span>
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

