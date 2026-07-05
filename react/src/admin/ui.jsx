/**
 * Shared admin primitives — the React equivalents of the HTML edition's
 * _card / _av / _chip / _bar / _kpiCard / _pageHead / _grad / _btnP / _btnG
 * helpers. Kept as small components so every admin page reads the same way.
 */

// Gradient ramp used across avatars, tiles and product art (mirrors _grad).
export const GRADS = [
  'linear-gradient(135deg,var(--a1),var(--a3))',
  'linear-gradient(135deg,#f472b6,#a855f7)',
  'linear-gradient(135deg,#34d399,#22d3ee)',
  'linear-gradient(135deg,#fbbf24,#f97316)',
  'linear-gradient(135deg,#60a5fa,#818cf8)',
  'linear-gradient(135deg,#f87171,#fb923c)',
];
export const grad = (i) => GRADS[((i % 6) + 6) % 6];

export const cardStyle = {
  background: 'rgba(var(--fg),0.025)',
  border: '1px solid rgba(var(--fg),0.07)',
  borderRadius: 16,
};

export const btnP = {
  padding: '11px 18px',
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  fontSize: 13.5,
  fontWeight: 600,
  color: '#0a0a12',
  background: 'linear-gradient(135deg,var(--a2),var(--a3))',
};

export const btnG = {
  padding: '10px 16px',
  borderRadius: 10,
  cursor: 'pointer',
  fontSize: 13.5,
  fontWeight: 500,
  color: 'var(--tx-2)',
  background: 'rgba(var(--fg),0.05)',
  border: '1px solid rgba(var(--fg),0.12)',
};

/** Raw inline-SVG icon (mirrors the HTML edition's ic()). `d` is raw path markup. */
export function Ic({ d, size = 19, sw = 1.8, style, fill = 'none' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

export function Panel({ children, style, className, ...rest }) {
  return (
    <div style={{ padding: 22, ...cardStyle, ...style }} className={className} {...rest}>
      {children}
    </div>
  );
}

export function PageHead({ crumb, title, right }) {
  return (
    <>
      {crumb && (
        <div style={{ fontSize: 12.5, color: 'var(--tx-5)', marginBottom: 6 }}>{crumb}</div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 14,
          marginBottom: 22,
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
        {right}
      </div>
    </>
  );
}

export function Avatar({ children, g, size = 34 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: g,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Space Grotesk'",
        fontWeight: 700,
        fontSize: size / 2.7,
        color: '#0a0a12',
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

export function Chip({ children, bg, color }) {
  return (
    <span
      style={{
        fontSize: 11.5,
        fontWeight: 600,
        padding: '4px 11px',
        borderRadius: 100,
        background: bg,
        color,
      }}
    >
      {children}
    </span>
  );
}

export function Bar({ pct, col }) {
  return (
    <div
      style={{
        height: 7,
        borderRadius: 100,
        background: 'rgba(var(--fg),0.09)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          background: col || 'linear-gradient(135deg,var(--a2),var(--a3))',
          borderRadius: 100,
        }}
      />
    </div>
  );
}

/** Compact KPI card (label-first) — mirrors _kpiCard. */
export function KpiCard({ value, label, delta, up = true }) {
  return (
    <div style={{ ...cardStyle, padding: '20px 22px' }}>
      <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginBottom: 8 }}>{label}</div>
      <div
        style={{
          fontFamily: "'Space Grotesk'",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 12, color: up ? 'var(--a3)' : '#ff7a90', marginTop: 6 }}>{delta}</div>
    </div>
  );
}

/** Big icon KPI card used on the dashboards (icon + delta pill). */
export function StatCard({ icon, iconBg, iconColor, value, label, delta, deltaColor, deltaBg }) {
  return (
    <div className="nx-card" style={{ padding: 22, ...cardStyle }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 16,
        }}
      >
        <span
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            background: iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor,
          }}
        >
          <Ic d={icon} size={20} />
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: deltaColor,
            background: deltaBg,
            padding: '3px 9px',
            borderRadius: 100,
          }}
        >
          {delta}
        </span>
      </div>
      <div
        style={{
          fontFamily: "'Space Grotesk'",
          fontSize: 27,
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 4 }}>{label}</div>
    </div>
  );
}

export const heading = { fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600 };
export const subheading = { fontSize: 12.5, color: 'var(--tx-4)', marginTop: 3 };

/** Section heading inside a panel. */
export function Th({ children, align = 'left' }) {
  return (
    <th
      style={{
        fontSize: 11.5,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--tx-4)',
        padding: '14px 16px',
        textAlign: align,
      }}
    >
      {children}
    </th>
  );
}

export const dotsIcon =
  '<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>';
