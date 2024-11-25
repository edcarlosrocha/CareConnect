import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccountCuidador from "./pages/CreateAccountCuidador";
import HomeCuidador from "./pages/HomeCuidador";
import PerfilIdoso from "./pages/PerfilIdoso";
import PerfilCuidador from "./pages/PerfilCuidador";
import HomeIdoso from "./pages/HomeIdoso";
import ListaCuidadores from "./pages/ListaCuidadores";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account-cuidador" element={<CreateAccountCuidador />} />
        <Route path="/home-cuidador" element={<HomeCuidador />} />
        <Route path="/perfil-idoso" element={<PerfilIdoso />} />
        <Route path="/perfil-cuidador" element={<PerfilCuidador />} />
        <Route path="/home-idoso" element={<HomeIdoso />} />
        <Route path="/lista-cuidadores" element={<ListaCuidadores />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
