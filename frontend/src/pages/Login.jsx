// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 1. Simulação: Salva o token no navegador
    localStorage.setItem('user_token', 'token-fake-123'); 
    
    // 2. Redireciona para o Dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      <div style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="display" style={{ fontSize: '24px', marginBottom: '8px' }}>
            Bem-vindo de volta! 🚀
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>
            Acesse sua conta para continuar seus estudos.
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dim)' }}>E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              style={{
                backgroundColor: 'var(--bg-soft)',
                border: '1px solid var(--border)',
                padding: '12px 16px',
                borderRadius: '8px',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dim)' }}>Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                backgroundColor: 'var(--bg-soft)',
                border: '1px solid var(--border)',
                padding: '12px 16px',
                borderRadius: '8px',
                color: 'var(--text)',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <button type="submit" style={{
            backgroundColor: 'var(--verde)',
            color: 'var(--bg)',
            padding: '14px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '15px',
            marginTop: '10px',
            transition: 'background 0.2s'
          }}>
            Entrar no Sistema
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/" style={{ color: 'var(--text-faint)', fontSize: '13px' }}>
            ← Voltar para a página inicial
          </Link>
        </div>

      </div>
    </div>
  );
}