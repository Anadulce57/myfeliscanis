import { useEffect, useState } from "react";

export default function NavBar(){
    const ListaBase = [
        { id: 'home', text: 'Home', path: '/home' },
        { id: 'menbros', text: 'Quem somos?', path: '/menbros' },
        { id: 'produto', text: 'Produto', path: '/produto' },
        { id: 'instrucao', text: 'Instruções', path: '/instrucoes' },
        { id: 'gamw', text: 'O jogo', path: '/jogo' },
        {id: 'referencia', text: 'Referências', path: '/referencias'},
    ];

    const [excluidos, setExcluidos] = useState([])

    useEffect(() => {
        const dados = ['home'];
        setExcluidos(dados);
    }, [])

    const itensFiltrados = ListaBase.filter(item => !excluidos.includes(item))

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Itens renderizados</h2>
            <ul className="flex items-center">
                {itensFiltrados.map((item) => (
                    <li key={item.id} className="text-blue-500 font-medium"><a href={item.path}>{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}