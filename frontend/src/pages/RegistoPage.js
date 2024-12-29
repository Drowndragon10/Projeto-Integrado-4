import React, { useState } from "react";
import "frontend/src/css/registopage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As palavras-passe não coincidem.");
      return;
    }

    // Lógica para registrar o utilizador (ex.: chamada para a API)
    console.log("Dados do utilizador:", { name, email, password });

    // Redirecionamento ou mensagem de sucesso
    alert("Registrado com sucesso!");
  };

  return (
    <div className="register-container">
      {/* Área da Esquerda */}
      <div className="left-section">
        <h1>Viriatos Scouting</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Viriatos_Logo.png" // Substituir pelo logo correto
          alt="Viriatos Logo"
          className="logo"
        />
      </div>

      {/* Área da Direita */}
      <div className="right-section">
        <h2>Criar Conta</h2>
        <p>
          Bem Vindo ao Viriatus Scouting, para poder à sua conta preencha os
          campos abaixo
        </p>

        <div className="form-container">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirmar Palavra-passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
          />
          <button className="btn-register" onClick={handleRegister}>
            Registar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
