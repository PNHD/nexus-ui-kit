import { useMemo, useState } from 'react';
import {
  PageHead, Avatar, Chip, Ic, btnP, btnG, cardStyle,
} from '../../admin/ui.jsx';
import {
  chatConvos, mailFolderDefs, mails, calEvents, weekdays, kanbanCols, initialTodos, tPri, folders, files,
} from '../../data/adminData.js';

const card = cardStyle;

/* ============ CHAT ============ */
export function Chat() {
  const [active, setActive] = useState(0);
  const conv = chatConvos[active];
  return (
    <>
      <PageHead crumb="Apps / Chat" title="Chat" />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 20, height: 620 }}>
        <div style={{ ...card, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '16px 16px 10px', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.08)', borderRadius: 10, padding: '9px 13px' }}>
              <Ic d='<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>' size={16} sw={2} style={{ color: 'var(--tx-5)' }} />
              <input placeholder="Search chats..." style={{ background: 'none', border: 'none', outline: 'none', color: 'var(--tx-1)', fontSize: 13.5, width: '100%' }} />
            </div>
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: 8 }}>
            {chatConvos.map((c, i) => (
              <button key={c.name} onClick={() => setActive(i)} style={{ width: '100%', textAlign: 'left', display: 'flex', gap: 12, padding: '11px 12px', borderRadius: 11, cursor: 'pointer', border: 'none', background: i === active ? 'rgba(var(--a1rgb),0.12)' : 'transparent', marginBottom: 2 }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <Avatar g={c.color} size={42}>{c.initials}</Avatar>
                  <span style={{ position: 'absolute', bottom: 1, right: 1, width: 10, height: 10, borderRadius: '50%', background: c.dot, border: '2px solid var(--bg-elev)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}><span style={{ fontSize: 13.5, fontWeight: 600 }}>{c.name}</span><span style={{ fontSize: 11.5, color: 'var(--tx-5)' }}>{c.time}</span></div>
                  <div style={{ fontSize: 12.5, color: 'var(--tx-4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 2 }}>{c.last}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div style={{ ...card, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 20px', borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
            <Avatar g={conv.color} size={40}>{conv.initials}</Avatar>
            <div><div style={{ fontSize: 14.5, fontWeight: 600 }}>{conv.name}</div><div style={{ fontSize: 12, color: 'var(--a3)' }}>{conv.status}</div></div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {conv.messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.me ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                <div style={{ maxWidth: '72%', fontSize: 14, lineHeight: 1.5, padding: '11px 15px', ...(m.me ? { borderRadius: '14px 14px 4px 14px', background: 'linear-gradient(135deg,var(--a2),var(--a3))', color: '#0a0a12' } : { borderRadius: '14px 14px 14px 4px', background: 'rgba(var(--fg),0.06)', border: '1px solid rgba(var(--fg),0.08)', color: 'var(--tx-1)' }) }}>
                  {m.text}
                  <div style={{ fontSize: 10.5, opacity: 0.7, marginTop: 4, textAlign: 'right' }}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(var(--fg),0.07)', display: 'flex', gap: 10, alignItems: 'center' }}>
            <input placeholder="Type a message…" style={{ flex: 1, padding: '12px 15px', borderRadius: 11, background: 'rgba(var(--fg),0.04)', border: '1px solid rgba(var(--fg),0.12)', color: 'var(--tx-0)', fontSize: 14, outline: 'none' }} />
            <button style={{ ...btnP, padding: '12px 18px' }}><Ic d='<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>' size={18} /></button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ EMAIL ============ */
export function Email() {
  const [active, setActive] = useState(0);
  const mail = mails[active];
  return (
    <>
      <PageHead crumb="Apps / Email" title="Email" right={<button style={btnP}>+ Compose</button>} />
      <div className="nx-2col" style={{ display: 'grid', gridTemplateColumns: '190px 320px 1fr', gap: 16, height: 640 }}>
        <div style={{ ...card, padding: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {mailFolderDefs.map((f, i) => (
            <button key={f.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 9, cursor: 'pointer', border: 'none', textAlign: 'left', fontSize: 13.5, fontWeight: 600, background: i === 0 ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.04)', color: i === 0 ? '#0a0a12' : 'var(--tx-2)' }}>
              {f.name}{f.count && <span style={{ fontSize: 11.5, opacity: 0.85 }}>{f.count}</span>}
            </button>
          ))}
        </div>
        <div style={{ ...card, overflowY: 'auto' }}>
          {mails.map((e, i) => (
            <button key={e.subject} onClick={() => setActive(i)} style={{ width: '100%', textAlign: 'left', display: 'block', padding: '14px 16px', cursor: 'pointer', border: 'none', borderBottom: '1px solid rgba(var(--fg),0.05)', borderLeft: `3px solid ${i === active ? 'var(--a1)' : e.unread ? 'var(--a3)' : 'transparent'}`, background: i === active ? 'rgba(var(--a1rgb),0.1)' : 'transparent' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}><span style={{ fontSize: 13.5, fontWeight: e.unread ? 600 : 400 }}>{e.from}</span><span style={{ fontSize: 11.5, color: 'var(--tx-5)' }}>{e.time}</span></div>
              <div style={{ fontSize: 13, fontWeight: e.unread ? 600 : 400, marginTop: 3 }}>{e.subject}</div>
              <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.preview}</div>
            </button>
          ))}
        </div>
        <div style={{ ...card, padding: 28, overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(var(--fg),0.06)' }}>
            <Avatar g={mail.color} size={46}>{mail.initials}</Avatar>
            <div style={{ flex: 1 }}><div style={{ fontSize: 15, fontWeight: 600 }}>{mail.from}</div><div style={{ fontSize: 12.5, color: 'var(--tx-4)' }}>{mail.email}</div></div>
            <span style={{ fontSize: 12.5, color: 'var(--tx-5)' }}>{mail.time}</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 600, marginBottom: 18 }}>{mail.subject}</h2>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--tx-2)' }} dangerouslySetInnerHTML={{ __html: mail.body }} />
          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}><button style={btnP}>Reply</button><button style={btnG}>Forward</button></div>
        </div>
      </div>
    </>
  );
}

/* ============ CALENDAR ============ */
export function Calendar() {
  const cells = useMemo(() => {
    const out = [];
    const dim = 31, today = 12;
    for (let i = 0; i < 35; i++) {
      const day = i + 1;
      const inM = day >= 1 && day <= dim;
      out.push({ num: inM ? day : day - dim, inM, today: inM && day === today, events: inM ? (calEvents[day] || []) : [] });
    }
    return out;
  }, []);
  return (
    <>
      <PageHead crumb="Apps / Calendar" title="March 2026" right={<button style={btnP}>+ New event</button>} />
      <div style={{ ...card, padding: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 8, marginBottom: 8 }}>
          {weekdays.map((d) => <div key={d} style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--tx-5)', paddingBottom: 6 }}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 8 }}>
          {cells.map((c, i) => (
            <div key={i} style={{ minHeight: 92, borderRadius: 10, padding: 8, background: c.inM ? 'rgba(var(--fg),0.02)' : 'rgba(var(--fg),0.008)', border: '1px solid rgba(var(--fg),0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: 12, fontWeight: 600, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: c.today ? '#0a0a12' : c.inM ? 'var(--tx-1)' : '#4a4a56', background: c.today ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'transparent' }}>{c.num}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
                {c.events.map((e, j) => <div key={j} style={{ fontSize: 10.5, fontWeight: 600, padding: '3px 6px', borderRadius: 5, background: e.bg, color: e.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.title}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ============ KANBAN ============ */
export function Kanban() {
  return (
    <>
      <PageHead crumb="Apps / Kanban" title="Sprint board" right={<button style={btnP}>+ Add task</button>} />
      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
        {kanbanCols.map((col) => (
          <div key={col.title} style={{ minWidth: 280, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, padding: '0 4px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: col.accent }} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{col.title}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--tx-4)', background: 'rgba(var(--fg),0.06)', padding: '2px 8px', borderRadius: 100 }}>{col.count}</span>
            </div>
            {col.cards.map((cd, i) => (
              <div key={i} className="nx-card" style={{ background: 'var(--bg-elev)', border: '1px solid rgba(var(--fg),0.08)', borderRadius: 12, padding: 15, marginBottom: 10, cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                  {cd.tags.map((t) => <Chip key={t.label} bg={t.bg} color={t.color}>{t.label}</Chip>)}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 14, lineHeight: 1.4 }}>{cd.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex' }}>
                    {cd.avatars.map((a, j) => <span key={j} style={{ marginLeft: j ? -8 : 0, width: 26, height: 26, borderRadius: '50%', background: a, border: '2px solid var(--bg-elev)' }} />)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--tx-5)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Ic d='<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' size={13} />{cd.comments}</span>
                    <span style={{ color: cd.dueColor }}>{cd.due}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ TODO ============ */
export function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all');
  const toggle = (i) => setTodos((t) => t.map((x, j) => (j === i ? { ...x, done: !x.done } : x)));
  const list = todos.map((t, i) => ({ t, i })).filter((x) => (filter === 'all' ? true : filter === 'active' ? !x.t.done : x.t.done));
  const done = todos.filter((t) => t.done).length;
  const tabs = [['all', 'All'], ['active', 'Active'], ['completed', 'Completed']];
  return (
    <>
      <PageHead crumb="Apps / To-do" title="To-do list" right={<button style={btnP}>+ Add task</button>} />
      <div style={{ maxWidth: 680 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13.5, color: 'var(--tx-4)' }}>{done} of {todos.length} tasks completed</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {tabs.map(([k, label]) => {
              const on = filter === k;
              return <button key={k} onClick={() => setFilter(k)} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 9, background: on ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'rgba(var(--fg),0.04)', color: on ? 'var(--bg)' : 'var(--tx-2)', border: `1px solid ${on ? 'transparent' : 'rgba(var(--fg),0.1)'}` }}>{label}</button>;
            })}
          </div>
        </div>
        <div style={{ ...card, overflow: 'hidden' }}>
          {list.map((x) => {
            const pr = tPri[x.t.tag];
            return (
              <div key={x.i} className="nx-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 18px', borderBottom: '1px solid rgba(var(--fg),0.05)' }}>
                <button onClick={() => toggle(x.i)} aria-label="Toggle" style={{ width: 22, height: 22, borderRadius: 7, border: `2px solid ${x.t.done ? 'transparent' : 'rgba(var(--fg),0.25)'}`, background: x.t.done ? 'linear-gradient(135deg,var(--a2),var(--a3))' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0 }}>
                  {x.t.done && <Ic d='<path d="M20 6L9 17l-5-5"/>' size={12} sw={3.5} style={{ color: 'var(--bg)' }} />}
                </button>
                <span style={{ flex: 1, fontSize: 14, color: x.t.done ? 'var(--tx-5)' : 'var(--tx-1)', textDecoration: x.t.done ? 'line-through' : 'none' }}>{x.t.text}</span>
                <Chip bg={pr.bg} color={pr.color}>{x.t.tag}</Chip>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* ============ FILES ============ */
export function Files() {
  return (
    <>
      <PageHead crumb="Apps / File manager" title="Files" right={<button style={btnP}>+ Upload</button>} />
      <div className="nx-kpigrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {folders.map((f) => (
          <div key={f.name} className="nx-card" style={{ ...card, padding: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a12', marginBottom: 14 }}>
              <Ic d='<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>' size={22} />
            </div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 15, fontWeight: 600 }}>{f.name}</div>
            <div style={{ fontSize: 12.5, color: 'var(--tx-4)', marginTop: 4 }}>{f.count} files · {f.size}</div>
          </div>
        ))}
      </div>
      <div style={{ ...card, overflow: 'hidden' }}>
        <div style={{ padding: '16px 18px', fontFamily: "'Space Grotesk'", fontSize: 16, fontWeight: 600, borderBottom: '1px solid rgba(var(--fg),0.05)' }}>Recent files</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {files.map((f) => (
              <tr key={f.name} className="nx-row" style={{ borderTop: '1px solid rgba(var(--fg),0.05)' }}>
                <td style={{ padding: '13px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                    <span style={{ width: 38, height: 38, borderRadius: 9, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 10, color: '#0a0a12' }}>{f.ext}</span>
                    <span style={{ fontSize: 13.5, fontWeight: 500 }}>{f.name}</span>
                  </div>
                </td>
                <td style={{ padding: '13px 18px', fontSize: 13, color: 'var(--tx-4)' }}>{f.size}</td>
                <td style={{ padding: '13px 18px', fontSize: 13, color: 'var(--tx-4)' }}>{f.modified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
