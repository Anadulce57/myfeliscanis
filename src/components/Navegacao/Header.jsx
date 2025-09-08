import { Link } from "react-router-dom"

export default function Header() {

    return(
        <header>

        <nav className="lg:flex justify-end items-center p-4">


                <ul className="flex space-x-10 me-12">
                    <li>
                        <button className="cursor-pointer">
                            <span class="material-symbols-outlined">mode_night</span>
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