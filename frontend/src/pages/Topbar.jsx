// src/components/Topbar.jsx
export default function Topbar({ totalDone, totalItems }) {
  const pct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  // Lógica simples de nível
  const getLevel = (p) => {
    if (p >= 90) return { label: "🏆 SÊNIOR", color: "#F87171" };
    if (p >= 55) return { label: "🚀 PLENO", color: "#FB923C" };
    if (p >= 20) return { label: "⚡ JÚNIOR", color: "#38BDF8" };
    return { label: "🌱 INICIANTE", color: "#34D399" };
  };

  const level = getLevel(pct);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 40px',
      borderBottom: '1px solid var(--border)', backgroundColor: 'rgba(11,18,32,.8)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: '20px', fontWeight: 'bold' }}>{pct}%</div>
        <div style={{ fontSize: '10px', color: 'var(--text-faint)' }}>{totalDone} / {totalItems}</div>
      </div>
      
      <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--card)', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', backgroundColor: level.color, transition: 'width 0.4s ease' }} />
      </div>

      <div style={{ 
        padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold',
        border: `1px solid ${level.color}`, color: level.color 
      }}>
        {level.label}
      </div>
    </div>
  );
}