import {
  PageHead, Avatar, Chip, Ic, btnP, btnG, cardStyle, grad,
} from '../../admin/ui.jsx';

const card = cardStyle;

/* ============ STOREFRONT ============ */
export function Storefront() {
  const prods = [
    ['Aurora Headphones', 'Audio', '$249', '4.8'], ['Pulse Smartwatch', 'Wearables', '$199', '4.7'],
    ['Nova Desk Lamp', 'Home', '$89', '4.9'], ['Drift Speaker', 'Audio', '$129', '4.6'],
    ['Vertex Keyboard', 'Desk', '$159', '4.8'], ['Halo Camera', 'Photo', '$549', '4.9'],
  ];
  const chips = ['All', 'Audio', 'Wearables', 'Home', 'Desk', 'Photo'];
  return (
    <>
      <PageHead crumb="Store / Storefront" title="Storefront" right={<button style={btnG}>Preview live</button>} />
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, background: 'linear-gradient(120deg,rgba(var(--a1rgb),0.9),rgba(var(--a3rgb),0.55))', padding: '44px 40px', marginBottom: 24 }}>
        <div style={{ position: 'absolute', top: -90, right: -40, width: 340, height: 340, background: 'radial-gradient(circle,rgba(255,255,255,0.25),transparent 65%)', filter: 'blur(10px)' }} />
        <div style={{ position: 'relative', maxWidth: 460, color: '#0a0a12' }}>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '5px 13px', borderRadius: 100, background: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Spring sale · up to 30% off</span>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontSize: 34, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>Sound that moves with you.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 22, opacity: 0.85 }}>Premium audio, wearables and desk gear — engineered by Nexus.</p>
          <button style={{ padding: '13px 26px', borderRadius: 11, border: 'none', cursor: 'pointer', fontSize: 14.5, fontWeight: 600, color: '#fff', background: '#0a0a12' }}>Shop the collection</button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {chips.map((c, i) => (
          <button key={c} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 16px', borderRadius: 100, background: i === 0 ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.05)', color: i === 0 ? '#0a0a12' : 'var(--tx-3)', border: `1px solid ${i === 0 ? 'transparent' : 'rgba(var(--fg),0.1)'}` }}>{c}</button>
        ))}
      </div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {prods.map((p, i) => (
          <div key={p[0]} className="nx-card" style={{ ...card, overflow: 'hidden' }}>
            <div style={{ height: 150, background: grad(i) }} />
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 11, color: 'var(--a3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{p[1]}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15.5, fontWeight: 600, marginBottom: 12 }}>{p[0]}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 700 }}>{p[2]}</span>
                <button style={{ ...btnP, padding: '8px 14px', fontSize: 12.5 }}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ PRODUCT DETAIL ============ */
export function ProductDetail() {
  const meta = (l, v) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
      <span style={{ color: 'var(--tx-4)' }}>{l}</span><span style={{ color: 'var(--tx-2)', fontWeight: 500 }}>{v}</span>
    </div>
  );
  const swatch = (c, sel) => <span style={{ width: 32, height: 32, borderRadius: '50%', background: c, border: `2px solid ${sel ? 'var(--tx-0)' : 'transparent'}`, boxShadow: '0 0 0 1px rgba(var(--fg),0.18)', cursor: 'pointer', display: 'inline-block' }} />;
  const thumb = (i, sel) => <div style={{ aspectRatio: '1', borderRadius: 12, background: grad(i), border: `2px solid ${sel ? 'rgba(var(--a1rgb),0.7)' : 'transparent'}`, cursor: 'pointer' }} />;
  const feat = (t, p) => (
    <div style={{ ...card, padding: 18, display: 'flex', gap: 13, alignItems: 'flex-start' }}>
      <span style={{ color: 'var(--a2)', flexShrink: 0 }}><Ic d={p} size={22} /></span>
      <div style={{ fontSize: 13.5, color: 'var(--tx-2)', lineHeight: 1.45 }}>{t}</div>
    </div>
  );
  const rel = (n, pr, i) => (
    <div className="nx-card" style={{ ...card, overflow: 'hidden' }}>
      <div style={{ height: 110, background: grad(i + 1) }} />
      <div style={{ padding: '13px 15px' }}>
        <div style={{ fontFamily: "'Space Grotesk'", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{n}</div>
        <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 700 }}>{pr}</div>
      </div>
    </div>
  );
  const qBtn = { width: 42, height: 46, border: 'none', background: 'rgba(var(--fg),0.04)', color: 'var(--tx-1)', fontSize: 18, cursor: 'pointer' };
  return (
    <>
      <PageHead crumb="Store / Products / Aurora Headphones" title="Product detail" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Edit</button><button style={btnP}>Save changes</button></div>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginBottom: 22 }}>
        <div>
          <div style={{ aspectRatio: '4/3', borderRadius: 18, background: grad(0), position: 'relative', overflow: 'hidden', marginBottom: 14 }}>
            <span style={{ position: 'absolute', top: 14, left: 14, fontSize: 11.5, fontWeight: 600, padding: '5px 12px', borderRadius: 100, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', color: '#fff' }}>In stock · 214 units</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>{thumb(0, true)}{thumb(1)}{thumb(2)}{thumb(3)}</div>
        </div>
        <div>
          <div style={{ fontSize: 11.5, color: 'var(--a3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Audio · Headphones</div>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontSize: 27, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>Aurora Wireless Headphones</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ color: '#febc2e', fontSize: 14 }}>★★★★★</span><span style={{ fontSize: 13, color: 'var(--tx-4)' }}>4.8 · 1,204 reviews</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: "'Space Grotesk'", fontSize: 34, fontWeight: 700 }}>$249</span>
            <span style={{ fontSize: 16, color: 'var(--tx-5)', textDecoration: 'line-through' }}>$329</span>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: 'rgba(var(--a3rgb),0.14)', color: 'var(--a3)' }}>-24%</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--tx-3)', marginBottom: 20 }}>Studio-grade active noise cancellation, 40-hour battery life and immersive spatial audio. Engineered for all-day comfort.</p>
          <div style={{ fontSize: 13, color: 'var(--tx-3)', marginBottom: 10 }}>Color</div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>{swatch('var(--a1)', true)}{swatch('#f472b6')}{swatch('#34d399')}{swatch('#1f2029')}</div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(var(--fg),0.12)', borderRadius: 11, overflow: 'hidden' }}>
              <button style={qBtn}>−</button><span style={{ padding: '0 16px', fontSize: 15, fontWeight: 600 }}>1</span><button style={qBtn}>+</button>
            </div>
            <button style={{ flex: 1, ...btnP, padding: 14 }}>Add to cart · $249</button>
          </div>
          <div style={{ ...card, padding: '16px 18px', display: 'grid', gap: 10 }}>
            {meta('SKU', 'AUR-BLK-01')}{meta('Category', 'Audio · Headphones')}{meta('Shipping', 'Free · 2–4 days')}{meta('Warranty', '2 years')}
          </div>
        </div>
      </div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 26 }}>
        {feat('Active noise cancellation with 3 adaptive modes', '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/>')}
        {feat('40-hour battery — fast charge 10 min = 5 hours', '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/>')}
        {feat('Spatial audio with head-tracking support', '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>')}
      </div>
      <div style={{ fontFamily: "'Space Grotesk'", fontSize: 17, fontWeight: 600, marginBottom: 14 }}>You may also like</div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {rel('Pulse Smartwatch', '$199', 1)}{rel('Drift Speaker', '$129', 2)}{rel('Vertex Keyboard', '$159', 3)}{rel('Halo Camera', '$549', 4)}
      </div>
    </>
  );
}

/* ============ ORDER DETAIL ============ */
export function OrderDetail() {
  const Step = ({ label, date, state }) => {
    const done = state === 'done', now = state === 'now';
    const dot = done ? { background: 'linear-gradient(135deg,var(--a2),var(--a3))', color: '#0a0a12' } : now ? { background: 'rgba(var(--a1rgb),0.18)', color: 'var(--a2)', border: '1px solid rgba(var(--a1rgb),0.5)' } : { background: 'rgba(var(--fg),0.05)', color: 'var(--tx-5)', border: '1px solid rgba(var(--fg),0.12)' };
    return (
      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, ...dot }}>{done ? '✓' : '•'}</span>
          <span style={{ flex: 1, width: 2, background: 'rgba(var(--fg),0.1)', margin: '4px 0', minHeight: 22 }} />
        </div>
        <div style={{ paddingBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: state === 'todo' ? 'var(--tx-5)' : 'var(--tx-1)' }}>{label}</div>
          <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginTop: 2 }}>{date}</div>
        </div>
      </div>
    );
  };
  const Line = ({ n, v, i }) => (
    <tr>
      <td style={{ padding: '14px 0', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <span style={{ width: 44, height: 44, borderRadius: 10, background: grad(i), flexShrink: 0 }} />
          <div><div style={{ fontSize: 13.5, fontWeight: 600 }}>{n[0]}</div><div style={{ fontSize: 12, color: 'var(--tx-4)', marginTop: 2 }}>{n[1]}</div></div>
        </div>
      </td>
      <td style={{ padding: '14px 0', textAlign: 'center', fontSize: 13.5, color: 'var(--tx-2)', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>{n[2]}</td>
      <td style={{ padding: '14px 0', textAlign: 'right', fontSize: 13.5, fontWeight: 600, borderBottom: '1px solid rgba(var(--fg),0.05)' }}>{v}</td>
    </tr>
  );
  const totRow = (l, v, big) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', ...(big ? { fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 700, padding: '12px 0 0', marginTop: 8, borderTop: '1px solid rgba(var(--fg),0.1)' } : { fontSize: 13.5, color: 'var(--tx-3)', padding: '6px 0' }) }}>
      <span>{l}</span><span style={big ? { color: 'var(--a3)' } : undefined}>{v}</span>
    </div>
  );
  return (
    <>
      <PageHead crumb="Management / Orders / #ORD-7841" title="Order #ORD-7841" right={<div style={{ display: 'flex', gap: 10 }}><button style={btnG}>Refund</button><button style={btnP}>Mark as shipped</button></div>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600 }}>Items · 3</div>
              <Chip bg="rgba(var(--a3rgb),0.12)" color="var(--a3)">Paid</Chip>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <Line n={['Aurora Headphones', 'Black · AUR-BLK-01', '1']} v="$249.00" i={0} />
                <Line n={['Vertex Keyboard', 'White · VTX-WHT', '1']} v="$159.00" i={3} />
                <Line n={['USB-C Cable', '2m braided', '2']} v="$38.00" i={4} />
              </tbody>
            </table>
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 18 }}>Timeline</div>
            <Step label="Order placed" date="Mar 12, 2026 · 09:24" state="done" />
            <Step label="Payment confirmed" date="Mar 12, 2026 · 09:25" state="done" />
            <Step label="Packed" date="Mar 12, 2026 · 14:02" state="done" />
            <Step label="Shipped" date="In transit · est. Mar 15" state="now" />
            <Step label="Delivered" date="Pending" state="todo" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 16 }}>Customer</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Avatar g="linear-gradient(135deg,var(--a2),var(--a3))" size={44}>JD</Avatar>
              <div><div style={{ fontSize: 14, fontWeight: 600 }}>Jordan Diaz</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>jordan@acme.com</div></div>
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--tx-4)', lineHeight: 1.7, borderTop: '1px solid rgba(var(--fg),0.07)', paddingTop: 14 }}>
              <strong style={{ color: 'var(--tx-2)', fontWeight: 600 }}>Shipping</strong><br />128 Innovation Drive<br />San Francisco, CA 94107
            </div>
          </div>
          <div style={{ ...card, padding: '22px 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Summary</div>
            {totRow('Subtotal', '$446.00')}{totRow('Shipping', 'Free')}{totRow('Tax (8%)', '$35.68')}{totRow('Total', '$481.68', true)}
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ CHECKOUT ============ */
export function Checkout() {
  const Inp = ({ l, ph }) => (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'block', fontSize: 12.5, color: 'var(--tx-3)', marginBottom: 7 }}>{l}</label>
      <input placeholder={ph} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14, outline: 'none' }} />
    </div>
  );
  const SectionN = ({ n, t }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
      <span style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(135deg,var(--a2),var(--a3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 13, color: '#0a0a12' }}>{n}</span>
      <span style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600 }}>{t}</span>
    </div>
  );
  const Ship = ({ t, sub, price, on }) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', borderRadius: 12, border: `1px solid ${on ? 'rgba(var(--a1rgb),0.5)' : 'rgba(var(--fg),0.1)'}`, background: on ? 'rgba(var(--a1rgb),0.07)' : 'transparent', cursor: 'pointer', marginBottom: 10 }}>
      <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${on ? 'var(--a2)' : 'rgba(var(--fg),0.25)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{on && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--a2)' }} />}</span>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>{t}</div><div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{sub}</div></div>
      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{price}</span>
    </label>
  );
  const sumItem = (n, q, pr, i) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
      <span style={{ width: 46, height: 46, borderRadius: 10, background: grad(i), flexShrink: 0, position: 'relative' }}>
        <span style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', background: 'var(--bg-elev)', border: '1px solid rgba(var(--fg),0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>{q}</span>
      </span>
      <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{n}</div></div>
      <span style={{ fontSize: 13.5, fontWeight: 600 }}>{pr}</span>
    </div>
  );
  const totRow = (l, v, big) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', ...(big ? { fontFamily: "'Space Grotesk'", fontSize: 18, fontWeight: 700, padding: '12px 0 0', marginTop: 6, borderTop: '1px solid rgba(var(--fg),0.1)' } : { fontSize: 13.5, color: 'var(--tx-3)', padding: '6px 0' }) }}>
      <span>{l}</span><span style={big ? { color: 'var(--a3)' } : undefined}>{v}</span>
    </div>
  );
  return (
    <>
      <PageHead crumb="Store / Checkout" title="Checkout" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ ...card, padding: 24 }}><SectionN n="1" t="Contact" /><Inp l="Email address" ph="you@company.com" /><Inp l="Phone" ph="+1 (555) 000-0000" /></div>
          <div style={{ ...card, padding: 24 }}>
            <SectionN n="2" t="Shipping address" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><Inp l="First name" ph="Jordan" /><Inp l="Last name" ph="Diaz" /></div>
            <Inp l="Address" ph="128 Innovation Drive" />
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 12 }}><Inp l="City" ph="San Francisco" /><Inp l="State" ph="CA" /><Inp l="ZIP" ph="94107" /></div>
          </div>
          <div style={{ ...card, padding: 24 }}>
            <SectionN n="3" t="Delivery method" />
            <Ship t="Standard" sub="4–6 business days" price="Free" />
            <Ship t="Express" sub="2–3 business days" price="$12" on />
            <Ship t="Overnight" sub="Next business day" price="$28" />
          </div>
          <div style={{ ...card, padding: 24 }}>
            <SectionN n="4" t="Payment" />
            <Inp l="Card number" ph="4242 4242 4242 4242" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><Inp l="Expiry" ph="MM / YY" /><Inp l="CVC" ph="123" /></div>
          </div>
        </div>
        <div>
          <div style={{ ...card, padding: 24, position: 'sticky', top: 20 }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 18 }}>Order summary</div>
            {sumItem('Aurora Headphones', '1', '$249.00', 0)}{sumItem('Vertex Keyboard', '1', '$159.00', 3)}{sumItem('USB-C Cable', '2', '$38.00', 4)}
            <div style={{ display: 'flex', gap: 8, margin: '16px 0' }}>
              <input placeholder="Promo code" style={{ flex: 1, padding: '10px 12px', borderRadius: 9, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 13, outline: 'none' }} />
              <button style={{ ...btnG, padding: '10px 14px' }}>Apply</button>
            </div>
            <div style={{ borderTop: '1px solid rgba(var(--fg),0.07)', paddingTop: 12 }}>
              {totRow('Subtotal', '$446.00')}{totRow('Shipping (Express)', '$12.00')}{totRow('Tax (8%)', '$35.68')}{totRow('Total', '$493.68', true)}
            </div>
            <button style={{ width: '100%', marginTop: 18, ...btnP, padding: 14 }}>Place order</button>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--tx-5)', marginTop: 12 }}>🔒 Secure 256-bit SSL checkout</div>
          </div>
        </div>
      </div>
    </>
  );
}
