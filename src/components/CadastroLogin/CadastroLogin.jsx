import facebookBlack from "../../../public/icons/facebookBlack.svg"
import facebookWhite from "../../../public/icons/facebookWhite.svg"
import googleBlack from "../../../public/icons/googleBlack.svg";
import googleWhite from "../../../public/icons/googleWhite.svg";
import linkedinBlack from "../../../public/icons/linkedinBlack.svg";
import linkedinWhite from "../../../public/icons/linkedinWhite.svg";

import React from "react";

export default function LoginPage({ theme = "light", funcao }) {
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen flex items-center justify-center`}>
      <div className="text-center px-4">
        <h1 className={`text-2xl font-medium mb-6 ${isDark ? "text-white" : "text-black"}`}>
        {funcao === "login" ? "Entre na sua conta" : "Faça sua conta"}
        </h1>

        {/* Ícones de login social */}
        <div className="flex justify-center gap-4 mb-6">
          <button className={`p-2 rounded-full ${isDark ? "bg-[#1C1C2E]" : "bg-[#EAEAEA]"}`}>
            <img src={theme === "ligth" ? googleBlack : googleWhite} alt="Google" className="w-6 h-6" />
          </button>
          <button className={`p-2 rounded-full ${isDark ? "bg-[#1C1C2E]" : "bg-[#EAEAEA]"}`}>
            <img src={theme === "ligth" ? facebookBlack : facebookWhite} alt="Facebook" className="w-6 h-6" />
          </button>
          <button className={`p-2 rounded-full ${isDark ? "bg-[#1C1C2E]" : "bg-[#EAEAEA]"}`}>
            <img src={theme === "ligth" ? linkedinBlack : linkedinWhite} alt="LinkedIn" className="w-6 h-6" />
          </button>
        </div>

        {/* Card de login */}
        <div className={`rounded-2xl shadow-md p-6 w-80 mx-auto ${isDark ? "bg-[#1C1C2E] text-white" : "bg-white text-black"}`}>
          <p className="text-sm mb-4">{funcao === "login" ? "Login com e-mail e senha" : "Cadastro com e-mail e senha"}</p>

          <input
            type="text" 
            placeholder="Digite seu nome"
            className={`w-full p-2 mb-3 rounded-full text-sm outline-none ${isDark ? "bg-[#2C2C3A] placeholder-gray-400 text-white" : "bg-gray-200 placeholder-gray-600"} ${funcao === "login" ? "hidden" : ""}`}
          />

          <input
            type="email"
            placeholder="Digite o email"
            className={`w-full p-2 mb-3 rounded-full text-sm outline-none ${isDark ? "bg-[#2C2C3A] placeholder-gray-400 text-white" : "bg-gray-200 placeholder-gray-600"}`}
          />

          <input
            type="password"
            placeholder="Digite a senha"
            className={`w-full p-2 mb-4 rounded-full text-sm outline-none ${isDark ? "bg-[#2C2C3A] placeholder-gray-400 text-white" : "bg-gray-200 placeholder-gray-600"}`}
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            className={`w-full p-2 mb-4 rounded-full text-sm outline-none ${isDark ? "bg-[#2C2C3A] placeholder-gray-400 text-white" : "bg-gray-200 placeholder-gray-600"} ${funcao === "login" ? "hidden" : ""}`}
          />

          <button
            className={`w-full py-2 rounded-full font-semibold ${
              isDark ? "bg-[#FFF6D9] text-black" : "bg-[#8B4C2B] text-white"
            }`}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
