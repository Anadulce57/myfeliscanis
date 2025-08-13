import { useState } from 'react';

const membros = [
  {
    nome: "Ana Dulce",
    descricao: "A nerd doida viciada em Senhor dos Anéis que lidera a equipe. Futura Engenheira da Computação.",
    imagem: "./public/imgs/AnaDulce.png",
  },
  {
    nome: "Sara",
    descricao: " A patricinha estranha do grupo que cada fala trás uma dúvida. Futura profissional em Sistemas da Informação",
    imagem: "./public/imgs/Sara.png",
  },
  {
    nome: "Mariana",
    descricao: "A integrante que trás ideias de temas fofos e diversos. Futura Profissional em Marketing Digital",
    imagem: "./public/imgs/Mariana.png",
  },
  {
    nome: "Júlia",
    descricao: "A integrante zoeira que traz uma risada toda hora, aténo erro 404 do Back-end. Futura Designer; ",
    imagem: "./public/imgs/Julia.png",
  },
];

export default function Membros() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % membros.length);
  const prev = () => setIndex((prev) => (prev - 1 + membros.length) % membros.length);

  return (
    <div className="bg-[#0f101c] text-white py-10 px-4 md:px-16 min-h-screen">
      <h1 className=" font-[Gloock]  text-center text-4xl font-bold text-[#e7dce0] mb-12">Conheça o time</h1>

      {/* Desktop layout */}
      <div className="hidden lg:flex justify-between gap-6">
        {membros.map((membro, i) => (
          <div key={i} className="bg-[#e7dce0] text-black rounded-2xl px-6 pt-16 pb-6 text-center relative flex-1 shadow-md h-9/10">
            <img src={membro.imagem} alt={membro.nome} className="w-20 h-20 rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 object-cover border-4 border-[#e7dce0]" />
            <h3 className="text-xl font-semibold">{membro.nome}</h3>
            <p className= "font-[Montserrat] text-[var(--black)] mt-2 text-sm">{membro.descricao}</p>
          </div>
        ))}
      </div>

      {/* Mobile layout com carrossel */}
      <div className="lg:hidden flex flex-col items-center relative">
        <div className="bg-[#e7dce0] text-black rounded-2xl px-6 pt-16 pb-6 text-center relative w-full max-w-xs shadow-md">
          <img src={membros[index].imagem} alt={membros[index].nome} className="w-24 h-24 rounded-full absolute top-[-48px] left-1/2 transform -translate-x-1/2 object-cover border-4 border-[#e7dce0]" />
          <h3 className="text-xl font-semibold">{membros[index].nome}</h3>
          <p className="mt-2 text-sm">{membros[index].descricao}</p>
        </div>

        {/* Navegação */}
        <div className="flex justify-between w-full max-w-xs mt-4">
          <button onClick={prev} className="text-2xl">{'◀'}</button>
          <button onClick={next} className="text-2xl">{'▶'}</button>
        </div>
      </div>

      <p className="text-center text-sm mt-12 text-[#cccccc]">Dúvidas? Chama no insta @Fellis_Canis</p>
    </div>
  );
}
