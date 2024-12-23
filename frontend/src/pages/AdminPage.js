import React from "react";
import "frontend/src/css/adminpage.css"; // Importa os estilos específicos para esta página

const AdminPage = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Viriatus Scouting</div>
        <nav>
          <ul>
            <li className="active">Administração</li>
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
        <header>
          <h1>Administração</h1>
          <div className="filters">
            <input
              type="text"
              placeholder="Pesquisar nome de utilizador"
              className="search-input"
            />
            <select className="filter-select">
              <option value="all">Filtros: Todos</option>
              <option value="active">Ativos</option>
              <option value="inactive">Inativos</option>
            </select>
            <button className="btn-new-user">+ Novo Utilizador</button>
          </div>
        </header>

        {/* Users Table */}
        <section className="users-table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john.doe@email.com</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@email.com</td>
                <td>Inativo</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
