import {
  PageHead, Avatar, Chip, KpiCard, Bar, Ic, btnP, btnG, cardStyle, grad, Th,
} from '../../admin/ui.jsx';

const card = cardStyle;

const AvStack = ({ list }) => (
  <div style={{ display: 'flex' }}>
    {list.map((a, i) => (
      <span key={i} style={{ marginLeft: i ? -9 : 0, border: '2px solid var(--bg-elev)', borderRadius: '50%', display: 'inline-flex' }}>
        <Avatar g={grad(a[1])} size={28}>{a[0]}</Avatar>
      </span>
    ))}
  </div>
);

/* ============ PROJECTS ============ */
export function Projects() {
  const projs = [
    ['Apollo redesign', 'Acme Corp', 72, 'On track', 'rgba(var(--a3rgb),0.12)', 'var(--a3)', 'Apr 30', [['JD', 0], ['SM', 1], ['TW', 2]]],
    ['Mobile app v2', 'Northwind', 45, 'At risk', 'rgba(254,188,46,0.12)', '#febc2e', 'May 12', [['AL', 3], ['MK', 4]]],
    ['Data platform', 'Globex', 88, 'On track', 'rgba(var(--a3rgb),0.12)', 'var(--a3)', 'Apr 18', [['NR', 5], ['RP', 0], ['PP', 1]]],
    ['Brand refresh', 'Initech', 20, 'Delayed', 'rgba(255,122,144,0.12)', '#ff7a90', 'Jun 02', [['BW', 2]]],
    ['API migration', 'Umbrella', 60, 'On track', 'rgba(var(--a3rgb),0.12)', 'var(--a3)', 'May 20', [['JD', 3], ['TW', 4]]],
    ['Growth experiments', 'Soylent', 34, 'At risk', 'rgba(254,188,46,0.12)', '#febc2e', 'Jun 15', [['SM', 5], ['AL', 0]]],
  ];
  return (
    <>
      <PageHead crumb="Project / Projects" title="Projects" right={<button style={btnP}>+ New project</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {projs.map((p) => (
          <div key={p[0]} className="nx-card" style={{ ...card, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
              <div><div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600 }}>{p[0]}</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginTop: 3 }}>{p[1]}</div></div>
              <Chip bg={p[4]} color={p[5]}>{p[3]}</Chip>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--tx-4)', margin: '16px 0 7px' }}><span>Progress</span><span style={{ color: 'var(--tx-2)', fontWeight: 600 }}>{p[2]}%</span></div>
            <Bar pct={p[2]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
              <AvStack list={p[7]} /><span style={{ fontSize: 12, color: 'var(--tx-4)' }}>Due {p[6]}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ PROJECT DETAIL ============ */
export function ProjectDetail() {
  const Task = ({ done, name, who, wi, due, pr, prBg, prC }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${done ? 'transparent' : 'rgba(var(--fg),0.25)'}`, background: done ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#0a0a12', flexShrink: 0 }}>{done ? '✓' : ''}</span>
      <span style={{ flex: 1, fontSize: 13.5, color: done ? 'var(--tx-5)' : undefined, textDecoration: done ? 'line-through' : 'none' }}>{name}</span>
      <Chip bg={prBg} color={prC}>{pr}</Chip>
      <Avatar g={grad(wi)} size={28}>{who}</Avatar>
      <span style={{ fontSize: 12, color: 'var(--tx-4)', width: 48, textAlign: 'right' }}>{due}</span>
    </div>
  );
  const Member = ({ n, role, init, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <Avatar g={grad(i)} size={36}>{init}</Avatar>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{n}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{role}</div></div>
    </div>
  );
  const Tline = ({ icon, title, time, last }) => (
    <div style={{ display: 'flex', gap: 13, paddingBottom: last ? 0 : 18 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(var(--a1rgb),0.12)', color: 'var(--a2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ic d={icon} size={16} /></span>
        {!last && <span style={{ flex: 1, width: 2, background: 'rgba(var(--fg),0.09)', marginTop: 4 }} />}
      </div>
      <div><div style={{ fontSize: 13.5, color: 'var(--tx-1)', lineHeight: 1.4 }}>{title}</div><div style={{ fontSize: 12, color: 'var(--tx-5)', marginTop: 3 }}>{time}</div></div>
    </div>
  );
  return (
    <>
      <PageHead crumb="Project / Apollo redesign" title="Apollo redesign" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Settings</button><button style={btnP}>+ Add task</button></div>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
        <KpiCard value="72%" label="Progress" delta="On track" /><KpiCard value="34 / 47" label="Tasks done" delta="13 remaining" /><KpiCard value="$48k" label="Budget used" delta="of $65k" /><KpiCard value="18" label="Days left" delta="Due Apr 30" />
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 20 }}>
        <div style={{ ...card, padding: '22px 24px' }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Tasks</div>
          <Task done name="Wireframe the dashboard" who="JD" wi={0} due="Mar 8" pr="Done" prBg="rgba(var(--fg),0.07)" prC="var(--tx-3)" />
          <Task done name="Design system tokens" who="SM" wi={1} due="Mar 12" pr="Done" prBg="rgba(var(--fg),0.07)" prC="var(--tx-3)" />
          <Task name="Build the analytics charts" who="TW" wi={2} due="Apr 2" pr="High" prBg="rgba(255,122,144,0.12)" prC="#ff7a90" />
          <Task name="Responsive QA pass" who="AL" wi={3} due="Apr 10" pr="Med" prBg="rgba(254,188,46,0.12)" prC="#febc2e" />
          <Task name="Ship v1 to staging" who="MK" wi={4} due="Apr 22" pr="Low" prBg="rgba(var(--a3rgb),0.12)" prC="var(--a3)" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Team</div>
            <Member n="Jordan Diaz" role="Product lead" init="JD" i={0} /><Member n="Sara Malik" role="Designer" init="SM" i={1} /><Member n="Tom Wright" role="Engineer" init="TW" i={2} />
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Milestones</div>
            <Tline icon='<path d="M20 6L9 17l-5-5"/>' title="Discovery complete" time="Mar 1" />
            <Tline icon='<path d="M20 6L9 17l-5-5"/>' title="Design sign-off" time="Mar 20" />
            <Tline icon='<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' title="Beta launch" time="Apr 15" last />
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ HR OVERVIEW ============ */
export function HrOverview() {
  const Dept = ({ n, count, pct, i }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}><span style={{ color: 'var(--tx-2)', fontWeight: 500 }}>{n}</span><span style={{ color: 'var(--tx-4)' }}>{count}</span></div>
      <Bar pct={pct} col={grad(i)} />
    </div>
  );
  const Hire = ({ n, role, init, date, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <Avatar g={grad(i)} size={36}>{init}</Avatar>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{n}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{role}</div></div>
      <span style={{ fontSize: 12, color: 'var(--tx-5)' }}>{date}</span>
    </div>
  );
  return (
    <>
      <PageHead crumb="HR / Overview" title="HR overview" right={<button style={btnP}>+ Add employee</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
        <KpiCard value="248" label="Total headcount" delta="▲ 12 this quarter" /><KpiCard value="18" label="New hires" delta="▲ 4 vs last month" /><KpiCard value="9" label="Open roles" delta="3 in final round" /><KpiCard value="4.2%" label="Attrition" delta="▼ 0.6%" />
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20 }}>
        <div style={{ ...card, padding: 24 }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 20 }}>Headcount by department</div>
          <Dept n="Engineering" count="96" pct={100} i={0} /><Dept n="Sales" count="54" pct={56} i={1} /><Dept n="Design" count="32" pct={33} i={2} /><Dept n="Marketing" count="28" pct={29} i={3} /><Dept n="Operations" count="24" pct={25} i={4} /><Dept n="Support" count="14" pct={15} i={5} />
        </div>
        <div style={{ ...card, padding: 24 }}>
          <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Recent hires</div>
          <Hire n="Priya Patel" role="Senior Engineer" init="PP" date="Mar 10" i={0} /><Hire n="Ben Wolfe" role="Account Exec" init="BW" date="Mar 8" i={1} /><Hire n="Rosa Perez" role="Product Designer" init="RP" date="Mar 3" i={2} /><Hire n="Nina Roy" role="Data Analyst" init="NR" date="Feb 27" i={3} />
        </div>
      </div>
    </>
  );
}

/* ============ EMPLOYEES ============ */
export function Employees() {
  const rows = [
    ['Jordan Diaz', 'JD', 'VP Engineering', 'Engineering', 'San Francisco', 'Active'],
    ['Sara Malik', 'SM', 'Lead Designer', 'Design', 'New York', 'Active'],
    ['Tom Wright', 'TW', 'Backend Engineer', 'Engineering', 'Remote', 'Active'],
    ['Aisha Lee', 'AL', 'Account Executive', 'Sales', 'Chicago', 'On leave'],
    ['Marco Kim', 'MK', 'Growth Marketer', 'Marketing', 'Austin', 'Active'],
    ['Priya Patel', 'PP', 'Senior Engineer', 'Engineering', 'Remote', 'Active'],
  ];
  const chips = ['All', 'Engineering', 'Design', 'Sales', 'Marketing'];
  return (
    <>
      <PageHead crumb="HR / Employees" title="Employees" right={<button style={btnP}>+ Add employee</button>} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
        {chips.map((c, i) => (
          <button key={c} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 16px', borderRadius: 100, background: i === 0 ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.05)', color: i === 0 ? '#0a0a12' : 'var(--tx-3)', border: `1px solid ${i === 0 ? 'transparent' : 'rgba(var(--fg),0.1)'}` }}>{c}</button>
        ))}
      </div>
      <div style={{ ...card, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
            <thead><tr style={{ background: 'rgba(var(--fg),0.02)' }}><Th>Employee</Th><Th>Role</Th><Th>Department</Th><Th>Location</Th><Th>Status</Th></tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 16px' }}><div style={{ display: 'flex', alignItems: 'center', gap: 11 }}><Avatar g={grad(i)}>{r[1]}</Avatar><span style={{ fontSize: 13.5, fontWeight: 600 }}>{r[0]}</span></div></td>
                  <td style={{ padding: '13px 16px', fontSize: 13.5, color: 'var(--tx-2)' }}>{r[2]}</td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{r[3]}</td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{r[4]}</td>
                  <td style={{ padding: '13px 16px' }}><Chip bg={r[5] === 'Active' ? 'rgba(var(--a3rgb),0.12)' : 'rgba(254,188,46,0.12)'} color={r[5] === 'Active' ? 'var(--a3)' : '#febc2e'}>{r[5]}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ============ TICKETS ============ */
export function Tickets() {
  const rows = [
    ['#TK-2048', 'Cannot export invoices to PDF', 'Jordan Diaz', 'Urgent', 'rgba(255,122,144,0.12)', '#ff7a90', 'Open', 'rgba(var(--a1rgb),0.14)', '#c9beff', 'AM', '4m ago'],
    ['#TK-2047', 'Billing address won’t save', 'Sara Malik', 'High', 'rgba(254,188,46,0.12)', '#febc2e', 'Open', 'rgba(var(--a1rgb),0.14)', '#c9beff', 'TW', '22m ago'],
    ['#TK-2046', 'How do I add a teammate?', 'Tom Wright', 'Low', 'rgba(var(--a3rgb),0.12)', 'var(--a3)', 'Pending', 'rgba(254,188,46,0.12)', '#febc2e', 'AL', '1h ago'],
    ['#TK-2045', 'Dark mode toggle resets', 'Aisha Lee', 'Med', 'rgba(96,165,250,0.14)', '#7fb4ff', 'Pending', 'rgba(254,188,46,0.12)', '#febc2e', 'MK', '3h ago'],
    ['#TK-2044', 'Refund not received', 'Marco Kim', 'High', 'rgba(254,188,46,0.12)', '#febc2e', 'Resolved', 'rgba(var(--a3rgb),0.12)', 'var(--a3)', 'AM', 'Yesterday'],
  ];
  const tabs = [['Open', 12, true], ['Pending', 7, false], ['Resolved', 141, false]];
  return (
    <>
      <PageHead crumb="Help Desk / Tickets" title="Tickets" right={<button style={btnP}>+ New ticket</button>} />
      <div style={{ ...card, overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px', display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>
          {tabs.map((t) => (
            <button key={t[0]} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 9, background: t[2] ? 'rgba(var(--a1rgb),0.14)' : 'rgba(var(--fg),0.04)', color: t[2] ? '#c9beff' : 'var(--tx-3)', border: `1px solid ${t[2] ? 'rgba(var(--a1rgb),0.3)' : 'rgba(var(--fg),0.1)'}` }}>{t[0]} <span style={{ opacity: 0.7 }}>{t[1]}</span></button>
          ))}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
            <thead><tr style={{ background: 'rgba(var(--fg),0.02)' }}><Th>Ticket</Th><Th>Subject</Th><Th>Requester</Th><Th>Priority</Th><Th>Status</Th><Th>Agent</Th><Th align="right"> </Th></tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 16px', fontSize: 13, fontWeight: 600, color: '#c9beff' }}>{r[0]}</td>
                  <td style={{ padding: '13px 16px', fontSize: 13.5 }}>{r[1]}</td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{r[2]}</td>
                  <td style={{ padding: '13px 16px' }}><Chip bg={r[4]} color={r[5]}>{r[3]}</Chip></td>
                  <td style={{ padding: '13px 16px' }}><Chip bg={r[7]} color={r[8]}>{r[6]}</Chip></td>
                  <td style={{ padding: '13px 16px' }}><Avatar g={grad(i)} size={30}>{r[9]}</Avatar></td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--tx-5)', textAlign: 'right' }}>{r[10]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ============ TICKET DETAIL ============ */
export function TicketDetail() {
  const Msg = ({ agent, name, init, gi, text, time }) => (
    <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexDirection: agent ? 'row-reverse' : 'row' }}>
      <Avatar g={grad(gi)} size={36}>{init}</Avatar>
      <div style={{ maxWidth: '75%' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 6, flexDirection: agent ? 'row-reverse' : 'row' }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{name}</span><span style={{ fontSize: 11.5, color: 'var(--tx-5)' }}>{time}</span>
        </div>
        <div style={{ padding: '13px 16px', borderRadius: 14, fontSize: 13.5, lineHeight: 1.55, ...(agent ? { background: 'rgba(var(--a1rgb),0.14)', color: 'var(--tx-1)', borderTopRightRadius: 4 } : { background: 'rgba(var(--fg),0.05)', color: 'var(--tx-2)', borderTopLeftRadius: 4 }) }}>{text}</div>
      </div>
    </div>
  );
  const Info = ({ l, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '9px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ color: 'var(--tx-4)' }}>{l}</span><span style={{ color: 'var(--tx-2)', fontWeight: 600 }}>{v}</span>
    </div>
  );
  return (
    <>
      <PageHead crumb="Help Desk / Tickets / #TK-2048" title="Cannot export invoices to PDF" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Assign</button><button style={btnP}>Resolve</button></div>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 20 }}>
        <div style={{ ...card, padding: 24, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Msg name="Jordan Diaz" init="JD" gi={0} text='Hey — when I click "Export to PDF" on the invoices page nothing happens. The button just spins. Tried Chrome and Safari.' time="10:02" />
            <Msg agent name="Alex Morgan" init="AM" gi={2} text="Thanks for flagging, Jordan. Can you tell me roughly how many invoices are in the export? Also, are you on the latest version?" time="10:14" />
            <Msg name="Jordan Diaz" init="JD" gi={0} text="About 240 invoices. And yes, just updated this morning." time="10:19" />
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8, paddingTop: 16, borderTop: '1px solid rgba(var(--fg),0.07)' }}>
            <input placeholder="Write a reply…" style={{ flex: 1, padding: '12px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14, outline: 'none' }} />
            <button style={{ ...btnP, padding: '12px 20px' }}>Send</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Details</div>
            <Info l="Status" v="Open" /><Info l="Priority" v="Urgent" /><Info l="Requester" v="Jordan Diaz" /><Info l="Assigned to" v="Alex Morgan" /><Info l="Created" v="Today · 10:02" />
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 12 }}>Tags</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Chip bg="rgba(var(--a1rgb),0.12)" color="#c9beff">billing</Chip><Chip bg="rgba(var(--a3rgb),0.12)" color="var(--a3)">export</Chip><Chip bg="rgba(255,122,144,0.12)" color="#ff7a90">bug</Chip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
