import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

const BRAND = 'Nexus';
const LOGOS = ['Vercel', 'Linear', 'Ramp', 'Retool', 'Loom', 'Brex', 'Descript', 'Cron', 'Arc', 'Raycast'];

const NAV = ['Home', 'Features', 'Pricing', 'About', 'Blog', 'Contact'];

const BENTO = [
  {
    span: 3,
    icon: 'star',
    iconColor: '#e6e1ff',
    title: 'Agentic automation',
    body: 'Deploy AI agents that plan and execute multi-step tasks across every tool you use — from research to reporting — with zero scripts.',
    tags: ['Auto-triage', 'Multi-step', 'Self-correcting'],
    bg: 'linear-gradient(160deg,rgba(var(--a1rgb),0.14),rgba(var(--a3rgb),0.06))',
  },
  {
    span: 3,
    icon: 'bolt',
    iconColor: '#a5edf7',
    title: '100+ instant integrations',
    body: 'Connect Slack, Notion, Google, GitHub and hundreds more in a click. Data flows both ways in real time, keeping every tool in perfect sync.',
    bg: 'linear-gradient(160deg,rgba(var(--a3rgb),0.1),rgba(var(--a1rgb),0.06))',
  },
  { span: 2, icon: 'search', iconColor: '#a5edf7', title: 'Unified search', body: 'One question, answers from every doc, message and dataset you own.' },
  { span: 2, icon: 'chart', iconColor: '#c9beff', title: 'Live insights', body: 'Dashboards that update themselves and flag what needs you.' },
  { span: 2, icon: 'shield', iconColor: '#a5edf7', title: 'Enterprise security', body: 'SOC 2, encryption, SSO and granular access — built in.' },
];

const PLANS = [
  { name: 'Starter', price: '$0', period: '/mo', desc: 'For individuals getting started.', features: ['1 workspace', '500 AI credits', 'Basic integrations', 'Community support'], cta: 'Start free', highlight: false },
  { name: 'Business', price: '$29', period: '/user/mo', desc: 'For growing teams that move fast.', features: ['Unlimited workspaces', '10,000 AI credits', '100+ integrations', 'Priority support', 'Advanced analytics'], cta: 'Start free trial', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For organizations at scale.', features: ['Unlimited everything', 'SSO & SCIM', 'Dedicated CSM', 'SOC 2 & DPA', '99.9% SLA'], cta: 'Contact sales', highlight: false },
];

const pill = {
  fontSize: 12,
  padding: '5px 11px',
  borderRadius: 8,
  background: 'rgba(var(--fg),0.06)',
  border: '1px solid rgba(var(--fg),0.1)',
  color: 'var(--tx-2)',
};

export default function Landing() {
  const [menu, setMenu] = useState(false);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      {/* backdrop */}
      <div
        style={{
          position: 'fixed',
          top: -280,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1000,
          height: 900,
          background: 'radial-gradient(circle,rgba(var(--a1rgb),0.28),transparent 62%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'nx-float 12s ease-in-out infinite',
        }}
      />

      {/* ===== HEADER ===== */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          backdropFilter: 'blur(18px)',
          background: 'rgba(var(--bg-rgb),0.7)',
          borderBottom: '1px solid rgba(var(--fg),0.07)',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '15px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--tx-0)' }}>
            <span
              style={{
                width: 33,
                height: 33,
                borderRadius: 9,
                background: 'linear-gradient(135deg,var(--a1),var(--a3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontFamily: "'Space Grotesk'",
                color: '#0a0a12',
                boxShadow: '0 6px 20px rgba(var(--a1rgb),0.45)',
              }}
            >
              N
            </span>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 19, letterSpacing: '-0.02em' }}>{BRAND}</span>
          </a>
          <nav className="nx-desknav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {NAV.map((n) => (
              <a key={n} href="#" className="nx-link" style={{ color: 'var(--tx-3)', textDecoration: 'none', fontSize: 14.5, fontWeight: 500 }}>
                {n}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <Link to="/app" className="nx-link nx-desknav" style={{ color: 'var(--tx-2)', textDecoration: 'none', fontSize: 14.5, fontWeight: 500 }}>
              Sign in
            </Link>
            <Link
              to="/app"
              style={{
                textDecoration: 'none',
                fontSize: 14.5,
                fontWeight: 600,
                color: '#0a0a12',
                background: 'linear-gradient(135deg,var(--a2),var(--a3))',
                padding: '10px 20px',
                borderRadius: 10,
                boxShadow: '0 6px 22px rgba(var(--a1rgb),0.4)',
              }}
            >
              Get started
            </Link>
            <button
              onClick={() => setMenu((m) => !m)}
              aria-label="Menu"
              className="nx-mobtog"
              style={{
                display: 'none',
                background: 'rgba(var(--fg),0.06)',
                border: '1px solid rgba(var(--fg),0.12)',
                borderRadius: 9,
                width: 40,
                height: 40,
                color: 'var(--tx-0)',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="menu" size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
        {menu && (
          <div style={{ padding: '8px 24px 20px', display: 'flex', flexDirection: 'column', gap: 2, borderTop: '1px solid rgba(var(--fg),0.06)' }}>
            {NAV.map((n) => (
              <a key={n} href="#" style={{ color: 'var(--tx-2)', textDecoration: 'none', fontSize: 15, padding: '11px 0' }}>
                {n}
              </a>
            ))}
          </div>
        )}
      </header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* ===== HERO ===== */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '92px 24px 36px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              padding: '7px 15px',
              borderRadius: 100,
              border: '1px solid rgba(var(--fg),0.12)',
              background: 'rgba(var(--fg),0.04)',
              fontSize: 13,
              color: 'var(--tx-2)',
              marginBottom: 30,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--a3)', boxShadow: '0 0 10px var(--a3)', animation: 'nx-pulse 2s infinite' }} />
            New — {BRAND} 3.0 with agentic workflows
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 'clamp(42px,6.4vw,80px)', lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: 26 }}>
            The AI workspace that
            <br />
            <span style={{ background: 'linear-gradient(120deg,var(--a2) 10%,var(--a3) 90%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              thinks alongside your team
            </span>
          </h1>
          <p style={{ maxWidth: 600, margin: '0 auto 38px', fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65, color: 'var(--tx-3)' }}>
            Automate the busywork, surface the insights, and ship faster. {BRAND} unifies your docs, data, and chat into one intelligent, secure workspace.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
            <Link
              to="/app"
              style={{
                textDecoration: 'none',
                fontSize: 15.5,
                fontWeight: 600,
                color: '#0a0a12',
                background: 'linear-gradient(135deg,var(--a2),var(--a3))',
                padding: '15px 30px',
                borderRadius: 12,
                boxShadow: '0 10px 32px rgba(var(--a1rgb),0.45)',
              }}
            >
              Start free trial
            </Link>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                textDecoration: 'none',
                fontSize: 15.5,
                fontWeight: 600,
                color: 'var(--tx-0)',
                background: 'rgba(var(--fg),0.05)',
                border: '1px solid rgba(var(--fg),0.14)',
                padding: '15px 28px',
                borderRadius: 12,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
              }}
            >
              <Icon name="play" size={17} fill="currentColor" strokeWidth={0} /> Watch demo
            </a>
          </div>
          <p style={{ fontSize: 13, color: 'var(--tx-5)' }}>No credit card required · 14-day free trial · Cancel anytime</p>
        </section>

        {/* ===== LOGO MARQUEE ===== */}
        <section style={{ padding: '44px 0 40px' }}>
          <p style={{ textAlign: 'center', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tx-5)', marginBottom: 26 }}>
            Trusted by fast-moving teams worldwide
          </p>
          <div style={{ overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
            <div style={{ display: 'flex', gap: 64, width: 'max-content', animation: 'nx-marquee 26s linear infinite' }}>
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 22, color: 'var(--tx-5)', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENTO FEATURES ===== */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: '70px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--a2)' }}>Platform</span>
            <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 'clamp(30px,4.4vw,46px)', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '14px 0 16px' }}>
              One intelligent core. Endless leverage.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--tx-3)' }}>
              Every capability in {BRAND} is powered by the same context-aware engine — so your tools finally work together.
            </p>
          </div>
          <div className="nx-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {BENTO.map((b, i) => (
              <div
                key={i}
                className="nx-card"
                style={{
                  gridColumn: `span ${b.span}`,
                  padding: b.span >= 3 ? 32 : 28,
                  borderRadius: 18,
                  background: b.bg || 'rgba(var(--fg),0.025)',
                  border: '1px solid rgba(var(--fg),0.09)',
                }}
              >
                <div
                  style={{
                    width: b.span >= 3 ? 46 : 44,
                    height: b.span >= 3 ? 46 : 44,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg,rgba(var(--a1rgb),0.3),rgba(var(--a3rgb),0.18))',
                    border: '1px solid rgba(var(--fg),0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: b.iconColor,
                    marginBottom: b.span >= 3 ? 18 : 16,
                  }}
                >
                  <Icon name={b.icon} size={b.span >= 3 ? 22 : 21} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk'", fontSize: b.span >= 3 ? 22 : 18, fontWeight: 600, marginBottom: b.span >= 3 ? 10 : 9, letterSpacing: '-0.01em' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: b.span >= 3 ? 15 : 14, lineHeight: 1.62, color: b.span >= 3 ? 'var(--tx-2)' : 'var(--tx-3)', maxWidth: 440 }}>{b.body}</p>
                {b.tags && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 22, flexWrap: 'wrap' }}>
                    {b.tags.map((t) => (
                      <span key={t} style={pill}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section style={{ maxWidth: 1140, margin: '0 auto', padding: '60px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 46px' }}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--a3)' }}>Pricing</span>
            <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 'clamp(30px,4.4vw,46px)', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '14px 0 0' }}>
              Simple pricing that scales
            </h2>
          </div>
          <div className="nx-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'start' }}>
            {PLANS.map((p) => (
              <div
                key={p.name}
                className="nx-card"
                style={{
                  padding: 30,
                  borderRadius: 20,
                  background: p.highlight ? 'linear-gradient(160deg,rgba(var(--a1rgb),0.16),rgba(var(--a3rgb),0.07))' : 'rgba(var(--fg),0.025)',
                  border: `1px solid ${p.highlight ? 'rgba(var(--a1rgb),0.5)' : 'rgba(var(--fg),0.09)'}`,
                  boxShadow: p.highlight ? '0 24px 60px rgba(var(--a1rgb),0.25)' : 'none',
                  position: 'relative',
                }}
              >
                {p.highlight && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 18,
                      right: 18,
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#0a0a12',
                      background: 'linear-gradient(135deg,var(--a2),var(--a3))',
                      padding: '4px 11px',
                      borderRadius: 100,
                    }}
                  >
                    Popular
                  </span>
                )}
                <div style={{ fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 13.5, color: 'var(--tx-4)', marginBottom: 18, lineHeight: 1.5 }}>{p.desc}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 22 }}>
                  <span style={{ fontFamily: "'Space Grotesk'", fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.price}</span>
                  <span style={{ fontSize: 14, color: 'var(--tx-4)' }}>{p.period}</span>
                </div>
                <Link
                  to="/app"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: 14.5,
                    fontWeight: 600,
                    padding: '12px 0',
                    borderRadius: 11,
                    marginBottom: 22,
                    color: p.highlight ? '#0a0a12' : 'var(--tx-0)',
                    background: p.highlight ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.06)',
                    border: p.highlight ? 'none' : '1px solid rgba(var(--fg),0.14)',
                  }}
                >
                  {p.cta}
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--tx-2)' }}>
                      <Icon name="check" size={17} strokeWidth={2.5} style={{ color: 'var(--a3)', flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ maxWidth: 1140, margin: '30px auto 80px', padding: '0 24px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, border: '1px solid rgba(var(--fg),0.1)', background: 'linear-gradient(150deg,rgba(var(--a1rgb),0.18),rgba(var(--a3rgb),0.08))', padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 560, height: 400, background: 'radial-gradient(circle,rgba(var(--a1rgb),0.3),transparent 65%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 'clamp(28px,4.4vw,48px)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 16 }}>
                Put your busywork on autopilot
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--tx-2)', maxWidth: 500, margin: '0 auto 30px' }}>
                Join 40,000+ teams shipping faster with {BRAND}. Free for 14 days, no card required.
              </p>
              <Link
                to="/app"
                style={{
                  textDecoration: 'none',
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: '#0a0a12',
                  background: 'linear-gradient(135deg,var(--a2),var(--a3))',
                  padding: '15px 34px',
                  borderRadius: 12,
                  boxShadow: '0 12px 34px rgba(var(--a1rgb),0.45)',
                }}
              >
                Get started free
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid rgba(var(--fg),0.08)', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: 'linear-gradient(135deg,var(--a1),var(--a3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontFamily: "'Space Grotesk'",
              fontSize: 15,
              color: '#0a0a12',
            }}
          >
            N
          </span>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 16 }}>{BRAND}</span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--tx-5)' }}>Nexus UI Kit · React edition · v1.0.0</p>
      </footer>
    </div>
  );
}
