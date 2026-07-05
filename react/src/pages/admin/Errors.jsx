import { useNavigate } from 'react-router-dom';

const errMap = {
  '404': { code: '404', title: 'Page not found', body: "The page you're looking for doesn't exist or has been moved. Check the URL or head back to safety." },
  '500': { code: '500', title: 'Internal server error', body: 'Something went wrong on our end. Our team has been notified — please try again in a moment.' },
  maintenance: { code: '🛠', title: 'Down for maintenance', body: "We're making things better. The dashboard will be back online shortly. Thanks for your patience." },
  'coming-soon': { code: '✦', title: 'Coming soon', body: 'This section is under construction and launching soon. Stay tuned for something great.' },
};

export default function ErrorPage({ kind }) {
  const nav = useNavigate();
  const err = errMap[kind] || errMap['404'];
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden', background: 'var(--bg)', color: 'var(--tx-1)' }}>
      <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, background: 'radial-gradient(circle,rgba(var(--a1rgb),0.2),transparent 65%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 460 }}>
        <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 'clamp(88px,16vw,150px)', lineHeight: 1, letterSpacing: '-0.04em', background: 'linear-gradient(120deg,var(--a2),var(--a3))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{err.code}</div>
        <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 600, margin: '8px 0 14px' }}>{err.title}</h1>
        <p style={{ fontSize: 15, color: '#a6a6b6', lineHeight: 1.6, marginBottom: 30 }}>{err.body}</p>
        <button onClick={() => nav('/app')} style={{ background: 'linear-gradient(135deg,var(--a2),var(--a3))', border: 'none', color: '#0a0a12', fontSize: 14.5, fontWeight: 600, padding: '14px 28px', borderRadius: 12, cursor: 'pointer', boxShadow: '0 10px 30px rgba(var(--a1rgb),0.4)' }}>Back to dashboard</button>
      </div>
    </div>
  );
}
