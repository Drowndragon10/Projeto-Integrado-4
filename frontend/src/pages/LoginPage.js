// frontend/src/pages/loginpage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'; // Certifique-se de que o CSS está no mesmo diretório

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, uma chamada à API
    // Para este exemplo, vamos simular uma autenticação bem-sucedida
    if (email === 'admin@viriatos.com' && password === 'senha123') {
      // Redireciona para o dashboard após o login bem-sucedido
      navigate('/dashboard');
    } else {
      setError('Email ou senha incorretos.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <img src="/logo.png" alt="Viriatos Scouting Logo" className="logo" />
        <h1>Viriatos Scouting</h1>
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
