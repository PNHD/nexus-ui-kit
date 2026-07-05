import { useState } from 'react';
import {
  Panel, PageHead, Avatar, Chip, Ic, btnP, btnG, cardStyle, heading,
} from '../../admin/ui.jsx';
import {
  invItems, profileStats, profileSkills, profileTimeline, settingsNavDefs, pricePlans,
} from '../../data/adminData.js';

/* ============ INVOICE ============ */
export function Invoice() {
  const inputTh = { fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--tx-5)', padding: '12px 0', borderBottom: '1px solid rgba(var(--fg),0.08)' };
  const td = { padding: '14px 0', fontSize: 13.5, borderBottom: '1px solid rgba(var(--fg),0.05)' };
  return (
    <>
      <PageHead
        crumb="Pages / Invoice"
        title="Invoice"
        right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Download</button><button style={btnP}>Print</button></div>}
      />
      <div style={{ maxWidth: 840, ...cardStyle, borderRadius: 18, overflow: 'hidden' }}>
        <div style={{ padding: '34px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 44, height: 44, borderRadius: 11, background: 'linear-gradient(135deg,var(--a1),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: "'Space Grotesk'", fontSize: 20, color: '#0a0a12' }}>N</span>
            <div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 18 }}>Nexus, Inc.</div>
              <div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>hello@nexus.io</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>INVOICE</div>
            <div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 4 }}>#INV-2026-0042</div>
            <span style={{ display: 'inline-block', marginTop: 8, fontSize: 11.5, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: 'rgba(var(--a3rgb),0.12)', color: 'var(--a3)' }}>Paid</span>
          </div>
        </div>
        <div className="nx-2col" style={{ padding: '28px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tx-5)', marginBottom: 8 }}>Billed to</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Acme Corporation</div>
            <div style={{ fontSize: 13, color: 'var(--tx-4)', lineHeight: 1.6, marginTop: 4 }}>128 Innovation Drive<br />San Francisco, CA 94107<br />billing@acme.com</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tx-5)', marginBottom: 8 }}>Details</div>
            <div style={{ fontSize: 13, color: 'var(--tx-2)', lineHeight: 1.9 }}>Issued: Mar 01, 2026<br />Due: Mar 15, 2026</div>
          </div>
        </div>
        <div style={{ padding: '0 36px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                <th style={inputTh}>Description</th>
                <th style={{ ...inputTh, textAlign: 'center' }}>Qty</th>
                <th style={{ ...inputTh, textAlign: 'right' }}>Price</th>
                <th style={{ ...inputTh, textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {invItems.map((it, i) => (
                <tr key={i}>
                  <td style={td}>{it.desc}</td>
                  <td style={{ ...td, color: 'var(--tx-2)', textAlign: 'center' }}>{it.qty}</td>
                  <td style={{ ...td, color: 'var(--tx-2)', textAlign: 'right' }}>{it.price}</td>
                  <td style={{ ...td, fontWeight: 600, textAlign: 'right' }}>{it.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '22px 36px 34px', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 260 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, color: '#a6a6b6', padding: '7px 0' }}><span>Subtotal</span><span>$535.00</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, color: '#a6a6b6', padding: '7px 0' }}><span>Tax (8%)</span><span>$42.80</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 700, padding: '12px 0 0', marginTop: 8, borderTop: '1px solid rgba(var(--fg),0.1)' }}><span>Total</span><span style={{ color: 'var(--a3)' }}>$577.80</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ PROFILE ============ */
export function Profile() {
  return (
    <>
      <div style={{ ...cardStyle, borderRadius: 18, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: 150, background: 'linear-gradient(120deg,var(--a1),var(--a3))', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div style={{ padding: '0 30px 26px', display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginTop: -42, position: 'relative' }}>
          <div style={{ width: 96, height: 96, borderRadius: 24, background: 'linear-gradient(135deg,var(--a2),var(--a3))', border: '4px solid var(--bg-elev)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 34, color: '#0a0a12' }}>AM</div>
          <div style={{ flex: 1, minWidth: 200, paddingBottom: 4 }}>
            <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 23, fontWeight: 600, letterSpacing: '-0.02em' }}>Alex Morgan</h1>
            <div style={{ fontSize: 14, color: 'var(--tx-4)', marginTop: 3 }}>Head of Product · San Francisco, CA</div>
          </div>
          <div style={{ display: 'flex', gap: 10, paddingBottom: 4 }}>
            <button style={{ ...btnG, color: 'var(--tx-1)' }}>Message</button>
            <button style={btnP}>Follow</button>
          </div>
        </div>
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Panel style={{ padding: 24 }}>
            <div style={{ ...heading, fontSize: 16, marginBottom: 14 }}>About</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: '#a6a6b6' }}>Product leader with 10+ years building data-driven tools. Passionate about clean UX, fast teams, and shipping things people love.</p>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, textAlign: 'center' }}>
              {profileStats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 700 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--tx-4)', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Panel>
          <Panel style={{ padding: 24 }}>
            <div style={{ ...heading, fontSize: 16, marginBottom: 14 }}>Skills</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {profileSkills.map((sk) => (
                <span key={sk} style={{ fontSize: 12.5, padding: '6px 12px', borderRadius: 100, background: 'rgba(var(--fg),0.05)', border: '1px solid rgba(var(--fg),0.1)', color: 'var(--tx-2)' }}>{sk}</span>
              ))}
            </div>
          </Panel>
        </div>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 20 }}>Recent activity</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {profileTimeline.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: t.color, marginTop: 3 }} />
                  {i < profileTimeline.length - 1 && <span style={{ flex: 1, width: 2, background: 'rgba(var(--fg),0.08)', margin: '4px 0' }} />}
                </div>
                <div style={{ paddingBottom: 22 }}>
                  <div style={{ fontSize: 14, color: 'var(--tx-1)' }}>{t.text}</div>
                  <div style={{ fontSize: 12, color: 'var(--tx-5)', marginTop: 3 }}>{t.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

/* ============ SETTINGS ============ */
function Toggle({ label, desc, on }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '15px 0', borderTop: '1px solid rgba(var(--fg),0.05)' }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginTop: 2 }}>{desc}</div>
      </div>
      <span style={{ width: 44, height: 26, borderRadius: 100, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.12)', position: 'relative', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }} />
      </span>
    </div>
  );
}
function Field({ label, type = 'text', ph }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontSize: 13, color: 'var(--tx-3)', marginBottom: 8 }}>{label}</label>
      <input type={type} placeholder={ph} style={{ width: '100%', padding: '13px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14.5, outline: 'none' }} />
    </div>
  );
}
function SettingsHead({ t, s }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 600 }}>{t}</div>
      <div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 4 }}>{s}</div>
    </div>
  );
}
const SaveBtn = () => <div style={{ marginTop: 22, maxWidth: 170 }}><button style={{ ...btnP, width: '100%', padding: 14 }}>Save changes</button></div>;

function SettingsPanel({ tab }) {
  if (tab === 'account') return (
    <Panel style={{ padding: 28 }}>
      <SettingsHead t="Account" s="Manage your personal information" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
        <Avatar g="linear-gradient(135deg,var(--a2),var(--a3))" size={64}>AM</Avatar>
        <button style={{ background: 'rgba(var(--fg),0.06)', border: '1px solid rgba(var(--fg),0.14)', color: 'var(--tx-1)', fontSize: 13, padding: '9px 15px', borderRadius: 9, cursor: 'pointer' }}>Change photo</button>
      </div>
      <Field label="Full name" ph="Alex Morgan" /><Field label="Email" type="email" ph="alex@nexus.io" /><Field label="Job title" ph="Head of Product" /><SaveBtn />
    </Panel>
  );
  if (tab === 'notifications') return (
    <Panel style={{ padding: 28 }}>
      <SettingsHead t="Notifications" s="Choose what you want to hear about" />
      <Toggle label="Email notifications" desc="Product updates and news" on /><Toggle label="Push notifications" desc="Real-time alerts on your devices" on /><Toggle label="Weekly digest" desc="A summary every Monday" /><Toggle label="Mentions" desc="When someone @mentions you" on /><Toggle label="Billing alerts" desc="Invoices and payment reminders" on />
    </Panel>
  );
  if (tab === 'security') return (
    <Panel style={{ padding: 28 }}>
      <SettingsHead t="Security" s="Keep your account safe" />
      <Field label="Current password" type="password" ph="••••••••" /><Field label="New password" type="password" ph="••••••••" /><Field label="Confirm new password" type="password" ph="••••••••" /><Toggle label="Two-factor authentication" desc="Add an extra layer of security" on /><Toggle label="Login alerts" desc="Notify me of new sign-ins" on /><SaveBtn />
    </Panel>
  );
  if (tab === 'billing') return (
    <Panel style={{ padding: 28 }}>
      <SettingsHead t="Billing" s="Manage your plan and payment method" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, padding: 18, borderRadius: 12, background: 'linear-gradient(135deg,rgba(var(--a1rgb),0.14),rgba(var(--a3rgb),0.07))', border: '1px solid rgba(var(--fg),0.08)', marginBottom: 16 }}>
        <div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>Current plan</div><div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 600, marginTop: 2 }}>Pro — $29/mo</div></div>
        <Chip bg="rgba(var(--a3rgb),0.12)" color="var(--a3)">Active</Chip>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 12, background: 'rgba(var(--fg),0.03)', border: '1px solid rgba(var(--fg),0.07)' }}>
        <span style={{ width: 44, height: 30, borderRadius: 6, background: 'linear-gradient(135deg,var(--a2),var(--a3))', flexShrink: 0 }} />
        <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 500 }}>Visa ending 4242</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>Expires 08/28</div></div>
        <button style={{ background: 'rgba(var(--fg),0.06)', border: '1px solid rgba(var(--fg),0.14)', color: 'var(--tx-1)', fontSize: 13, padding: '9px 15px', borderRadius: 9, cursor: 'pointer' }}>Update</button>
      </div>
    </Panel>
  );
  return (
    <Panel style={{ padding: 28 }}>
      <SettingsHead t="General" s="Basic workspace preferences" />
      <Field label="Workspace name" ph="Nexus Inc." /><Field label="Support email" type="email" ph="support@nexus.io" />
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: 13, color: 'var(--tx-3)', marginBottom: 8 }}>Timezone</label>
        <div style={{ padding: '13px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-2)', fontSize: 14.5 }}>(GMT+07:00) Bangkok, Hanoi, Jakarta</div>
      </div>
      <Toggle label="Compact mode" desc="Reduce spacing across the UI" /><Toggle label="Auto-save" desc="Save changes automatically" on /><SaveBtn />
    </Panel>
  );
}

export function Settings() {
  const [tab, setTab] = useState('general');
  return (
    <>
      <PageHead crumb="Pages / Settings" title="Settings" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 16, alignItems: 'start' }}>
        <div style={{ padding: 12, ...cardStyle, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {settingsNavDefs.map(([key, label, icon]) => {
            const on = tab === key;
            return (
              <button key={key} onClick={() => setTab(key)} className="nx-nav" style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 13px', borderRadius: 10, cursor: 'pointer', textAlign: 'left', border: 'none', fontSize: 14, fontWeight: 500, color: on ? '#fff' : '#a6a6b6', background: on ? 'linear-gradient(135deg,rgba(var(--a1rgb),0.2),rgba(var(--a3rgb),0.1))' : 'transparent' }}>
                <span style={{ display: 'flex', color: on ? '#c9beff' : '#7c7c8e' }}><Ic d={icon} /></span>{label}
              </button>
            );
          })}
        </div>
        <SettingsPanel tab={tab} />
      </div>
    </>
  );
}

/* ============ PRICING ============ */
export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const plans = pricePlans(yearly);
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth: 600, margin: '10px auto 30px' }}>
        <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 'clamp(26px,3.6vw,36px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Choose your plan</h1>
        <p style={{ fontSize: 15, color: 'var(--tx-4)' }}>Upgrade, downgrade, or cancel anytime. No hidden fees.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 34 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: yearly ? 'var(--tx-4)' : 'var(--tx-0)' }}>Monthly</span>
        <button onClick={() => setYearly((v) => !v)} aria-label="Toggle billing" style={{ width: 56, height: 30, borderRadius: 100, border: '1px solid rgba(var(--fg),0.15)', background: 'rgba(var(--fg),0.06)', position: 'relative', cursor: 'pointer', padding: 0 }}>
          <span style={{ position: 'absolute', top: 3, left: yearly ? 29 : 3, width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,var(--a2),var(--a3))', transition: 'left .25s' }} />
        </button>
        <span style={{ fontSize: 14, fontWeight: 500, color: yearly ? 'var(--tx-0)' : 'var(--tx-4)' }}>Yearly</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--a3)', background: 'rgba(var(--a3rgb),0.12)', border: '1px solid rgba(var(--a3rgb),0.25)', padding: '4px 10px', borderRadius: 100 }}>Save 20%</span>
      </div>
      <div className="nx-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch', maxWidth: 1000, margin: '0 auto' }}>
        {plans.map((p) => (
          <div key={p.name} style={{ position: 'relative', padding: '30px 26px', borderRadius: 18, background: p.bg, border: `1px solid ${p.border}`, display: 'flex', flexDirection: 'column', boxShadow: p.shadow }}>
            {p.popular && <span style={{ position: 'absolute', top: 18, right: 18, fontSize: 11, fontWeight: 600, color: '#0a0a12', background: 'linear-gradient(135deg,var(--a2),var(--a3))', padding: '5px 11px', borderRadius: 100 }}>Popular</span>}
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: 'var(--tx-4)', marginBottom: 20, minHeight: 36 }}>{p.tagline}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontFamily: "'Space Grotesk'", fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.price}</span>
              <span style={{ fontSize: 14, color: 'var(--tx-4)' }}>{p.period}</span>
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--tx-5)', margin: '4px 0 24px' }}>{p.billed}</div>
            <button style={{ cursor: 'pointer', textAlign: 'center', fontSize: 14, fontWeight: 600, padding: 12, borderRadius: 11, marginBottom: 24, border: p.ctaGhost ? '1px solid rgba(var(--fg),0.14)' : 'none', background: p.ctaGhost ? 'rgba(var(--fg),0.06)' : 'linear-gradient(135deg,var(--a2),var(--a3))', color: p.ctaGhost ? 'var(--tx-0)' : '#0a0a12' }}>{p.cta}</button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {p.features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--tx-2)' }}>
                  <Ic d='<path d="M20 6L9 17l-5-5"/>' size={16} sw={2.5} style={{ color: 'var(--a3)', flexShrink: 0, marginTop: 1 }} />{f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
