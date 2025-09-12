import React from 'react';
import Header from "../Navegacao/Header"

export default function Referencias() {
  const artigos = [
    {
      titulo: "Artigo 1",
      descricao: "Contribuição do médico Veterinário na atenção primária à saúde: Um relato de experiência"
    },
    {
      titulo: "Artigo 2",
      descricao: "COLEIRA INTELIGENTE: Desenvolvimento de um Protótipo para Monitoramento de Sinais Vitais de Cães e Gatos"
    },
    {
      titulo: "Artigo 3",
      descricao: "O desenvolvimento do mercado pet no Brasil"
    },
    {
      titulo: "Artigo 4",
      descricao: "Competências colaborativas e o uso de Tecnologias da Informação e Comunicação: PET-Saúde/Interprofissionalidade em período de pandemia"
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-10">
        
        {/* Coluna esquerda - textos */}
        <div className="flex-1">
          <h1 className="font-[Gloock] text-3xl font-bold mb-6">Referências</h1>
          <ul className="space-y-4">
            {artigos.map((artigo, index) => (
              <li key={index} className="font-[Montserrat]">
                <span className="font-bold">{artigo.titulo}</span> - {artigo.descricao}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita - imagem */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/imgs/cao1-Thor.png"
            alt="Cachorro dormindo"
            className="rounded-sm w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
