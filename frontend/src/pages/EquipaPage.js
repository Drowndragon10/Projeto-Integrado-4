import React, { useState } from "react";
import "frontend/src/css/equipapage.css";

const TeamsPage = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: "Académico de Viseu", tier: "Equipa Profissional", type: "Principal" },
    { id: 2, name: "Académico de Viseu", tier: "Sub-23", type: "Sombra" },
    { id: 3, name: "Académico de Viseu", tier: "Sub-19", type: "Sombra" },
    { id: 4, name: "Académico de Viseu", tier: "Formação - Masculino Sub-16 A", type: "Principal" },
    { id: 5, name: "Académico de Viseu", tier: "Formação - Feminino Seniores", type: "Principal" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta equipa?")) {
      setTeams(teams.filter((team) => team.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Editar equipa com ID: ${id}`);
    // Lógica para editar equipe
  };

  const handleAddTeam = () => {
    alert("Adicionar nova equipa");
    // Lógica para adicionar nova equipe
  };

  return (
    <div className="teams-container">
      <header>
        <h1>Equipas</h1>
      </header>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Pesquisar nome de equipa"
          className="search-bar"
        />
        <div className="filter-dropdown">
          <label htmlFor="filter">Filtros:</label>
          <select id="filter">
            <option value="all">Todos</option>
            <option value="principal">Principal</option>
            <option value="sombra">Sombra</option>
          </select>
        </div>
        <button className="btn-add-team" onClick={handleAddTeam}>
          + Novo Equipa
        </button>
      </div>

      <table className="teams-table">
        <thead>
          <tr>
            <th>Equipa</th>
            <th>Escalão</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.tier}</td>
              <td>{team.type}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(team.id)}>
                  ✏️
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(team.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsPage;
