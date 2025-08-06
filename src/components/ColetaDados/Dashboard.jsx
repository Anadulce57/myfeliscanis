import React, { useState } from "react";
import { Pencil } from "lucide-react";

export default function MinhaConta() {
  const [dados, setDados] = useState({
    nome: "Usuário",
    email: "usuario@gmail.com",
    telefone: "+55 11 9002892",
    senha: "********",
  });

  return (
    <div className="min-h-screen bg-[#0F101E] text-white font-sans">
      {/* Topo verde com título */}
      <div className="bg-[#628768] px-6 py-4 flex justify-end">
        <h1 className="font-[Gloock] text-2xl font-semibold">Minha conta</h1>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center p-6 relative">
        {/* Ícone do usuário */}
        <div className="relative -mt-12 bg-[#0F101E] p-2 rounded-full border-8 border-[#0F101E]">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
            <span className="text-4xl text-black">👤</span>
          </div>
          {/* Ícone lápis */}
          <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
            <Pencil size={16} className="text-black" />
          </div>
        </div>

        {/* Card com dados */}
        <div className="bg-white/10 rounded-xl shadow-lg w-full max-w-lg p-6 mt-6 space-y-5 relative">
          {[
            { label: "Nome de usuário", value: dados.nome },
            { label: "E-mail", value: dados.email },
            { label: "Telefone", value: dados.telefone },
            { label: "Mudar senha", value: dados.senha },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm"
            >
              <div>
                <p className="font-[Montserrat] font-bold">{item.label}</p>
                <p className="font-[Montserrat] text-gray-300">{item.value}</p>
              </div>
              <button className="bg-gray-500 text-white px-4 py-1 rounded shadow hover:bg-gray-400">
                Editar
              </button>
            </div>
          ))}

          {/* Rodapé dentro do card */}
          <div className="font-[Montserrat] absolute bottom-4 right-6 text-xs text-gray-400">
            Controle de itens
          </div>
        </div>
      </div>
    </div>
  );
}
