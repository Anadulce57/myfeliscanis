import React from "react";
import Header from "../Navegacao/Header";
import Imagem from "/imgs/cao1-Thor.png";

export default function Referencias() {
  const artigos = [
    {
      titulo: "Artigo 1",
      descricao:
        "Contribuição do médico Veterinário na atenção primária à saúde: Um relato de experiência",
    },
    {
      titulo: "Artigo 2",
      descricao:
        "COLEIRA INTELIGENTE: Desenvolvimento de um Protótipo para Monitoramento de Sinais Vitais de Cães e Gatos",
    },
    {
      titulo: "Artigo 3",
      descricao: "O desenvolvimento do mercado pet no Brasil",
    },
    {
      titulo: "Artigo 4",
      descricao:
        "Competências colaborativas e o uso de Tecnologias da Informação e Comunicação: PET-Saúde/Interprofissionalidade em período de pandemia",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center 
                   gap-8 px-6 py-10 text-black dark:text-white lg:text-3xl mt-6 lg:mt-0"
      >
        {/* Coluna esquerda - textos */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="font-gloock text-4xl lg:text-5xl font-bold mb-6">
            Referências
          </h1>
          <ul className="space-y-4 text-base lg:text-xl font-montserrat">
            {artigos.map((artigo, index) => (
              <li key={index}>
                <span className="font-bold">{artigo.titulo}</span> -{" "}
                {artigo.descricao}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita - imagem */}
        <div className="flex-1 flex justify-center w-full mt-8 lg:mt-0">
          <img
            src={Imagem}
            alt="Cachorro dormindo"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[600px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
