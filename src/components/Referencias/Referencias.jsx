import React from 'react';
import Header from "../Navegacao/Header";
import Imagem from "/imgs/cao1-Thor.png";

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
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-10 text-black dark:text-white lg:text-3xl pt-50">
        
        {/* Coluna esquerda - textos */}
        <div className="flex-1">
          <h1 className="font-gloock text-5xl font-bold mb-6 text-black dark:text-white ">Referências</h1>
          <ul className="space-y-4">
            {artigos.map((artigo, index) => (
              <li key={index} className="font-montserrat">
                <span className="font-bold">{artigo.titulo}</span> - {artigo.descricao}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita - imagem */}
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={Imagem}
            alt="Cachorro dormindo"
            className="w-160 h-160 object-cover rounded-md mt-20"
          />
        </div>
      </div>
    </div>
  );
}
