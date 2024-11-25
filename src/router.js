import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccountCuidador from "./pages/CreateAccountCuidador";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account-cuidador" element={<CreateAccountCuidador />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
