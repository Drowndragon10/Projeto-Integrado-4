import React, { useState } from "react";
import "frontend/src/css/selecionarjogadorespage.css";

const SelectPlayersPage = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const players = [
    { id: 1, name: "Domen Gril", position: "Guarda-redes" },
    { id: 2, name: "Jogador 2", position: "Defesa" },
    { id: 3, name: "Jogador 3", position: "Médio" },
    { id: 4, name: "Jogador 4", position: "Avançado" },
    { id: 5, name: "Jogador 5", position: "Guarda-redes" },
  ];

  const handleTogglePlayer = (playerId) => {
    setSelectedPlayers((prevSelected) =>
      prevSelected.includes(playerId)
        ? prevSelected.filter((id) => id !== playerId)
        : [...prevSelected, playerId]
    );
  };

  const handleSubmit = () => {
    alert("Equipa criada com os jogadores selecionados!");
    console.log("Jogadores selecionados:", selectedPlayers);
    // Lógica para salvar os jogadores na equipa
  };

  return (
    <div className="select-players-container">
      <header>
        <h1>Selecionar Jogadores</h1>
      </header>
      <div className="players-list">
        {players.map((player) => (
          <div key={player.id} className="player-item">
            <label>
              <input
                type="checkbox"
                checked={selectedPlayers.includes(player.id)}
                onChange={() => handleTogglePlayer(player.id)}
              />
              {player.name}
            </label>
            <span>{player.position}</span>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="btn-submit">
        Adicionar Equipa
      </button>
    </div>
  );
};

export default SelectPlayersPage;
