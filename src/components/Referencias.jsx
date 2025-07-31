import React from 'react';

export default function Referencias() {
  const artigos = [
    {
      titulo: "Artigo 1",
      descricao: "Contribuição do médico Veterinário na atenção primária à saúde: Um relato de experiência"
    },
    {
      titulo: "Artigo 2",
      descricao: "COLIERA INTELIGENTE: Desenvolvimento de um Protótipo para Monitoramento de Sinais Vitais de Cães e Gatos"
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
    <div className="min-h-screen bg-[#f5f5f5] text-black flex flex-col lg:flex-row px-4 md:px-20 py-10 gap-8">
      {/* Conteúdo de texto */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Referências</h1>
        <ul className="space-y-4">
          {artigos.map((artigo, index) => (
            <li key={index}>
              <span className="font-bold">{artigo.titulo}</span> - {artigo.descricao}
            </li>
          ))}
        </ul>
      </div>

      {/* Imagem do cachorro - só aparece no desktop */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <img
          src="./public/imgs/cao1-Thor.png" // substitua por seu path real
          alt="Cachorro dormindo"
          className="rounded-lg w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
}
