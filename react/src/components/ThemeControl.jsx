import { useTheme } from '../theme/ThemeProvider.jsx';
import Icon from './Icon.jsx';

const ACCENTS = [
  { key: 'violet', grad: 'linear-gradient(135deg,#a48bff,#22d3ee)', name: 'Violet' },
  { key: 'emerald', grad: 'linear-gradient(135deg,#34d399,#2dd4bf)', name: 'Emerald' },
  { key: 'orange', grad: 'linear-gradient(135deg,#fb923c,#f59e0b)', name: 'Orange' },
];

/**
 * Floating light/dark + accent switcher. Drop it once at the app root.
 * `position` lets dashboard (left) and landing (right) place it differently.
 */
export default function ThemeControl({ position = 'right' }) {
  const { theme, accent, toggleTheme, setAccent } = useTheme();
  const side = position === 'left' ? { left: 20 } : { right: 20 };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        ...side,
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        borderRadius: 100,
        background: 'rgba(var(--bg-rgb),0.82)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(var(--fg),0.12)',
        boxShadow: '0 12px 34px rgba(0,0,0,0.35)',
      }}
    >
      <button
        onClick={toggleTheme}
        className="nx-themebtn"
        title="Toggle light / dark"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          background: 'rgba(var(--fg),0.06)',
          border: '1px solid rgba(var(--fg),0.12)',
          color: 'var(--tx-1)',
          borderRadius: 100,
          padding: '7px 13px',
          cursor: 'pointer',
          fontSize: 12.5,
          fontWeight: 600,
        }}
      >
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} strokeWidth={2} />
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
      <span style={{ width: 1, height: 20, background: 'rgba(var(--fg),0.14)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        {ACCENTS.map((a) => (
          <button
            key={a.key}
            onClick={() => setAccent(a.key)}
            title={a.name}
            className="nx-themebtn"
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              cursor: 'pointer',
              background: a.grad,
              border: `2px solid ${accent === a.key ? 'var(--tx-0)' : 'transparent'}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
