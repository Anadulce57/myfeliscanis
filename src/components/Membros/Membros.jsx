import Header from "../Navegacao/Header"
import { useState } from 'react';

const membros = [
  {
    nome: "Ana Dulce",
    descricao: "A nerd doida viciada em Senhor dos Anéis que lidera a equipe. Futura Engenheira da Computação.",
    imagem: "./imgs/AnaDulce.png",
  },
  {
    nome: "Sara",
    descricao: " A patricinha estranha do grupo que cada fala trás uma dúvida. Futura profissional em Sistemas da Informação",
    imagem: "./imgs/Sara.png",
  },
  {
    nome: "Mariana",
    descricao: "A integrante que trás ideias de temas fofos e diversos. Futura Profissional em Marketing Digital",
    imagem: "./imgs/Mariana.png",
  },
  {
    nome: "Júlia",
    descricao: "A integrante zoeira que traz uma risada toda hora, até no erro 404 do Back-end. Futura Designer; ",
    imagem: "./imgs/Julia.png",
  },
];

export default function Membros() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % membros.length);
  const prev = () => setIndex((prev) => (prev - 1 + membros.length) % membros.length);

  return (
    <div className=" text-dark py-10 px-4 md:px-16 min-h-screen pt-4">
        <Header/>
      <h1 className=" font-gloock text-center text-4xl font-bold text-off-brown mb-5 dark:text-white">Conheça o time</h1>
      {/* Desktop layout */}
      <div className="hidden lg:flex justify-between gap-6 h-73">
        {membros.map((membro, i) => (
          <div key={i} className="bg-[#915c43] rounded-2xl px-6 pt-16 pb-6 text-center relative flex-1 shadow-md h-full mt-33 dark:bg-white">
            <img src={membro.imagem} alt={membro.nome} className="w-20 h-20 rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 object-cover border-4 border-[#cec2c6]" />
            <h3 className="text-xl font-semibold">{membro.nome}</h3>
            <p className= "font-[Montserrat] text-[var(--black)] mt-2 text-sm">{membro.descricao}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col items-center relative">
        <div className="bg-[#915c43] text-bla rounded-2xl px-6 pt-16 pb-6 text-center relative w-full max-w-xs shadow-md mt-40 dark: text-black">
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

      <p className="text-left text-sm  text-[#7A4A33] mt-100 dark:text-white">Dúvidas? Chama no insta @Fellis_Canis</p>
    </div>
  );
}
