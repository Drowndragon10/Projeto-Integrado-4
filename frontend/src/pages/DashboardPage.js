// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Recuperar o token do localStorage
    if (!token) {
      history.push('/login'); // Redireciona para o login caso o token não exista
    } else {
      // Aqui você pode fazer uma requisição para buscar informações do usuário, se necessário
      setUserInfo({ name: 'João', email: 'joao@example.com' }); // Exemplo de usuário
    }
  }, [history]);

  return (
    <div>
      <h1>Bem-vindo, {userInfo ? userInfo.name : 'Usuário'}</h1>
      <p>Email: {userInfo ? userInfo.email : 'Carregando...'}</p>
    </div>
  );
};

export default DashboardPage;
