import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Usuario from "./components/listaUsuarios.js";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import UserSavings from "./pages/UserSavings";
import UserState from "./context/User/UserState";
import AhorroForm from "./components/AhorroForm.js";

function App() {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  
  return (
    <UserState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Usuario />} />
        <Route path="/nuevo-usuario" element={<CreateUser />} />
        <Route path="/ahorro-usuario" element={<UserSavings />} />
      </Routes>
    </UserState>
  );
}

export default App;
