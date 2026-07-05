import {
  PageHead, Avatar, KpiCard, Bar, Ic, btnP, btnG, cardStyle, grad,
} from '../../admin/ui.jsx';

const card = cardStyle;

/* ============ LMS ============ */
export function Lms() {
  const cont = [['Advanced React Patterns', 'Frontend', 68, 'Lesson 14 / 22', 0], ['Design Systems 101', 'Design', 42, 'Lesson 9 / 20', 1], ['SQL for Analysts', 'Data', 90, 'Lesson 18 / 20', 2]];
  const catalog = [['Machine Learning Foundations', 'Data', '24h', '4.9', 3], ['TypeScript Deep Dive', 'Frontend', '12h', '4.8', 4], ['Product Strategy', 'Business', '8h', '4.7', 5], ['Motion Design', 'Design', '16h', '4.9', 0], ['Growth Marketing', 'Business', '10h', '4.6', 1], ['Cloud Architecture', 'Data', '20h', '4.9', 2]];
  return (
    <>
      <PageHead crumb="Apps / Learning" title="My learning" right={<button style={btnP}>Browse catalog</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        <KpiCard value="6" label="Courses enrolled" delta="3 in progress" /><KpiCard value="84h" label="Hours learned" delta="▲ 6h this week" /><KpiCard value="3" label="Certificates" delta="1 pending" /><KpiCard value="12" label="Day streak 🔥" delta="Keep it up!" />
      </div>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600, marginBottom: 14 }}>Continue learning</div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 28 }}>
        {cont.map((c) => (
          <div key={c[0]} className="nx-card" style={{ ...card, padding: 20 }}>
            <div style={{ height: 80, borderRadius: 11, background: grad(c[4]), marginBottom: 14 }} />
            <div style={{ fontSize: 11, color: 'var(--a3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{c[1]}</div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{c[0]}</div>
            <Bar pct={c[2]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 9, fontSize: 12, color: 'var(--tx-4)' }}><span>{c[3]}</span><span style={{ color: 'var(--tx-2)', fontWeight: 600 }}>{c[2]}%</span></div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600, marginBottom: 14 }}>Recommended for you</div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {catalog.map((c) => (
          <div key={c[0]} className="nx-card" style={{ ...card, overflow: 'hidden' }}>
            <div style={{ height: 120, background: grad(c[4]) }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 11, color: 'var(--a3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{c[1]}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{c[0]}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12.5, color: 'var(--tx-4)' }}><span>{c[2]} · ★ {c[3]}</span><button style={{ ...btnP, padding: '7px 13px', fontSize: 12 }}>Enroll</button></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ COURSE DETAIL ============ */
export function CourseDetail() {
  const Lesson = ({ done, name, dur, cur }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '12px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, ...(done ? { background: 'linear-gradient(135deg,var(--a2),var(--a3))', color: '#0a0a12' } : cur ? { background: 'rgba(var(--a1rgb),0.18)', color: 'var(--a2)', border: '1px solid rgba(var(--a1rgb),0.5)' } : { background: 'rgba(var(--fg),0.05)', color: 'var(--tx-5)' }) }}>{done ? '✓' : cur ? '▶' : <Ic d='<circle cx="12" cy="12" r="9"/>' size={13} />}</span>
      <span style={{ flex: 1, fontSize: 13.5, ...(done ? { color: 'var(--tx-4)' } : cur ? { color: 'var(--tx-0)', fontWeight: 600 } : { color: 'var(--tx-3)' }) }}>{name}</span>
      <span style={{ fontSize: 12, color: 'var(--tx-5)' }}>{dur}</span>
    </div>
  );
  const Module = ({ t, children }) => (
    <div style={{ ...card, padding: '20px 22px', marginBottom: 14 }}>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{t}</div>{children}
    </div>
  );
  return (
    <>
      <PageHead crumb="Apps / Learning / Advanced React Patterns" title="Advanced React Patterns" right={<button style={btnP}>Resume · Lesson 14</button>} />
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, background: grad(0), padding: 40, marginBottom: 22 }}>
        <div style={{ maxWidth: 520, color: '#fff' }}>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,0,0,0.25)', marginBottom: 14 }}>Frontend · Intermediate</span>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontSize: 28, fontWeight: 700, lineHeight: 1.15, marginBottom: 10 }}>Master composition, hooks & performance</h2>
          <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.9 }}>22 lessons · 6.5 hours · Certificate on completion</p>
        </div>
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 20 }}>
        <div>
          <div style={{ ...card, padding: '20px 22px', marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--tx-4)', marginBottom: 8 }}><span>Course progress</span><span style={{ color: 'var(--tx-2)', fontWeight: 600 }}>68%</span></div>
            <Bar pct={68} />
          </div>
          <Module t="Module 1 · Foundations"><Lesson done name="Component composition" dur="12:04" /><Lesson done name="Props & children patterns" dur="09:30" /><Lesson done name="Render props vs hooks" dur="14:18" /></Module>
          <Module t="Module 2 · Advanced hooks"><Lesson done name="useReducer in depth" dur="18:22" /><Lesson cur name="Custom hooks & reuse" dur="15:40" /><Lesson name="useMemo & useCallback" dur="11:05" /></Module>
          <Module t="Module 3 · Performance"><Lesson name="Profiling renders" dur="13:12" /><Lesson name="Virtualizing long lists" dur="16:48" /><Lesson name="Concurrent features" dur="20:30" /></Module>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Instructor</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Avatar g="linear-gradient(135deg,var(--a2),var(--a3))" size={44}>RP</Avatar><div><div style={{ fontSize: 14, fontWeight: 600 }}>Rosa Perez</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>Staff Engineer · 12 courses</div></div></div>
          </div>
          <div style={{ ...card, padding: '22px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, textAlign: 'center' }}>
            {['4.9|Rating', '8.2k|Students', '22|Lessons', '6.5h|Duration'].map((s) => { const p = s.split('|'); return <div key={s}><div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 700 }}>{p[0]}</div><div style={{ fontSize: 12, color: 'var(--tx-4)', marginTop: 3 }}>{p[1]}</div></div>; })}
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ FINANCE ============ */
export function Finance() {
  const bars = [40, 62, 48, 78, 55, 90, 70, 84, 60, 96, 72, 88];
  const Txn = ({ name, cat, amt, neg, init, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <Avatar g={grad(i)} size={38}>{init}</Avatar>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{name}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{cat}</div></div>
      <span style={{ fontFamily: "'Space Grotesk'", fontSize: 14, fontWeight: 700, color: neg ? 'var(--tx-1)' : 'var(--a3)' }}>{neg ? '-' : '+'}{amt}</span>
    </div>
  );
  const Cat = ({ n, pct, amt, i }) => (
    <div style={{ marginBottom: 15 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}><span style={{ color: 'var(--tx-2)' }}>{n}</span><span style={{ color: 'var(--tx-4)' }}>{amt}</span></div>
      <Bar pct={pct} col={grad(i)} />
    </div>
  );
  return (
    <>
      <PageHead crumb="Apps / Finance" title="Finance" right={<button style={btnP}>+ Transfer</button>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 18, background: 'linear-gradient(135deg,var(--a1),var(--a3))', padding: '28px 30px', color: '#0a0a12' }}>
          <div style={{ position: 'absolute', top: -60, right: -30, width: 220, height: 220, background: 'radial-gradient(circle,rgba(255,255,255,0.25),transparent 65%)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 8 }}>Total balance</div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 18 }}>$48,290.40</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div><div style={{ fontSize: 12, opacity: 0.7 }}>•••• 4242</div><div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>Alex Morgan</div></div>
              <span style={{ fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,0,0,0.18)' }}>▲ 8.4% this month</span>
            </div>
          </div>
        </div>
        <div style={{ ...card, padding: 24 }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Cash flow</div>
          <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginBottom: 16 }}>Last 12 months</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 140 }}>
            {bars.map((v, i) => <div key={i} style={{ flex: 1, height: `${v}%`, borderRadius: '6px 6px 0 0', background: i === bars.length - 3 ? 'linear-gradient(180deg,var(--a2),var(--a3))' : 'rgba(var(--a1rgb),0.25)' }} />)}
          </div>
        </div>
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20 }}>
        <div style={{ ...card, padding: '22px 24px' }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Recent transactions</div>
          <Txn name="Figma" cat="Software · Subscription" amt="$45.00" neg init="FG" i={0} /><Txn name="Stripe payout" cat="Income · Revenue" amt="$3,204.00" init="ST" i={2} /><Txn name="AWS" cat="Infrastructure" amt="$862.40" neg init="AW" i={4} /><Txn name="Client — Acme" cat="Income · Invoice" amt="$5,500.00" init="AC" i={1} /><Txn name="Payroll" cat="Salaries" amt="$18,420.00" neg init="PR" i={3} />
        </div>
        <div style={{ ...card, padding: '22px 24px' }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Spending by category</div>
          <Cat n="Infrastructure" pct={82} amt="$4,120" i={0} /><Cat n="Salaries" pct={100} amt="$18,420" i={1} /><Cat n="Software" pct={34} amt="$1,240" i={2} /><Cat n="Marketing" pct={48} amt="$2,800" i={3} /><Cat n="Office" pct={22} amt="$860" i={4} />
        </div>
      </div>
    </>
  );
}

/* ============ HEALTHCARE ============ */
export function Healthcare() {
  const Appt = ({ time, name, init, type, typeC, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <div style={{ width: 56, textAlign: 'center', flexShrink: 0 }}><div style={{ fontFamily: "'Space Grotesk'", fontSize: 14, fontWeight: 700 }}>{time[0]}</div><div style={{ fontSize: 11, color: 'var(--tx-5)' }}>{time[1]}</div></div>
      <span style={{ width: 2, height: 32, background: typeC, borderRadius: 2, flexShrink: 0 }} />
      <Avatar g={grad(i)} size={36}>{init}</Avatar>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{name}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{type}</div></div>
      <button style={{ background: 'none', border: 'none', color: 'var(--tx-5)', cursor: 'pointer' }}><Ic d='<path d="M9 18l6-6-6-6"/>' size={18} /></button>
    </div>
  );
  const Vital = ({ label, value, unit, note, col, icon }) => (
    <div style={{ ...card, padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ width: 36, height: 36, borderRadius: 10, background: col, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a12' }}><Ic d={icon} size={20} /></span>
        <span style={{ fontSize: 13, color: 'var(--tx-3)' }}>{label}</span>
      </div>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 700 }}>{value} <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--tx-4)' }}>{unit}</span></div>
      <div style={{ fontSize: 12, color: 'var(--a3)', marginTop: 5 }}>{note}</div>
    </div>
  );
  return (
    <>
      <PageHead crumb="Apps / Healthcare" title="Clinic dashboard" right={<button style={btnP}>+ New appointment</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
        <KpiCard value="18" label="Appointments today" delta="4 completed" /><KpiCard value="1,240" label="Active patients" delta="▲ 32 this month" /><KpiCard value="6" label="Available doctors" delta="2 on call" /><KpiCard value="12m" label="Avg. wait time" delta="▼ 3m" />
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        <div style={{ ...card, padding: '22px 24px' }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Today’s schedule</div>
          <Appt time={['09:00', 'AM']} name="Jordan Diaz" init="JD" type="Cardiology · Check-up" typeC="var(--a3)" i={0} /><Appt time={['09:45', 'AM']} name="Sara Malik" init="SM" type="Dermatology · Follow-up" typeC="#f472b6" i={1} /><Appt time={['10:30', 'AM']} name="Tom Wright" init="TW" type="General · Consultation" typeC="var(--a1)" i={2} /><Appt time={['11:15', 'AM']} name="Aisha Lee" init="AL" type="Orthopedics · Review" typeC="#fbbf24" i={3} /><Appt time={['01:00', 'PM']} name="Marco Kim" init="MK" type="Cardiology · ECG" typeC="var(--a3)" i={4} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Vital label="Heart rate" value="72" unit="bpm" note="Normal range" col="linear-gradient(135deg,#f87171,#fb923c)" icon='<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>' />
          <Vital label="Blood pressure" value="118/76" unit="mmHg" note="Optimal" col="linear-gradient(135deg,var(--a2),var(--a3))" icon='<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' />
          <Vital label="Temperature" value="36.6" unit="°C" note="Normal" col="linear-gradient(135deg,#60a5fa,#818cf8)" icon='<path d="M3 12h4l2-8 4 16 2-8h6"/>' />
        </div>
      </div>
    </>
  );
}

/* ============ AI ASSISTANT ============ */
export function AiChat() {
  const Convo = ({ t, sub, active, i }) => (
    <div style={{ display: 'flex', gap: 11, padding: '12px 14px', borderRadius: 11, cursor: 'pointer', background: active ? 'rgba(var(--a1rgb),0.1)' : 'transparent', border: `1px solid ${active ? 'rgba(var(--a1rgb),0.25)' : 'transparent'}`, marginBottom: 4 }}>
      <span style={{ width: 30, height: 30, borderRadius: 9, background: grad(i), flexShrink: 0 }} />
      <div style={{ minWidth: 0 }}><div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</div><div style={{ fontSize: 11.5, color: 'var(--tx-5)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub}</div></div>
    </div>
  );
  const Bubble = ({ ai, children }) => ai ? (
    <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
      <span style={{ width: 32, height: 32, borderRadius: 9, background: 'linear-gradient(135deg,var(--a1),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0a0a12' }}><Ic d='<path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>' size={17} /></span>
      <div style={{ flex: 1, fontSize: 14, lineHeight: 1.65, color: 'var(--tx-1)', paddingTop: 5 }}>{children}</div>
    </div>
  ) : (
    <div style={{ display: 'flex', gap: 12, marginBottom: 22, flexDirection: 'row-reverse' }}>
      <span style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(var(--fg),0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700, color: 'var(--tx-2)' }}>AM</span>
      <div style={{ maxWidth: '78%', fontSize: 14, lineHeight: 1.6, background: 'rgba(var(--a1rgb),0.12)', color: 'var(--tx-1)', padding: '12px 16px', borderRadius: 14, borderTopRightRadius: 4 }}>{children}</div>
    </div>
  );
  const Sugg = ({ children }) => <button style={{ fontSize: 12.5, fontWeight: 500, padding: '8px 14px', borderRadius: 100, background: 'rgba(var(--fg),0.05)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-3)', cursor: 'pointer' }}>{children}</button>;
  return (
    <>
      <PageHead crumb="Apps / AI Assistant" title="AI Assistant" right={<button style={btnG}>＋ New chat</button>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 20, height: 620 }}>
        <div style={{ ...card, padding: 14, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--tx-5)', padding: '6px 10px 12px' }}>Recent</div>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            <Convo t="Q1 revenue analysis" sub="Analyzed 3 datasets" active i={0} /><Convo t="Draft launch email" sub="Marketing copy" i={1} /><Convo t="Explain our churn" sub="Root-cause summary" i={2} /><Convo t="SQL for cohort report" sub="Generated query" i={3} /><Convo t="Summarize user feedback" sub="48 responses" i={4} />
          </div>
        </div>
        <div style={{ ...card, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '26px 28px' }}>
            <Bubble>Can you summarize what drove the revenue increase in Q1?</Bubble>
            <Bubble ai>Q1 revenue rose <strong>18.4%</strong> to $284k, driven by three factors: (1) enterprise upgrades added $62k in expansion MRR, (2) the new annual plan lifted average contract value by 22%, and (3) churn fell to 3.2%. The enterprise segment alone accounted for 54% of net-new revenue.</Bubble>
            <Bubble>Which segment should we focus on next quarter?</Bubble>
            <Bubble ai>Based on the trend, <strong>mid-market</strong> shows the strongest signal — 41% faster deal velocity and the lowest CAC payback (7 months). I’d recommend concentrating sales capacity there while nurturing enterprise expansion.</Bubble>
          </div>
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(var(--fg),0.07)' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}><Sugg>Draft the plan</Sugg><Sugg>Show the data</Sugg><Sugg>Compare to Q4</Sugg></div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input placeholder="Ask anything…" style={{ flex: 1, padding: '13px 16px', borderRadius: 12, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14, outline: 'none' }} />
              <button style={{ ...btnP, padding: '12px 18px' }}><Ic d='<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>' size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
