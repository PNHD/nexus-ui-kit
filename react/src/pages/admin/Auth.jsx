import { Link } from 'react-router-dom';
import { Ic } from '../../admin/ui.jsx';

const input = { width: '100%', padding: '13px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14.5, outline: 'none' };
const primary = { width: '100%', padding: 14, borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: '#0a0a12', background: 'linear-gradient(135deg,var(--a2),var(--a3))', boxShadow: '0 8px 24px rgba(var(--a1rgb),0.3)' };

function Field({ label, type = 'text', ph }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontSize: 13, color: 'var(--tx-3)', marginBottom: 8 }}>{label}</label>
      <input type={type} placeholder={ph} style={input} />
    </div>
  );
}
function Head({ t, s }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>{t}</h1>
      <p style={{ fontSize: 14, color: 'var(--tx-4)' }}>{s}</p>
    </div>
  );
}

/** Two-column split shell (login / register / forgot / lock). */
function SplitShell({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div className="nx-authvis" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg,#12121c,var(--bg))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <div style={{ position: 'absolute', top: -160, left: -100, width: 520, height: 520, background: 'radial-gradient(circle,rgba(var(--a1rgb),0.28),transparent 65%)', filter: 'blur(20px)' }} />
        <div style={{ position: 'absolute', bottom: -180, right: -120, width: 520, height: 520, background: 'radial-gradient(circle,rgba(var(--a3rgb),0.18),transparent 65%)', filter: 'blur(20px)' }} />
        <div style={{ position: 'relative', maxWidth: 400, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg,var(--a1),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: "'Space Grotesk'", color: '#0a0a12' }}>N</span>
            <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 20 }}>Nexus Admin</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontSize: 30, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 16 }}>The dashboard your team will actually love.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#a6a6b6' }}>Powerful analytics, beautiful components, and 40+ ready-made pages — everything you need to launch faster.</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: 'var(--bg)' }}>{children}</div>
    </div>
  );
}

/** Centered boxed shell (boxed / otp / two-factor). */
function BoxedShell({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg,#12121c,var(--bg))' }}>
      <div style={{ position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)', width: 680, height: 560, background: 'radial-gradient(circle,rgba(var(--a1rgb),0.24),transparent 65%)', filter: 'blur(24px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -200, right: -120, width: 520, height: 520, background: 'radial-gradient(circle,rgba(var(--a3rgb),0.16),transparent 65%)', filter: 'blur(24px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 430 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11, marginBottom: 24 }}>
          <span style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,var(--a1),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: "'Space Grotesk'", color: '#0a0a12', boxShadow: '0 8px 22px rgba(var(--a1rgb),0.4)' }}>N</span>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 20, color: 'var(--tx-0)' }}>Nexus Admin</span>
        </div>
        <div style={{ background: 'var(--bg-elev)', border: '1px solid rgba(var(--fg),0.1)', borderRadius: 20, padding: '36px 34px', boxShadow: '0 30px 70px rgba(0,0,0,0.4)' }}>{children}</div>
      </div>
    </div>
  );
}

function CHead({ t, s }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 24 }}>
      <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 23, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8, color: 'var(--tx-0)' }}>{t}</h1>
      <p style={{ fontSize: 13.5, color: 'var(--tx-4)', lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: s }} />
    </div>
  );
}
function OtpBoxes({ vals }) {
  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', margin: '8px 0 24px' }}>
      {vals.map((v, i) => (
        <input key={i} maxLength={1} defaultValue={v} style={{ width: 52, height: 60, textAlign: 'center', fontFamily: "'Space Grotesk'", fontSize: 24, fontWeight: 600, color: 'var(--tx-0)', background: 'rgba(var(--fg),0.04)', border: `1px solid ${v ? 'rgba(var(--a1rgb),0.6)' : 'rgba(var(--fg),0.14)'}`, borderRadius: 12, outline: 'none', boxShadow: v ? '0 0 0 3px rgba(var(--a1rgb),0.12)' : 'none' }} />
      ))}
    </div>
  );
}

export function Login() {
  return (
    <SplitShell>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <Head t="Welcome back" s="Sign in to your Nexus account" />
        <Field label="Email address" type="email" ph="you@company.com" />
        <Field label="Password" type="password" ph="••••••••" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, fontSize: 13 }}>
          <label style={{ color: 'var(--tx-3)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" style={{ accentColor: 'var(--a1)' }} />Remember me</label>
          <Link to="/forgot" style={{ color: 'var(--a2)', textDecoration: 'none' }}>Forgot password?</Link>
        </div>
        <button style={primary}>Sign in</button>
        <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--tx-4)', marginTop: 20 }}>Don’t have an account? <Link to="/register" style={{ color: 'var(--a2)', textDecoration: 'none', fontWeight: 600 }}>Sign up</Link></div>
      </div>
    </SplitShell>
  );
}

export function Register() {
  return (
    <SplitShell>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <Head t="Create your account" s="Start your 14-day free trial" />
        <Field label="Full name" ph="Jane Doe" />
        <Field label="Email address" type="email" ph="you@company.com" />
        <Field label="Password" type="password" ph="Create a password" />
        <div style={{ margin: '6px 0 20px', fontSize: 12.5, color: 'var(--tx-4)', display: 'flex', alignItems: 'center', gap: 8 }}><input type="checkbox" style={{ accentColor: 'var(--a1)' }} />I agree to the Terms & Privacy Policy</div>
        <button style={primary}>Create account</button>
        <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--tx-4)', marginTop: 20 }}>Already have an account? <Link to="/login" style={{ color: 'var(--a2)', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link></div>
      </div>
    </SplitShell>
  );
}

export function Forgot() {
  return (
    <SplitShell>
      <div style={{ width: '100%', maxWidth: 380 }}>
        <Head t="Forgot password?" s="Enter your email and we'll send a reset link" />
        <Field label="Email address" type="email" ph="you@company.com" />
        <div style={{ height: 6 }} />
        <button style={primary}>Send reset link</button>
        <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--tx-4)', marginTop: 20 }}><Link to="/login" style={{ color: 'var(--a2)', textDecoration: 'none', fontWeight: 600 }}>← Back to sign in</Link></div>
      </div>
    </SplitShell>
  );
}

export function Lock() {
  return (
    <SplitShell>
      <div style={{ width: '100%', maxWidth: 360, textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,var(--a2),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 26, color: '#0a0a12', margin: '0 auto 18px' }}>AM</div>
        <h1 style={{ fontFamily: "'Space Grotesk'", fontSize: 24, fontWeight: 600, marginBottom: 6 }}>Alex Morgan</h1>
        <p style={{ fontSize: 14, color: 'var(--tx-4)', marginBottom: 22 }}>Screen locked — enter your password to continue</p>
        <div style={{ textAlign: 'left' }}><Field label="Password" type="password" ph="••••••••" /></div>
        <button style={primary}>Unlock</button>
      </div>
    </SplitShell>
  );
}

export function LoginBoxed() {
  const Social = ({ label, icon }) => (
    <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, padding: 11, borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-1)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}><Ic d={icon} size={17} />{label}</button>
  );
  return (
    <BoxedShell>
      <CHead t="Sign in" s="Welcome back — please enter your details" />
      <div style={{ display: 'flex', gap: 10 }}>
        <Social label="Google" icon='<circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18"/>' />
        <Social label="SSO" icon='<path d="M21 2l-2 2m-7.6 7.6a5 5 0 1 0-1.4 1.4l3-3M15 6l3 3M20 5l1 1"/>' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}><span style={{ flex: 1, height: 1, background: 'rgba(var(--fg),0.1)' }} /><span style={{ fontSize: 12, color: 'var(--tx-5)' }}>or continue with email</span><span style={{ flex: 1, height: 1, background: 'rgba(var(--fg),0.1)' }} /></div>
      <Field label="Email address" type="email" ph="you@company.com" />
      <Field label="Password" type="password" ph="••••••••" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, fontSize: 13 }}>
        <label style={{ color: 'var(--tx-3)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" style={{ accentColor: 'var(--a1)' }} />Remember me</label>
        <Link to="/forgot" style={{ color: 'var(--a2)', textDecoration: 'none' }}>Forgot?</Link>
      </div>
      <button style={primary}>Sign in</button>
      <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--tx-4)', marginTop: 20 }}>Don’t have an account? <Link to="/register" style={{ color: 'var(--a2)', textDecoration: 'none', fontWeight: 600 }}>Sign up</Link></div>
    </BoxedShell>
  );
}

export function Otp() {
  return (
    <BoxedShell>
      <div style={{ width: 56, height: 56, borderRadius: 15, background: 'rgba(var(--a1rgb),0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--a2)', margin: '0 auto 20px' }}><Ic d='<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>' size={26} /></div>
      <CHead t="Verify your email" s='We sent a 6-digit code to <strong style="color:var(--tx-2);">you@company.com</strong>' />
      <OtpBoxes vals={['4', '1', '7', '', '', '']} />
      <button style={primary}>Verify code</button>
      <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--tx-4)', marginTop: 20 }}>Didn’t get a code? <span style={{ color: 'var(--tx-5)' }}>Resend in 0:42</span></div>
    </BoxedShell>
  );
}

export function TwoFactor() {
  const MethodPill = ({ label, on }) => (
    <button style={{ flex: 1, padding: '8px 6px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 12.5, fontWeight: 600, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'transparent', color: on ? '#0a0a12' : 'var(--tx-3)' }}>{label}</button>
  );
  return (
    <BoxedShell>
      <div style={{ width: 56, height: 56, borderRadius: 15, background: 'rgba(var(--a1rgb),0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--a2)', margin: '0 auto 20px' }}><Ic d='<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/>' size={26} /></div>
      <CHead t="Two-factor authentication" s="Enter the 6-digit code from your authenticator app" />
      <div style={{ display: 'flex', gap: 6, marginBottom: 18, padding: 5, borderRadius: 12, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.1)' }}>
        <MethodPill label="Authenticator" on /><MethodPill label="SMS code" /><MethodPill label="Backup" />
      </div>
      <OtpBoxes vals={['', '', '', '', '', '']} />
      <button style={primary}>Verify & continue</button>
      <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--tx-4)', marginTop: 18 }}><label style={{ display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer' }}><input type="checkbox" style={{ accentColor: 'var(--a1)' }} />Trust this device for 30 days</label></div>
    </BoxedShell>
  );
}
