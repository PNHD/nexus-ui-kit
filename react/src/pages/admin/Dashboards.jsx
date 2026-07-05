import Chart from '../../admin/Chart.jsx';
import {
  Panel, PageHead, StatCard, KpiCard, Avatar, Chip, Bar, Ic, btnP, btnG, cardStyle, heading, subheading,
} from '../../admin/ui.jsx';
import { kpis, ecomKpis, analyticsKpis, activity, topProducts, topPages } from '../../data/adminData.js';

const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 16 };

/* ============ OVERVIEW ============ */
export function Overview() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 14, marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>Welcome back, Alex 👋</h1>
          <p style={{ fontSize: 14, color: 'var(--tx-4)', marginTop: 5 }}>Here's what's happening across your workspace today.</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ ...btnG, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Ic d='<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>' size={15} /> Export
          </button>
          <button style={btnP}>+ New report</button>
        </div>
      </div>

      <div className="nx-kpigrid" style={kpiGrid}>
        {kpis.map((k) => <StatCard key={k.label} {...k} />)}
      </div>

      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 16 }}>
        <Panel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div>
              <div style={heading}>Revenue overview</div>
              <div style={subheading}>Monthly revenue vs last year</div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ fontSize: 12, color: 'var(--tx-2)', display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: 3, background: 'var(--a1)' }} />2026</span>
              <span style={{ fontSize: 12, color: 'var(--tx-2)', display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: 3, background: 'var(--a3)' }} />2025</span>
            </div>
          </div>
          <Chart build={(c) => ({
            type: 'area', height: 290,
            options: {
              colors: [c.a1, c.a3],
              stroke: { curve: 'smooth', width: 2.5 },
              fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.02, stops: [0, 90] } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
            },
            series: [
              { name: '2026', data: [31, 40, 38, 52, 49, 66, 61, 74, 70, 86, 82, 95] },
              { name: '2025', data: [21, 28, 26, 34, 31, 42, 39, 48, 45, 54, 51, 60] },
            ],
          })} />
        </Panel>
        <Panel>
          <div style={heading}>Traffic sources</div>
          <div style={subheading}>Where visitors come from</div>
          <Chart build={(c) => ({
            type: 'donut', height: 300,
            options: {
              colors: [c.a1, c.a3, c.a2, '#3f3f5a'],
              labels: ['Organic', 'Direct', 'Referral', 'Social'],
              stroke: { width: 0 },
              plotOptions: { pie: { donut: { size: '70%' } } },
              legend: { position: 'bottom', labels: { colors: c.tx } },
            },
            series: [42, 28, 18, 12],
          })} />
        </Panel>
      </div>

      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16 }}>
        <Panel>
          <div style={heading}>Weekly sales</div>
          <div style={subheading}>Units sold per day</div>
          <Chart build={(c) => ({
            type: 'bar', height: 250,
            options: {
              colors: [c.a3],
              plotOptions: { bar: { borderRadius: 6, columnWidth: '45%' } },
              xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            },
            series: [{ name: 'Units', data: [44, 55, 41, 67, 52, 70, 58] }],
          })} />
        </Panel>
        <Panel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={heading}>Recent activity</div>
            <span style={{ fontSize: 12.5, color: 'var(--a2)' }}>View all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {activity.map((a, i) => (
              <div key={i} className="nx-row" style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '11px 8px', borderRadius: 10 }}>
                <Avatar g={a.color} size={36}>{a.initials}</Avatar>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, color: 'var(--tx-1)' }}>{a.text}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--tx-5)', marginTop: 2 }}>{a.time}</div>
                </div>
                <Chip bg={a.tagBg} color={a.tagColor}>{a.tag}</Chip>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

/* ============ ECOMMERCE ============ */
export function Ecommerce() {
  return (
    <>
      <PageHead crumb="Dashboards / eCommerce" title="eCommerce overview" />
      <div className="nx-kpigrid" style={kpiGrid}>
        {ecomKpis.map((k) => <StatCard key={k.label} {...k} />)}
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16, marginBottom: 16 }}>
        <Panel>
          <div style={heading}>Earnings</div>
          <div style={subheading}>Net earnings this year</div>
          <Chart build={(c) => ({
            type: 'area', height: 290,
            options: {
              colors: [c.a3],
              stroke: { curve: 'smooth', width: 2.5 },
              fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.02, stops: [0, 90] } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
              yaxis: { labels: { formatter: (v) => '$' + v + 'k' } },
            },
            series: [{ name: 'Earnings', data: [12, 18, 15, 25, 22, 30, 28, 38, 35, 44, 40, 52] }],
          })} />
        </Panel>
        <Panel>
          <div style={heading}>Sales by category</div>
          <div style={subheading}>Share of total sales</div>
          <Chart build={(c) => ({
            type: 'donut', height: 300,
            options: {
              colors: [c.a1, c.a3, c.a2, '#febc2e', '#3f3f5a'],
              labels: ['Electronics', 'Fashion', 'Home', 'Beauty', 'Other'],
              stroke: { width: 0 },
              plotOptions: { pie: { donut: { size: '68%' } } },
              legend: { position: 'bottom', labels: { colors: c.tx } },
            },
            series: [35, 25, 20, 12, 8],
          })} />
        </Panel>
      </div>
      <Panel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={heading}>Top selling products</div>
          <span style={{ fontSize: 12.5, color: 'var(--a2)' }}>View all</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                {['Product', 'Price', 'Sold', 'Revenue'].map((h) => (
                  <th key={h} style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--tx-5)', padding: '0 12px 12px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p) => (
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
      </Panel>
    </>
  );
}

/* ============ ANALYTICS ============ */
export function Analytics() {
  return (
    <>
      <PageHead crumb="Dashboards / Analytics" title="Analytics" />
      <div className="nx-kpigrid" style={kpiGrid}>
        {analyticsKpis.map((k) => <StatCard key={k.label} {...k} />)}
      </div>
      <Panel style={{ marginBottom: 16 }}>
        <div style={heading}>Sessions over time</div>
        <div style={subheading}>Sessions & page views, last 30 days</div>
        <Chart build={(c) => ({
          type: 'line', height: 300,
          options: {
            colors: [c.a1, c.a3],
            stroke: { curve: 'smooth', width: 2.5 },
            xaxis: { categories: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'] },
          },
          series: [
            { name: 'Sessions', data: [320, 410, 380, 520, 490, 610, 580, 700, 660, 780, 720, 850, 810, 900] },
            { name: 'Page views', data: [520, 610, 580, 720, 690, 810, 780, 900, 860, 980, 920, 1050, 1010, 1120] },
          ],
        })} />
      </Panel>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Panel>
          <div style={heading}>Devices</div>
          <div style={subheading}>Sessions by device type</div>
          <Chart build={(c) => ({
            type: 'donut', height: 300,
            options: {
              colors: [c.a1, c.a3, c.a2],
              labels: ['Desktop', 'Mobile', 'Tablet'],
              stroke: { width: 0 },
              plotOptions: { pie: { donut: { size: '70%' } } },
              legend: { position: 'bottom', labels: { colors: c.tx } },
            },
            series: [58, 32, 10],
          })} />
        </Panel>
        <Panel>
          <div style={{ ...heading, marginBottom: 16 }}>Top pages</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {topPages.map((tp) => (
              <div key={tp.path}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: 'var(--tx-2)' }}>{tp.path}</span>
                  <span style={{ color: 'var(--tx-4)' }}>{tp.views}</span>
                </div>
                <Bar pct={parseInt(tp.pct, 10)} />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
