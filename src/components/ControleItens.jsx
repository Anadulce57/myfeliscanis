import "@fontsource/material-symbols-outlined";

const itens = [
  {
    id: 1,
    nome: "Placa Arduino",
    preco: "R$ 73,00",
  },
  {
    id: 2,
    nome: "Protoboard",
    preco: "R$ 15,00",
  },
];

export default function ControleItens() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      {/* Fundo decorativo */}
      <div className="absolute w-80 h-80 bg-gray-200 opacity-20 top-10 left-0 rounded-full"></div>
    
      {/* Conteúdo principal */}
      <main className="px-10 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Controle de Itens</h1>

        {/* Tabela */}
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-3 items-center border-b border-gray-700 px-6 py-4">
            <span className="text-sm font-semibold">Nome</span>
            <span className="text-sm font-semibold">Preço</span>
            <span className="text-right">
              <span className="material-symbols-outlined cursor-pointer text-white hover:text-gray-300">
                add
              </span>
            </span>
          </div>

          {/* Itens */}
          {itens.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 items-center px-6 py-4 border-t border-gray-800"
            >
              {/* Nome com círculo */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm uppercase">
                  {item.nome[0]}
                </div>
                <span className="text-sm">{item.nome}</span>
              </div>

              {/* Preço */}
              <span className="text-sm">{item.preco}</span>

              {/* Ações */}
              <div className="flex justify-end gap-4 text-white">
                <span className="material-symbols-outlined cursor-pointer hover:text-gray-300">
                  edit
                </span>
                <span className="material-symbols-outlined cursor-pointer hover:text-red-400">
                  delete
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}