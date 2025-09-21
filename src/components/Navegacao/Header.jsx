import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import sunny from "/public/icons/sunny.png";
import moon from "/public/icons/mode_night.png";
import homeDark from "/public/icons/homeDark.png";
import homeWhite from "/public/icons/homeWhite.png";

export default function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");
    const navigate = useNavigate();

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

    const enviarHome = () => { // Função para enviar para a página inicial 
      navigate('/')
    }

    return(
        <header>
      <nav className="md:flex justify-end items-center p-4">
        <ul className="flex space-x-10 me-12">
          <li>
            <button onClick={enviarHome} className="cursor-pointer focus:outline-none">
            {theme === "dark" ? (
                <img src={homeDark} alt="simbolo claro" />
              ) : (
                <img src={homeWhite} alt="simbolo escuro" />
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

