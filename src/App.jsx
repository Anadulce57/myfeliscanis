import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Membros from "./components/Membros"
import Produto from "./components/Produto"
import LoginPage from "./components/CadastroLogin/CadastroLogin"


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
  
  const isDark = theme === "dark";

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
          /* Instruções */
          <Route path="/cadastro" element={<LoginPage theme={theme} funcao="cadastro"/>}/>
          <Route path="/login" element={<LoginPage theme={theme} funcao="login"/>}/>
          <Route path="/membros" element={<Membros theme={theme}/>}/>
          <Route path="/produto" element={<Produto theme={theme}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App