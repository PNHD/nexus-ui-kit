import { useMemo, useState } from 'react';
import {
  Panel, PageHead, Avatar, Chip, Th, Ic, btnP, cardStyle, dotsIcon,
} from '../../admin/ui.jsx';
import { usersAll, ordersAll, oStat, productsAll, productCatNames } from '../../data/adminData.js';

const PAGE_SIZE = 8;

/* ============ USERS ============ */
export function Users() {
  const [search, setSearch] = useState('');
  const [asc, setAsc] = useState(true);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = q ? usersAll.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) : usersAll.slice();
    list.sort((a, b) => (asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    return list;
  }, [search, asc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const cur = Math.min(page, totalPages);
  const start = (cur - 1) * PAGE_SIZE;
  const paged = filtered.slice(start, start + PAGE_SIZE);
  const pageInfo = filtered.length ? `Showing ${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} of ${filtered.length}` : 'No users found';

  return (
    <>
      <PageHead
        crumb="Management / Users"
        title="Users"
        right={<button style={btnP}>+ Add user</button>}
      />
      <div style={{ ...cardStyle, overflow: 'hidden' }}>
        <div style={{ padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.08)', borderRadius: 10, padding: '9px 13px', flex: 1, minWidth: 220 }}>
            <Ic d='<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>' size={16} sw={2} style={{ color: 'var(--tx-5)' }} />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search users by name or email..."
              style={{ background: 'none', border: 'none', outline: 'none', color: 'var(--tx-1)', fontSize: 13.5, width: '100%' }}
            />
          </div>
          <div style={{ fontSize: 13, color: 'var(--tx-4)' }}>{usersAll.length} users</div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
            <thead>
              <tr style={{ textAlign: 'left', background: 'rgba(var(--fg),0.02)' }}>
                <th onClick={() => setAsc((v) => !v)} style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--tx-4)', padding: '14px 16px' }}>
                  Name {asc ? '↑' : '↓'}
                </th>
                <Th>Role</Th><Th>Status</Th><Th>Last active</Th>
                <th style={{ padding: '14px 16px', width: 60 }} />
              </tr>
            </thead>
            <tbody>
              {paged.map((u) => (
                <tr key={u.email} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Avatar g={u.color} size={38}>{u.initials}</Avatar>
                      <div>
                        <div style={{ fontSize: 13.5, fontWeight: 500 }}>{u.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--tx-4)' }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-2)' }}>{u.role}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{ fontSize: 11.5, fontWeight: 600, padding: '4px 11px', borderRadius: 100, background: u.statusBg, color: u.statusColor, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: u.statusColor }} />{u.status}
                    </span>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{u.lastActive}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--tx-5)', cursor: 'pointer', padding: 4 }}>
                      <Ic d={dotsIcon} size={18} fill="currentColor" sw={0} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '15px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, borderTop: '1px solid rgba(var(--fg),0.05)' }}>
          <div style={{ fontSize: 13, color: 'var(--tx-4)' }}>{pageInfo}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} style={{ background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.1)', color: 'var(--tx-2)', fontSize: 13, padding: '8px 14px', borderRadius: 9, cursor: 'pointer' }}>Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
              const on = n === cur;
              return (
                <button key={n} onClick={() => setPage(n)} style={{ background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.04)', border: `1px solid ${on ? 'transparent' : 'rgba(var(--fg),0.1)'}`, color: on ? 'var(--bg)' : 'var(--tx-2)', fontSize: 13, width: 36, height: 36, borderRadius: 9, cursor: 'pointer' }}>{n}</button>
              );
            })}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} style={{ background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.1)', color: 'var(--tx-2)', fontSize: 13, padding: '8px 14px', borderRadius: 9, cursor: 'pointer' }}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ ORDERS ============ */
export function Orders() {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? ordersAll : ordersAll.filter((o) => o.status === filter);
  const tabs = ['all', 'Paid', 'Pending', 'Refunded', 'Cancelled'];

  return (
    <>
      <PageHead
        crumb="Management / Orders"
        title="Orders"
        right={<button style={btnP}>+ New order</button>}
      />
      <div style={{ ...cardStyle, overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px', display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>
          {tabs.map((t) => {
            const on = filter === t;
            const cnt = t === 'all' ? ordersAll.length : ordersAll.filter((o) => o.status === t).length;
            return (
              <button key={t} onClick={() => setFilter(t)} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 9, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.04)', color: on ? 'var(--bg)' : 'var(--tx-2)', border: `1px solid ${on ? 'transparent' : 'rgba(var(--fg),0.1)'}`, display: 'flex', alignItems: 'center', gap: 7 }}>
                {t === 'all' ? 'All' : t}<span style={{ fontSize: 11, opacity: 0.75 }}>{cnt}</span>
              </button>
            );
          })}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
            <thead>
              <tr style={{ textAlign: 'left', background: 'rgba(var(--fg),0.02)' }}>
                <Th>Order</Th><Th>Customer</Th><Th>Date</Th><Th>Status</Th><Th>Total</Th>
                <th style={{ padding: '14px 16px', width: 50 }} />
              </tr>
            </thead>
            <tbody>
              {list.map((o) => (
                <tr key={o.id} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                  <td style={{ padding: '13px 16px', fontSize: 13.5, fontWeight: 600, color: '#c9beff' }}>{o.id}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <Avatar g={o.color} size={34}>{o.initials}</Avatar>
                      <span style={{ fontSize: 13.5 }}>{o.customer}</span>
                    </div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 13, color: 'var(--tx-4)' }}>{o.date}</td>
                  <td style={{ padding: '13px 16px' }}><Chip bg={oStat[o.status].bg} color={oStat[o.status].c}>{o.status}</Chip></td>
                  <td style={{ padding: '13px 16px', fontSize: 13.5, fontWeight: 600 }}>{o.total}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--tx-5)', cursor: 'pointer', padding: 4 }}>
                      <Ic d={dotsIcon} size={18} fill="currentColor" sw={0} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '15px 18px', fontSize: 13, color: 'var(--tx-4)', borderTop: '1px solid rgba(var(--fg),0.05)' }}>
          {list.length} order{list.length === 1 ? '' : 's'}
        </div>
      </div>
    </>
  );
}

/* ============ PRODUCTS ============ */
export function Products() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? productsAll : productsAll.filter((p) => p.cat === cat);

  return (
    <>
      <PageHead
        crumb="Management / Products"
        title="Products"
        right={<button style={btnP}>+ Add product</button>}
      />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
        {productCatNames.map((c) => {
          const on = cat === c;
          return (
            <button key={c} onClick={() => setCat(c)} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 16px', borderRadius: 100, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.04)', color: on ? 'var(--bg)' : 'var(--tx-2)', border: `1px solid ${on ? 'transparent' : 'rgba(var(--fg),0.1)'}` }}>{c}</button>
          );
        })}
      </div>
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {list.map((p) => (
          <div key={p.name} className="nx-card" style={{ ...cardStyle, overflow: 'hidden' }}>
            <div style={{ height: 150, background: p.color, position: 'relative' }}>
              <span style={{ position: 'absolute', top: 12, right: 12, fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', color: p.stockColor }}>{p.stockLabel}</span>
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 11, color: 'var(--a3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 7 }}>{p.cat}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{p.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Space Grotesk'", fontSize: 19, fontWeight: 700 }}>{p.price}</span>
                <span style={{ fontSize: 13, color: '#febc2e' }}>★ {p.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
