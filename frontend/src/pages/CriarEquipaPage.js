import React, { useState } from "react";
import "frontend/src/css/criarequipapage.css";

const AddTeamPage = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    district: "",
    county: "",
    mainCoach: "",
    tier: "",
    teamType: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Equipa adicionada com sucesso!");
    console.log(formData);
    // Lógica para salvar a equipe no sistema
  };

  return (
    <div className="add-team-container">
      <header>
        <h1>Adicionar Equipa</h1>
      </header>
      <form onSubmit={handleSubmit} className="add-team-form">
        <input
          type="text"
          name="teamName"
          placeholder="Nome da equipa"
          value={formData.teamName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="district"
          placeholder="Distrito"
          value={formData.district}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="county"
          placeholder="Concelho"
          value={formData.county}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mainCoach"
          placeholder="Treinador Principal"
          value={formData.mainCoach}
          onChange={handleChange}
          required
        />
        <select
          name="tier"
          value={formData.tier}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Escalão
          </option>
          <option value="Sub-16">Sub-16</option>
          <option value="Sub-19">Sub-19</option>
          <option value="Sub-23">Sub-23</option>
          <option value="Profissional">Profissional</option>
        </select>
        <select
          name="teamType"
          value={formData.teamType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Tipo de Equipa
          </option>
          <option value="Principal">Principal</option>
          <option value="Sombra">Sombra</option>
        </select>
        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
        <button type="submit" className="btn-submit">
          Próxima etapa
        </button>
      </form>
    </div>
  );
};

export default AddTeamPage;
