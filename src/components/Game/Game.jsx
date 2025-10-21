import React from "react";
import Header from "../Navegacao/Header";

export default function GameIntro() {

  const alerta = () => {
    alert("Sentimos muito, jogo ainda em desenvolvimento")
  }

  return (
    <div className="flex flex-col min-h-screen font-inter">
      {/* Header */}
      <Header />

      {/* Corpo dividido em 2 colunas no desktop e empilhado no mobile */}
      <main className="flex flex-1 flex-col md:flex-row">
        {/* Coluna esquerda: texto */}
        <section className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-10 md:py-16">
          <h1 className="text-4xl md:text-6xl font-gloock mb-6 md:mb-12 text-center md:text-left">
            Conheça nosso jogo
          </h1>
          <p className="text-base md:text-xl leading-relaxed font-montserrat text-black dark:text-white text-center md:text-left">
            Conheça agora um jogo incrível e cheio de magia inspirado em Studio
            Ghibli, onde você terá a missão de procurar por filhotes perdidos em
            uma floresta cheia de mistérios. <br />
            <br />
            Mas tome cuidado pois na sombra habita aquele que todos temem! Vá
            com cautela, explore esse mundo e descubra seus segredos.
          </p>
        </section>

        {/* Coluna direita: vídeo com logo e botão / aviso no mobile */}
        <section
          className="w-full md:w-1/2 relative flex items-center justify-center mt-6 md:mt-0"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {/* Vídeo de fundo */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/gameFundo.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
          </video>

          {/* Conteúdo sobre o vídeo */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Conteúdo Desktop */}
            <div className="hidden md:flex flex-col items-center">
              <img
                src="/imgs/logoGame.png"
                alt="Felis Canis Logo"
                className="w-48 mb-10"
              />
              <button
                onClick={alerta}
                className="px-12 py-4 rounded-full text-lg text-white font-[Playfair] bg-white/20 hover:bg-white/30 backdrop-blur-lg transition cursor-pointer"
              >
                Play
              </button>
            </div>

            <div className="flex md:hidden flex-col items-center bg-black/50 p-6 rounded-lg">
              <p className="text-white text-center text-lg">
                O jogo está disponível apenas no computador. <br />
                Por favor, acesse pelo computador para jogar.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
