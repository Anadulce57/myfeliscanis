import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Membros from "./components/Menbros/Membros"
import Produto from "./components/Produto/Produto"
import LoginPage from "./components/CadastroLogin/CadastroLogin"
import GameIntro from "./components/Game/Game";
import Referencias from "./components/Referencias/Referencias";
import ControleItens from "./components/ColetaDados/ControleItens"
import Instrucoes from "./components/Instrucoes/Instrucoes"
import Home from "./components/Home/Home"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const detectedTheme = prefersDark ? "dark" : "light";
  
      setTheme(detectedTheme);
      localStorage.setItem("theme", detectedTheme);
    }
  }, []);
  
  const isDark = theme === "white";

  return (
    <div 
    className={`
      min-h-screen bg-no-repeat bg-cover
      ${isDark
        ? 'bg-[url("/background/FelisCanisFundo-dark-mobile.png")] md:bg-[url("/background/FelisCanisFundo-dark-desktop.png")]'
        : 'bg-[url("/background/FelisCanisFundo-white-mobile.png")] md:bg-[url("/background/FelisCanisFundo-white-desktop.png")]'}
    `}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} />}/>
          <Route path="/cadastro" element={<LoginPage theme={theme} funcao="cadastro"/>}/>
          <Route path="/login" element={<LoginPage theme={theme} funcao="login"/>}/>
          <Route path="/membros" element={<Membros theme={theme}/>}/>
          <Route path="/produto" element={<Produto theme={theme}/>}/>
          <Route path="/game" element={<GameIntro theme={theme}/>}/>
          <Route path="/referencias" element={<Referencias theme={theme}/>}/>
          <Route path="/controleitens" element={<ControleItens theme={theme}/>}/>
          <Route path="/instrucoes" element={<Instrucoes theme={theme}/>}/>
        </Routes>
      </Router>

      
    </div>
  )
}

export default App