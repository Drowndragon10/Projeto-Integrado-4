import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import "frontend/src/css/newuserpage.css";

const NewUserPage = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleInvite = () => {
    if (!email || !userType) {
      alert("Preencha todos os campos.");
      return;
    }

    // Lógica para enviar o convite (API ou outra funcionalidade)
    console.log("Convite enviado para:", { email, userType });

    // Redireciona para a página de administração
    navigate("/admin");
  };

  return (
    <div className="new-user-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Viriatus Scouting</div>
        <nav>
          <ul>
            <li>Administração</li>
            <li>Equipas</li>
            <li>Calendário de Jogos</li>
            <li>Escalões</li>
            <li>Jogadores</li>
            <li>Avaliações</li>
            <li>Relatórios</li>
            <li>Tarefas</li>
            <li className="logout">Sair</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Novo Utilizador</h1>
        <p>Introduza o e-mail do utilizador que pretende convidar e configure que tipo de utilizador será.</p>
        <div className="form-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="input-field"
          >
            <option value="">Tipo de utilizador</option>
            <option value="admin">Administrador</option>
            <option value="scout">Scout</option>
            <option value="viewer">Visualizador</option>
          </select>
          <button className="btn-invite" onClick={handleInvite}>
            Convidar
          </button>
        </div>
      </main>
    </div>
  );
};

export default NewUserPage;
