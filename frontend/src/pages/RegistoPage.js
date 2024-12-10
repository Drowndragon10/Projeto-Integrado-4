// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', {
        email,
        password,
        userType,
      });
      history.push('/login'); // Após o registro, redireciona para a página de login
    } catch (error) {
      console.error('Erro ao registrar', error);
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <input
          type="text"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          placeholder="Tipo de usuário"
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
