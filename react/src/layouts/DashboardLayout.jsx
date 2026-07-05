import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { navGroups } from '../data/dashboard.js';

const card = {
  background: 'rgba(var(--fg),0.04)',
  border: '1px solid rgba(var(--fg),0.08)',
};

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--tx-1)',
        display: 'flex',
      }}
    >
      {/* ===== SIDEBAR ===== */}
      <aside
        className={`nx-sidebar${open ? ' open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 262,
          zIndex: 50,
          background: 'var(--bg-elev)',
          borderRight: '1px solid rgba(var(--fg),0.06)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '18px 18px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            borderBottom: '1px solid rgba(var(--fg),0.05)',
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: 'linear-gradient(135deg,var(--a1),var(--a3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontFamily: "'Space Grotesk'",
              color: '#0a0a12',
              boxShadow: '0 6px 18px rgba(var(--a1rgb),0.4)',
            }}
          >
            N
          </span>
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk'",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              Nexus
            </div>
            <div
              style={{
                fontSize: 10.5,
                color: 'var(--tx-5)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: 3,
              }}
            >
              Admin Suite
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, overflowY: 'auto', padding: '14px 12px 24px' }}>
          {navGroups.map((grp) => (
            <div key={grp.label} style={{ marginBottom: 18 }}>
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#5c5c6e',
                  padding: '0 12px 8px',
                }}
              >
                {grp.label}
              </div>
              {grp.items.map((it) => (
                <a
                  key={it.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="nx-nav"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 2,
                    color: it.active ? 'var(--tx-0)' : 'var(--tx-4)',
                    background: it.active ? 'rgba(var(--a1rgb),0.14)' : 'transparent',
                  }}
                >
                  <span style={{ display: 'flex', color: it.active ? 'var(--a2)' : 'var(--tx-4)' }}>
                    <Icon name={it.icon} size={18} />
                  </span>
                  <span style={{ flex: 1 }}>{it.label}</span>
                  {it.badge && (
                    <span
                      style={{
                        fontSize: 10.5,
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 100,
                        background: 'rgba(var(--a3rgb),0.18)',
                        color: 'var(--a3)',
                      }}
                    >
                      {it.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div style={{ padding: 14, borderTop: '1px solid rgba(var(--fg),0.05)' }}>
          <div
            style={{
              padding: 14,
              borderRadius: 12,
              background:
                'linear-gradient(140deg,rgba(var(--a1rgb),0.16),rgba(var(--a3rgb),0.08))',
              border: '1px solid rgba(var(--fg),0.08)',
            }}
          >
            <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--tx-0)', marginBottom: 4 }}>
              Storage
            </div>
            <div style={{ fontSize: 11, color: 'var(--tx-3)', marginBottom: 10 }}>
              6.4 GB of 10 GB used
            </div>
            <div
              style={{
                height: 6,
                borderRadius: 4,
                background: 'rgba(var(--fg),0.1)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '64%',
                  height: '100%',
                  background: 'linear-gradient(90deg,var(--a2),var(--a3))',
                }}
              />
            </div>
          </div>
        </div>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 45,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* ===== CONTENT ===== */}
      <div
        className="nx-content"
        style={{ flex: 1, marginLeft: 262, minWidth: 0, display: 'flex', flexDirection: 'column' }}
      >
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 40,
            background: 'rgba(var(--bg-rgb),0.8)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(var(--fg),0.06)',
            padding: '13px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <button
            onClick={() => setOpen((o) => !o)}
            className="nx-menubtn"
            aria-label="Menu"
            style={{
              display: 'none',
              background: 'rgba(var(--fg),0.06)',
              border: '1px solid rgba(var(--fg),0.1)',
              borderRadius: 9,
              width: 38,
              height: 38,
              color: 'var(--tx-1)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="menu" size={18} strokeWidth={2} />
          </button>

          <div
            className="nx-topsearch"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              ...card,
              borderRadius: 10,
              padding: '9px 14px',
              width: 320,
              maxWidth: '38vw',
            }}
          >
            <Icon name="search" size={17} strokeWidth={2} style={{ color: 'var(--tx-5)' }} />
            <input
              type="text"
              placeholder="Search anything..."
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--tx-1)',
                fontSize: 14,
                width: '100%',
              }}
            />
            <span
              style={{
                fontSize: 11,
                color: '#5c5c6e',
                border: '1px solid rgba(var(--fg),0.1)',
                borderRadius: 5,
                padding: '1px 6px',
              }}
            >
              ⌘K
            </span>
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              aria-label="Notifications"
              style={{
                position: 'relative',
                ...card,
                borderRadius: 10,
                width: 40,
                height: 40,
                color: 'var(--tx-2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="bell" size={18} />
              <span
                style={{
                  position: 'absolute',
                  top: 9,
                  right: 10,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--a3)',
                  boxShadow: '0 0 8px var(--a3)',
                }}
              />
            </button>
            <Link
              to="/"
              className="nx-hidesm"
              style={{
                textDecoration: 'none',
                ...card,
                borderRadius: 10,
                padding: '0 14px',
                height: 40,
                display: 'flex',
                alignItems: 'center',
                color: 'var(--tx-2)',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              ← Landing
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 6 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,var(--a2),var(--a3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk'",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#0a0a12',
                }}
              >
                AM
              </div>
              <div className="nx-hidesm" style={{ lineHeight: 1.2 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>Alex Morgan</div>
                <div style={{ fontSize: 11.5, color: 'var(--tx-4)' }}>Administrator</div>
              </div>
            </div>
          </div>
        </header>

        <main style={{ padding: '28px 24px 40px', flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
