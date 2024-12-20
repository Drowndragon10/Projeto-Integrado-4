// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistoPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
