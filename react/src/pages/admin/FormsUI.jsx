import { useState } from 'react';
import Chart from '../../admin/Chart.jsx';
import {
  Panel, PageHead, Ic, btnP, btnG, cardStyle, heading, subheading,
} from '../../admin/ui.jsx';
import { accDefs } from '../../data/adminData.js';

const card = cardStyle;
const inputStyle = { width: '100%', padding: '13px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14.5, outline: 'none' };
const Label = ({ children }) => <label style={{ display: 'block', fontSize: 13, color: 'var(--tx-3)', marginBottom: 8 }}>{children}</label>;

/* ============ FORM ELEMENTS ============ */
export function FormElements() {
  return (
    <>
      <PageHead crumb="Forms & UI / Form elements" title="Form elements" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Inputs</div>
          <div style={{ marginBottom: 16 }}><Label>Text input</Label><input placeholder="Enter your name" style={inputStyle} /></div>
          <div style={{ marginBottom: 16 }}><Label>Email</Label><input type="email" placeholder="you@company.com" style={inputStyle} /></div>
          <div style={{ marginBottom: 16 }}><Label>Password</Label><input type="password" placeholder="••••••••" style={inputStyle} /></div>
          <div style={{ marginBottom: 16 }}><Label>Textarea</Label><textarea rows={3} placeholder="Write something..." style={{ ...inputStyle, resize: 'vertical' }} /></div>
          <div><Label>Select</Label><select style={inputStyle}><option>United States</option><option>Vietnam</option><option>Japan</option></select></div>
        </Panel>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Controls</div>
          <div style={{ marginBottom: 20 }}>
            <Label>Checkboxes</Label>
            {['Email notifications', 'SMS alerts', 'Weekly digest'].map((t, i) => (
              <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--tx-2)', marginBottom: 10, cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked={i < 2} style={{ accentColor: 'var(--a1)', width: 16, height: 16 }} />{t}
              </label>
            ))}
          </div>
          <div style={{ marginBottom: 20 }}>
            <Label>Radio</Label>
            {['Standard', 'Express', 'Overnight'].map((t, i) => (
              <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--tx-2)', marginBottom: 10, cursor: 'pointer' }}>
                <input type="radio" name="ship" defaultChecked={i === 1} style={{ accentColor: 'var(--a1)', width: 16, height: 16 }} />{t}
              </label>
            ))}
          </div>
          <div>
            <Label>Toggles</Label>
            {[true, false].map((on, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ width: 44, height: 26, borderRadius: 100, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.12)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff' }} />
                </span>
                <span style={{ fontSize: 14, color: 'var(--tx-2)' }}>{on ? 'Enabled' : 'Disabled'}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

/* ============ FORM WIZARD ============ */
export function FormWizard() {
  const [step, setStep] = useState(1);
  const steps = [[1, 'Account'], [2, 'Workspace'], [3, 'Team'], [4, 'Done']];
  const Field = ({ label, type = 'text', ph }) => (
    <div style={{ marginBottom: 16 }}><Label>{label}</Label><input type={type} placeholder={ph} style={inputStyle} /></div>
  );
  return (
    <>
      <PageHead crumb="Forms & UI / Form wizard" title="Form wizard" />
      <div style={{ ...card, padding: 32, maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          {steps.map((s) => {
            const done = step > s[0], active = step === s[0];
            return (
              <div key={s[0]} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, position: 'relative' }}>
                <span style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 15, zIndex: 1, background: (active || done) ? 'linear-gradient(135deg,var(--a2),var(--a3))' : '#12121c', color: (active || done) ? 'var(--bg)' : 'var(--tx-4)', border: `1px solid ${(active || done) ? 'transparent' : 'rgba(var(--fg),0.12)'}` }}>{done ? '✓' : s[0]}</span>
                <span style={{ fontSize: 12.5, marginTop: 8, color: (active || done) ? 'var(--tx-1)' : 'var(--tx-4)' }}>{s[1]}</span>
              </div>
            );
          })}
        </div>
        <div style={{ minHeight: 220 }}>
          {step === 1 && <><div style={{ ...heading, marginBottom: 18 }}>Create your account</div><Field label="Full name" ph="Alex Morgan" /><Field label="Email" type="email" ph="alex@nexus.io" /><Field label="Password" type="password" ph="••••••••" /></>}
          {step === 2 && <><div style={{ ...heading, marginBottom: 18 }}>Name your workspace</div><Field label="Workspace name" ph="Nexus Inc." /><Field label="Website" ph="nexus.io" /><div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 6 }}>You can invite teammates in the next step.</div></>}
          {step === 3 && <><div style={{ ...heading, marginBottom: 18 }}>Invite your team</div><Field label="Teammate email" type="email" ph="teammate@company.com" /><Field label="Another email" type="email" ph="optional" /><div style={{ fontSize: 13, color: 'var(--tx-4)', marginTop: 6 }}>Or skip and invite people later.</div></>}
          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,var(--a2),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a12', margin: '0 auto 18px' }}><Ic d='<path d="M20 6L9 17l-5-5"/>' size={30} sw={2.5} /></div>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>You’re all set!</div>
              <div style={{ fontSize: 14, color: '#a6a6b6' }}>Your workspace is ready. Let’s start building.</div>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button onClick={() => setStep((s) => Math.max(1, s - 1))} style={{ ...btnG, visibility: step === 1 ? 'hidden' : 'visible' }}>Back</button>
          <button onClick={() => setStep((s) => Math.min(4, s + 1))} style={btnP}>{step >= 4 ? 'Finish' : 'Continue'}</button>
        </div>
      </div>
    </>
  );
}

/* ============ UI COMPONENTS ============ */
export function UIComponents() {
  const [accordion, setAccordion] = useState(0);
  const [modal, setModal] = useState(false);
  return (
    <>
      <PageHead crumb="Forms & UI / UI components" title="UI components" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Buttons</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
            <button style={btnP}>Primary</button>
            <button style={{ ...btnG, color: 'var(--tx-1)' }}>Secondary</button>
            <button style={{ padding: '11px 18px', borderRadius: 10, border: '1px solid rgba(var(--a1rgb),0.5)', background: 'transparent', color: 'var(--a2)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>Outline</button>
            <button style={{ padding: '11px 18px', borderRadius: 10, border: 'none', background: 'transparent', color: 'var(--tx-3)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>Ghost</button>
          </div>
          <div style={{ ...heading, fontSize: 16, margin: '20px 0 14px' }}>Badges</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: 'rgba(var(--a3rgb),0.14)', color: 'var(--a3)' }}>Success</span>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: 'rgba(254,188,46,0.14)', color: '#febc2e' }}>Warning</span>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: 'rgba(255,122,144,0.14)', color: '#ff7a90' }}>Danger</span>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: 'rgba(var(--a1rgb),0.16)', color: '#c9beff' }}>Info</span>
          </div>
        </Panel>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Alerts</div>
          {[['rgba(var(--a3rgb),0.12)', 'var(--a3)', 'Payment received successfully.'], ['rgba(254,188,46,0.12)', '#febc2e', 'Your trial ends in 3 days.'], ['rgba(255,122,144,0.12)', '#ff7a90', 'Failed to sync — please retry.']].map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', borderRadius: 11, background: a[0], border: `1px solid ${a[1]}33`, marginBottom: 12 }}>
              <span style={{ color: a[1], flexShrink: 0 }}><Ic d='<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>' size={18} /></span>
              <span style={{ fontSize: 13.5, color: 'var(--tx-2)' }}>{a[2]}</span>
            </div>
          ))}
          <div style={{ ...heading, fontSize: 16, margin: '20px 0 14px' }}>Progress</div>
          {[72, 45, 90].map((p, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ height: 8, borderRadius: 100, background: 'rgba(var(--fg),0.08)', overflow: 'hidden' }}>
                <div style={{ width: `${p}%`, height: '100%', background: 'linear-gradient(90deg,var(--a2),var(--a3))' }} />
              </div>
            </div>
          ))}
        </Panel>
      </div>
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Accordion</div>
          {accDefs.map((a, i) => (
            <div key={i} style={{ borderRadius: 12, border: '1px solid rgba(var(--fg),0.08)', marginBottom: 10, overflow: 'hidden' }}>
              <button onClick={() => setAccordion((v) => (v === i ? -1 : i))} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: 'rgba(var(--fg),0.02)', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--tx-1)', textAlign: 'left' }}>
                {a[0]}<span style={{ transform: accordion === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .2s', display: 'flex' }}><Ic d='<path d="M6 9l6 6 6-6"/>' size={18} /></span>
              </button>
              {accordion === i && <div style={{ padding: '0 16px 16px', fontSize: 13, lineHeight: 1.6, color: 'var(--tx-3)' }}>{a[1]}</div>}
            </div>
          ))}
        </Panel>
        <Panel style={{ padding: 26 }}>
          <div style={{ ...heading, fontSize: 16, marginBottom: 18 }}>Modal & tooltip</div>
          <button onClick={() => setModal(true)} style={btnP}>Open modal</button>
          <p style={{ fontSize: 13.5, color: 'var(--tx-4)', marginTop: 16, lineHeight: 1.6 }}>Click the button to open a centered modal dialog with a backdrop. Press the button inside or the backdrop to close it.</p>
        </Panel>
      </div>
      {modal && (
        <div onClick={() => setModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 420, background: 'var(--bg-elev)', border: '1px solid rgba(var(--fg),0.1)', borderRadius: 18, padding: 28, boxShadow: '0 30px 70px rgba(0,0,0,0.5)' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 19, fontWeight: 600, marginBottom: 10 }}>Delete workspace?</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--tx-3)', marginBottom: 24 }}>This action cannot be undone. All projects, files and members in this workspace will be permanently removed.</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button onClick={() => setModal(false)} style={{ ...btnG, color: 'var(--tx-1)' }}>Cancel</button>
              <button onClick={() => setModal(false)} style={{ ...btnP, background: 'linear-gradient(135deg,#ff7a90,#f97316)' }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ============ CHARTS GALLERY ============ */
export function ChartsGallery() {
  const specs = [
    { title: 'Line', build: (c) => ({ type: 'line', height: 260, options: { colors: [c.a1, c.a3], stroke: { curve: 'smooth', width: 2.5 }, xaxis: { categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] } }, series: [{ name: 'This week', data: [10, 41, 35, 51, 49, 62, 69] }, { name: 'Last week', data: [6, 18, 25, 28, 40, 44, 55] }] }) },
    { title: 'Area', build: (c) => ({ type: 'area', height: 260, options: { colors: [c.a3], stroke: { curve: 'smooth', width: 2.5 }, fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.02, stops: [0, 90] } }, xaxis: { categories: ['1', '2', '3', '4', '5', '6', '7', '8'] } }, series: [{ name: 'Views', data: [31, 40, 28, 51, 42, 71, 60, 82] }] }) },
    { title: 'Bar', build: (c) => ({ type: 'bar', height: 260, options: { colors: [c.a1], plotOptions: { bar: { borderRadius: 6, columnWidth: '50%' } }, xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] } }, series: [{ name: 'Sales', data: [44, 55, 41, 67, 52, 70, 58] }] }) },
    { title: 'Donut', build: (c) => ({ type: 'donut', height: 260, options: { colors: [c.a1, c.a3, c.a2, '#febc2e'], labels: ['Organic', 'Direct', 'Referral', 'Social'], stroke: { width: 0 }, plotOptions: { pie: { donut: { size: '70%' } } }, legend: { position: 'bottom', labels: { colors: c.tx } } }, series: [44, 25, 20, 11] }) },
    { title: 'Radial', build: (c) => ({ type: 'radialBar', height: 260, options: { colors: [c.a1, c.a3, c.a2], labels: ['Sales', 'Traffic', 'Signups'], plotOptions: { radialBar: { hollow: { size: '38%' } } }, legend: { show: true, position: 'bottom', labels: { colors: c.tx } } }, series: [76, 58, 42] }) },
    { title: 'Stacked bar', build: (c) => ({ type: 'bar', height: 260, options: { chart: { stacked: true }, colors: [c.a1, c.a3], plotOptions: { bar: { borderRadius: 5, columnWidth: '55%' } }, xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'] } }, series: [{ name: 'New', data: [23, 34, 28, 41, 35] }, { name: 'Returning', data: [18, 22, 19, 27, 24] }] }) },
  ];
  return (
    <>
      <PageHead crumb="Forms & UI / Charts" title="Charts gallery" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {specs.map((s) => (
          <Panel key={s.title}>
            <div style={{ ...heading, marginBottom: 10 }}>{s.title}</div>
            <Chart build={s.build} />
          </Panel>
        ))}
      </div>
    </>
  );
}
