import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginForm.js';
import Dashboard from './components/Dashboard/Dashboard';
import Transaction from './components/Transaksi/Transaction';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUser(user); // Menyimpan informasi user yang login
  };

  return (
    <Router>
<Routes>
  <Route
    path="/"
    element={loggedIn ? <Dashboard user={user} /> : <LoginPage onLogin={handleLogin} />}
  />
  <Route
    path="/dashboard"
    element={loggedIn ? <Dashboard user={user} /> : <LoginPage onLogin={handleLogin} />}
  />
  <Route
    path="/transaction"
    element={loggedIn ? <Transaction /> : <LoginPage onLogin={handleLogin} />}
  />
</Routes>

    </Router>
  );
}

export default App;
