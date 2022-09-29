import { Routes, Route,  } from "react-router-dom";
import Home from "../pages/home";
import Simulation from "../pages/simulation";


const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simulation/*" element={<Simulation />} />
    </Routes>
  );
};
export default Rotas;
