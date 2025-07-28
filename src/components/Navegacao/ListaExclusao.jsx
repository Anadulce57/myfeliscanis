import { useEffect, useState } from "react";

export default function ListaExclusao(){
    const ListaBase = ["a", "b","c", "d", "e", "f", "g"]
    const [excluidos, setExcluidos] = useState([])

    useEffect(() => {
        const dados = ["a"];
        setExcluidos(dados);
    }, [])

    const itensFiltrados = ListaBase.filter(item => !excluidos.includes(item))

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Itens renderizados</h2>
            <ul className="flex items-center">
                {itensFiltrados.map((item) => (
                    <li key={item} className="text-blue-700 font-medium">Item: {item}</li>
                ))}
            </ul>
        </div>
    )
}