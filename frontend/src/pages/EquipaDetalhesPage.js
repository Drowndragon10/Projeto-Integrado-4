import React, { useState } from "react";
import "frontend/src/css/equipasdetalhespage.css";

const TeamDetailsPage = ({ team, players }) => {
  const [activeTab, setActiveTab] = useState("Sobre");

  return (
    <div className="team-details-container">
      <header>
        <h1>Equipas - {team.name}</h1>
      </header>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "Sobre" ? "active" : ""}`}
          onClick={() => setActiveTab("Sobre")}
        >
          Sobre
        </button>
        <button
          className={`tab-button ${activeTab === "Jogadores" ? "active" : ""}`}
          onClick={() => setActiveTab("Jogadores")}
        >
          Jogadores
        </button>
      </div>

      {activeTab === "Sobre" && (
        <div className="team-info">
          <p><strong>Nome:</strong> {team.name}</p>
          <p><strong>Divisão:</strong> {team.division}</p>
          <p><strong>Distrito:</strong> {team.district}</p>
          <p><strong>Concelho:</strong> {team.county}</p>
          <p><strong>Treinador Principal:</strong> {team.coach}</p>
          <p><strong>Mais:</strong></p>
          <textarea readOnly value={team.moreInfo || ""} className="team-textarea" />
        </div>
      )}

      {activeTab === "Jogadores" && (
        <div className="team-players">
          <table className="players-table">
            <thead>
              <tr>
                <th>Jogador</th>
                <th>Posição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>
                    <button className="action-button edit">✏️</button>
                    <button className="action-button delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Valores de exemplo para testar o componente
TeamDetailsPage.defaultProps = {
  team: {
    name: "Académico de Viseu",
    division: "Equipa Profissional",
    district: "Viseu",
    county: "Viseu",
    coach: "Rui Ferreira",
    moreInfo: "",
  },
  players: [
    { name: "Domen Gril", position: "Guarda-redes" },
    { name: "xxxxx", position: "xxxxx" },
    { name: "xxxxx", position: "xxxxx" },
    { name: "xxxxx", position: "xxxxx" },
    { name: "xxxxx", position: "xxxxx" },
    { name: "xxxxx", position: "xxxxx" },
  ],
};

export default TeamDetailsPage;
