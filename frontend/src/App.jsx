


// Exemplo simples de Rota Privada
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Aqui você verificaria se o usuário está logado (ex: token no localStorage)
  const isAuthenticated = !!localStorage.getItem('user_token'); 
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rota Protegida */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}