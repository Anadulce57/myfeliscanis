import { Link } from "react-router-dom"

export default function Header() {

    return(
        <header>

        <button className=""></button>

        <nav className="">
                <button>
                    <Link to="/">Home</Link>
                </button>

                <ul>
                    <li>
                        <Link to="/instrucoes">Instruções</Link>
                    </li>
                    <li>
                        <Link to="/produto">O produto</Link>
                    </li>
                    <li>
                        <Link to="/game">Nosso jogo</Link>
                    </li>
                    <li>
                        <Link to="/menbros">Quem somos?</Link>
                    </li>
                    <li>
                        <Link to="/referencias">Referências</Link>
                    </li>
                </ul>
        </nav>

    </header>
    )
}