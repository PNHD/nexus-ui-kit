import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Icon from '../components/Icon.jsx';
import { useTheme, cssVar } from '../theme/ThemeProvider.jsx';
import { kpis, activity, products } from '../data/dashboard.js';

const panel = {
  padding: 22,
  borderRadius: 16,
  background: 'rgba(var(--fg),0.025)',
  border: '1px solid rgba(var(--fg),0.07)',
};
const heading = { fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600 };
const sub = { fontSize: 12.5, color: 'var(--tx-4)', marginTop: 3 };

const toneMap = {
  good: { bg: 'rgba(var(--a3rgb),0.16)', color: 'var(--a3)' },
  info: { bg: 'rgba(var(--a1rgb),0.16)', color: 'var(--a2)' },
  neutral: { bg: 'rgba(var(--fg),0.08)', color: 'var(--tx-3)' },
};

export default function Dashboard() {
  const { theme, accent } = useTheme();
  // Re-read CSS vars whenever theme/accent changes so charts follow the palette.
  const [c, setC] = useState({ a1: '#7c5cff', a3: '#22d3ee', grid: 'rgba(255,255,255,0.06)', tx: '#8b8b9c' });

  useEffect(() => {
    setC({
      a1: cssVar('--a1') || '#7c5cff',
      a3: cssVar('--a3') || '#22d3ee',
      grid: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(20,24,38,0.08)',
      tx: cssVar('--tx-5') || '#8b8b9c',
    });
  }, [theme, accent]);

  const baseChart = {
    chart: { toolbar: { show: false }, zoom: { enabled: false }, fontFamily: 'Sora, sans-serif', foreColor: c.tx },
    grid: { borderColor: c.grid, strokeDashArray: 4 },
    dataLabels: { enabled: false },
    tooltip: { theme },
    legend: { show: false },
  };

  const revenue = {
    options: {
      ...baseChart,
      colors: [c.a1, c.a3],
      stroke: { curve: 'smooth', width: 3 },
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.02, stops: [0, 90] },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { labels: { formatter: (v) => `$${Math.round(v)}K` } },
    },
    series: [
      { name: '2026', data: [31, 40, 38, 51, 49, 62, 69, 74, 82] },
      { name: '2025', data: [21, 28, 25, 33, 34, 40, 44, 47, 52] },
    ],
  };

  const traffic = {
    options: {
      ...baseChart,
      labels: ['Organic', 'Direct', 'Referral', 'Social'],
      colors: [c.a1, c.a3, '#a48bff', '#fb923c'],
      stroke: { width: 0 },
      plotOptions: { pie: { donut: { size: '68%' } } },
      legend: { show: true, position: 'bottom', labels: { colors: c.tx } },
    },
    series: [44, 27, 18, 11],
  };

  const sales = {
    options: {
      ...baseChart,
      colors: [c.a1],
      plotOptions: { bar: { borderRadius: 6, columnWidth: '55%' } },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
    },
    series: [{ name: 'Units', data: [42, 58, 45, 71, 63, 88, 79] }],
  };

  return (
    <>
      {/* header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 14,
          marginBottom: 24,
        }}
      >
        <div>
          <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>
            Welcome back, Alex 👋
          </h1>
          <p style={{ fontSize: 14, color: 'var(--tx-4)', marginTop: 5 }}>
            Here's what's happening across your workspace today.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            style={{
              background: 'rgba(var(--fg),0.04)',
              border: '1px solid rgba(var(--fg),0.1)',
              color: 'var(--tx-2)',
              fontSize: 13.5,
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: 10,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Icon name="file" size={15} /> Export
          </button>
          <button
            style={{
              background: 'linear-gradient(135deg,var(--a2),var(--a3))',
              border: 'none',
              color: '#0a0a12',
              fontSize: 13.5,
              fontWeight: 600,
              padding: '10px 18px',
              borderRadius: 10,
              cursor: 'pointer',
            }}
          >
            + New report
          </button>
        </div>
      </div>

      {/* KPI grid */}
      <div
        className="nx-kpigrid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 16 }}
      >
        {kpis.map((k) => (
          <div key={k.label} className="nx-card" style={panel}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: 'rgba(var(--a1rgb),0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--a2)',
                }}
              >
                <Icon name={k.icon} size={20} />
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: k.up ? 'var(--a3)' : '#f97066',
                  background: k.up ? 'rgba(var(--a3rgb),0.14)' : 'rgba(249,112,102,0.14)',
                  padding: '3px 9px',
                  borderRadius: 100,
                }}
              >
                {k.delta}
              </span>
            </div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 27, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {k.value}
            </div>
            <div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 4 }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* charts row */}
      <div
        className="nx-2col"
        style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 16 }}
      >
        <div style={panel}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div>
              <div style={heading}>Revenue overview</div>
              <div style={sub}>Monthly revenue vs last year</div>
            </div>
          </div>
          <Chart options={revenue.options} series={revenue.series} type="area" height={290} />
        </div>
        <div style={panel}>
          <div style={heading}>Traffic sources</div>
          <div style={sub}>Where visitors come from</div>
          <Chart options={traffic.options} series={traffic.series} type="donut" height={280} />
        </div>
      </div>

      {/* sales + activity */}
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16, marginBottom: 16 }}>
        <div style={panel}>
          <div style={heading}>Weekly sales</div>
          <div style={sub}>Units sold per day</div>
          <Chart options={sales.options} series={sales.series} type="bar" height={250} />
        </div>
        <div style={panel}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={heading}>Recent activity</div>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 12.5, color: 'var(--a2)', textDecoration: 'none' }}>
              View all
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {activity.map((a, i) => {
              const t = toneMap[a.tone] || toneMap.neutral;
              return (
                <div key={i} className="nx-row" style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '11px 8px', borderRadius: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: a.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Space Grotesk'",
                      fontWeight: 700,
                      fontSize: 12,
                      color: '#0a0a12',
                      flexShrink: 0,
                    }}
                  >
                    {a.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, color: 'var(--tx-1)' }}>{a.text}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--tx-5)', marginTop: 2 }}>{a.time}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 100, background: t.bg, color: t.color }}>
                    {a.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* products table */}
      <div style={panel}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={heading}>Top selling products</div>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 12.5, color: 'var(--a2)', textDecoration: 'none' }}>
            View all
          </a>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                {['Product', 'Price', 'Sold', 'Revenue'].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--tx-5)',
                      padding: '0 12px 12px',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 36, height: 36, borderRadius: 9, background: p.color }} />
                      <span style={{ fontSize: 13.5, fontWeight: 500 }}>{p.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '13px 12px', fontSize: 13.5, color: 'var(--tx-2)' }}>{p.price}</td>
                  <td style={{ padding: '13px 12px', fontSize: 13.5, color: 'var(--tx-2)' }}>{p.sold}</td>
                  <td style={{ padding: '13px 12px', fontSize: 13.5, fontWeight: 600, color: 'var(--a3)' }}>{p.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
