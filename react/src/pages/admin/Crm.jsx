import {
  PageHead, Avatar, Chip, KpiCard, Ic, btnP, btnG, cardStyle, grad, Th, dotsIcon,
} from '../../admin/ui.jsx';

const card = cardStyle;

/* ============ LEADS ============ */
export function Leads() {
  const rows = [
    ['Jordan Diaz', 'JD', 'Acme Corp', 'Website', 88, 'Qualified', 'rgba(var(--a3rgb),0.12)', 'var(--a3)'],
    ['Sara Malik', 'SM', 'Northwind', 'Referral', 72, 'Contacted', 'rgba(254,188,46,0.12)', '#febc2e'],
    ['Tom Wright', 'TW', 'Globex', 'LinkedIn', 41, 'New', 'rgba(var(--fg),0.07)', 'var(--tx-3)'],
    ['Aisha Lee', 'AL', 'Initech', 'Website', 94, 'Qualified', 'rgba(var(--a3rgb),0.12)', 'var(--a3)'],
    ['Marco Kim', 'MK', 'Umbrella', 'Event', 63, 'Contacted', 'rgba(254,188,46,0.12)', '#febc2e'],
    ['Nina Roy', 'NR', 'Soylent', 'Cold call', 28, 'New', 'rgba(var(--fg),0.07)', 'var(--tx-3)'],
  ];
  const Score = ({ n }) => {
    const c = n >= 80 ? 'var(--a3)' : n >= 55 ? '#febc2e' : '#ff7a90';
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ width: 64, height: 6, borderRadius: 100, background: 'rgba(var(--fg),0.09)', overflow: 'hidden' }}>
          <div style={{ width: `${n}%`, height: '100%', background: c }} />
        </div>
        <span style={{ fontSize: 12.5, color: 'var(--tx-2)', fontWeight: 600 }}>{n}</span>
      </div>
    );
  };
  return (
    <>
      <PageHead crumb="CRM / Leads" title="Leads" right={<button style={btnP}>+ Add lead</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
        <KpiCard value="1,284" label="Total leads" delta="▲ 6.2% this month" />
        <KpiCard value="468" label="Qualified" delta="▲ 3.1%" />
        <KpiCard value="24.8%" label="Conversion rate" delta="▲ 1.4%" />
        <KpiCard value="2.4h" label="Avg. response time" delta="▼ 0.3h" />
      </div>
      <div style={{ ...card, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
            <thead>
              <tr style={{ background: 'rgba(var(--fg),0.02)' }}>
                <Th>Lead</Th><Th>Company</Th><Th>Source</Th><Th>Score</Th><Th>Status</Th><Th align="right"> </Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <Avatar g={grad(i)}>{r[1]}</Avatar><span style={{ fontSize: 13.5, fontWeight: 600 }}>{r[0]}</span>
                    </div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 13.5, color: 'var(--tx-2)' }}>{r[2]}</td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{r[3]}</td>
                  <td style={{ padding: '13px 16px' }}><Score n={r[4]} /></td>
                  <td style={{ padding: '13px 16px' }}><Chip bg={r[6]} color={r[7]}>{r[5]}</Chip></td>
                  <td style={{ padding: '13px 16px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--tx-5)', cursor: 'pointer', padding: 4 }}><Ic d={dotsIcon} size={18} fill="currentColor" sw={0} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ============ PIPELINE ============ */
export function Pipeline() {
  const stages = [
    ['New', '$48k', 3, [['Globex', '$12k', 'TW', 4], ['Soylent', '$8k', 'NR', 5], ['Hooli', '$28k', 'AM', 0]]],
    ['Contacted', '$96k', 2, [['Northwind', '$54k', 'SM', 1], ['Umbrella', '$42k', 'MK', 2]]],
    ['Qualified', '$134k', 2, [['Acme Corp', '$88k', 'JD', 0], ['Initech', '$46k', 'AL', 3]]],
    ['Proposal', '$72k', 1, [['Vandelay', '$72k', 'RP', 2]]],
    ['Won', '$210k', 2, [['Stark Ind.', '$150k', 'PP', 0], ['Wayne Ent.', '$60k', 'BW', 1]]],
  ];
  return (
    <>
      <PageHead crumb="CRM / Pipeline" title="Deal pipeline" right={<button style={btnP}>+ New deal</button>} />
      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
        {stages.map((s) => (
          <div key={s[0]} style={{ minWidth: 230, flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13.5, fontWeight: 600 }}>{s[0]}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--tx-4)', background: 'rgba(var(--fg),0.06)', padding: '2px 8px', borderRadius: 100 }}>{s[2]}</span>
              </div>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--a2)' }}>{s[1]}</span>
            </div>
            {s[3].map((d, i) => (
              <div key={i} className="nx-card" style={{ background: 'var(--bg-elev)', border: '1px solid rgba(var(--fg),0.08)', borderRadius: 12, padding: 14, marginBottom: 10, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600 }}>{d[0]}</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 700, marginBottom: 12 }}>{d[1]}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Avatar g={grad(d[3])} size={26}>{d[2]}</Avatar>
                  <span style={{ fontSize: 11, color: 'var(--tx-5)' }}>3d ago</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ CONTACT DETAIL ============ */
export function ContactDetail() {
  const Info = ({ l, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '8px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ color: 'var(--tx-4)' }}>{l}</span><span style={{ color: 'var(--tx-2)', fontWeight: 500 }}>{v}</span>
    </div>
  );
  const Act = ({ icon, t, time, last }) => (
    <div style={{ display: 'flex', gap: 13, paddingBottom: 18 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(var(--a1rgb),0.12)', color: 'var(--a2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ic d={icon} size={16} /></span>
        {!last && <span style={{ flex: 1, width: 2, background: 'rgba(var(--fg),0.09)', marginTop: 4 }} />}
      </div>
      <div><div style={{ fontSize: 13.5, color: 'var(--tx-1)', lineHeight: 1.4 }}>{t}</div><div style={{ fontSize: 12, color: 'var(--tx-5)', marginTop: 3 }}>{time}</div></div>
    </div>
  );
  const Deal = ({ n, v, stage, sc, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ width: 38, height: 38, borderRadius: 10, background: grad(i), flexShrink: 0 }} />
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{n}</div><div style={{ fontSize: 12, color: 'var(--tx-4)', marginTop: 2 }}>{stage}</div></div>
      <div style={{ textAlign: 'right' }}><div style={{ fontFamily: "'Space Grotesk'", fontSize: 14, fontWeight: 700 }}>{v}</div><Chip bg="rgba(var(--a3rgb),0.12)" color="var(--a3)">{sc}</Chip></div>
    </div>
  );
  return (
    <>
      <PageHead crumb="CRM / Contacts / Jordan Diaz" title="Contact" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Log activity</button><button style={btnP}>+ New deal</button></div>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '26px 24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}><Avatar g="linear-gradient(135deg,var(--a2),var(--a3))" size={76}>JD</Avatar></div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 600, marginTop: 16 }}>Jordan Diaz</div>
            <div style={{ fontSize: 13.5, color: 'var(--tx-4)', marginTop: 4 }}>VP Engineering · Acme Corp</div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14 }}>
              <Chip bg="rgba(var(--a1rgb),0.14)" color="#c9beff">Customer</Chip><Chip bg="rgba(254,188,46,0.14)" color="#febc2e">VIP</Chip>
            </div>
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Details</div>
            <Info l="Email" v="jordan@acme.com" /><Info l="Phone" v="+1 (555) 018-2245" /><Info l="Location" v="San Francisco, CA" /><Info l="Owner" v="Alex Morgan" /><Info l="Created" v="Jan 14, 2026" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Open deals · 2</div>
            <Deal n="Enterprise plan" v="$88k" stage="Qualified · 60%" sc="60%" i={0} />
            <Deal n="Add-on: Analytics" v="$24k" stage="Proposal · 75%" sc="75%" i={2} />
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Activity</div>
            <Act icon='<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>' t="Call with Jordan — discussed rollout timeline" time="Today · 10:24" />
            <Act icon='<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>' t="Sent proposal for Enterprise plan" time="Yesterday · 16:40" />
            <Act icon='<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' t='Marked "Security review" complete' time="Mar 10 · 09:12" />
            <Act icon='<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>' t="Added note about budget approval" time="Mar 8 · 14:05" last />
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ DEAL DETAIL ============ */
export function DealDetail() {
  const stages = ['New', 'Contacted', 'Qualified', 'Proposal', 'Won'];
  const curStage = 3;
  const Info = ({ l, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '9px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ color: 'var(--tx-4)' }}>{l}</span><span style={{ color: 'var(--tx-2)', fontWeight: 600 }}>{v}</span>
    </div>
  );
  const Prod = ({ n, q, v, i }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
      <span style={{ width: 36, height: 36, borderRadius: 9, background: grad(i), flexShrink: 0 }} />
      <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{n}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>Qty {q}</div></div>
      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{v}</span>
    </div>
  );
  return (
    <>
      <PageHead crumb="CRM / Deals / Enterprise plan" title="Enterprise plan" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Lose</button><button style={btnP}>Mark as won</button></div>} />
      <div style={{ ...card, padding: '24px 26px', marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, marginBottom: 22 }}>
          <div><div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginBottom: 4 }}>Deal value</div><div style={{ fontFamily: "'Space Grotesk'", fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>$88,000</div></div>
          <Chip bg="rgba(var(--a1rgb),0.14)" color="#c9beff">60% probability</Chip>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {stages.map((s, i) => (
            <div key={s} style={{ flex: 1 }}>
              <div style={{ height: 6, borderRadius: 100, background: i < curStage ? 'linear-gradient(135deg,var(--a2),var(--a3))' : i === curStage ? 'var(--a1)' : 'rgba(var(--fg),0.09)' }} />
              <div style={{ fontSize: 11.5, color: i <= curStage ? 'var(--tx-2)' : 'var(--tx-5)', marginTop: 8, fontWeight: i === curStage ? 600 : 400 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Deal details</div>
            <Info l="Owner" v="Alex Morgan" /><Info l="Expected close" v="Apr 30, 2026" /><Info l="Source" v="Website" /><Info l="Created" v="Feb 02, 2026" />
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Line items</div>
            <Prod n="Enterprise license (50 seats)" q="1" v="$64,000" i={0} /><Prod n="Analytics add-on" q="1" v="$18,000" i={2} /><Prod n="Priority support" q="1" v="$6,000" i={4} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Primary contact</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar g="linear-gradient(135deg,var(--a2),var(--a3))" size={44}>JD</Avatar>
              <div><div style={{ fontSize: 14, fontWeight: 600 }}>Jordan Diaz</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>VP Engineering</div></div>
            </div>
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Company</div>
            <Info l="Name" v="Acme Corp" /><Info l="Industry" v="SaaS" /><Info l="Employees" v="1,200" /><Info l="Website" v="acme.com" />
          </div>
        </div>
      </div>
    </>
  );
}
