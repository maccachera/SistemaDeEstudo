
import { ROADMAP } from '../data/roadmapData';

export default function Sidebar({ onNavigate }) {
  return (
    <aside style={{
      width: '280px',
      backgroundColor: 'var(--bg-soft)',
      borderRight: '1px solid var(--border)',
      height: '100vh',
      padding: '24px 16px'
    }}>
      <div style={{ marginBottom: '30px', padding: '10px' }}>
        <h2 style={{ fontSize: '15px', color: 'var(--text)' }}>Roadmap Backend</h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button onClick={() => onNavigate('dashboard')} style={{ padding: '10px', color: 'var(--text-dim)', textAlign: 'left' }}>
          🏠 Visão Geral
        </button>
        
        <div style={{ marginTop: '20px', fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
          Trilha de conteúdo
        </div>

        {ROADMAP.map((sec) => (
          <button 
            key={sec.id} 
            onClick={() => onNavigate(`section:${sec.id}`)}
            style={{ padding: '10px', color: 'var(--text-dim)', textAlign: 'left', borderRadius: '8px' }}
          >
            {sec.emoji} {sec.titulo}
          </button>
        ))}
      </nav>
    </aside>
  );
}