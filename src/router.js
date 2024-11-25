import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccountCuidador from "./pages/CreateAccountCuidador";
import HomeCuidador from "./pages/HomeCuidador";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account-cuidador" element={<CreateAccountCuidador />} />
        <Route path="/home-cuidador" element={<HomeCuidador />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
