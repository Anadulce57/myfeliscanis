import React from "react";

export default function GameIntro() {
  return (
    <div className="flex h-screen overflow-hidden font-inter">
      {/* Lado esquerdo */}
      <div className="w-1/2 bg-[#fef9f8] px-16 py-20 flex flex-col justify-center mb-50">
        <h1 className="text-5xl mb-20">Conheça nosso jogo</h1>
        <p className="text-lg leading-relaxed">
          Conheça agora um jogo incrível e cheio de magia inspirado em Studio Ghibli,
          onde você terá a missão de procurar por filhotes perdidos em uma floresta cheia
          de mistérios. Mas tome cuidado pois na sombra habita aquele que todos temem!
          Vá com cautela e explore esse mundo e descubra seus segredos.
        </p>
      </div>
      <div className="w-1/2 relative flex items-center justify-center" style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }} >
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
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/imgs/logoGame.png"
            alt="Fellis Canis Logo"
            className="w-44 mb-8"
          />
          <button className="px-10 py-4 text-xl rounded-full text-white font-playfair bg-white/20 hover:bg-white/30 backdrop-blur">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}