import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Membros from "./components/Membros/Membros";
import Produto from "./components/Produto/Produto";
import GameIntro from "./components/Game/Game";
import Referencias from "./components/Referencias/Referencias";
import Instrucoes from "./components/Instrucoes/Instrucoes";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/membros" element={<Membros/>}/>
          <Route path="/produto" element={<Produto/>}/>
          <Route path="/game" element={<GameIntro/>}/>
          <Route path="/referencias" element={<Referencias/>}/>
          <Route path="/instrucoes" element={<Instrucoes/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App