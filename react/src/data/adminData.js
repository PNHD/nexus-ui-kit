// Demo data for the admin dashboard — ported verbatim from the HTML edition.
// Swap these for your API responses.

const up = { deltaColor: 'var(--a3)', deltaBg: 'rgba(var(--a3rgb),0.12)' };
const down = { deltaColor: '#ff7a90', deltaBg: 'rgba(255,122,144,0.12)' };
const A1BG = 'rgba(var(--a1rgb),0.16)', A3BG = 'rgba(var(--a3rgb),0.14)', V = '#c9beff', C = '#a5edf7';

export const kpis = [
  { value: '$284.4k', label: 'Total revenue', delta: '▲ 12.5%', ...up, icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>', iconBg: A1BG, iconColor: V },
  { value: '12,840', label: 'Total orders', delta: '▲ 8.2%', ...up, icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', iconBg: A3BG, iconColor: C },
  { value: '2,410', label: 'New customers', delta: '▲ 4.1%', ...up, icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>', iconBg: A1BG, iconColor: V },
  { value: '3.24%', label: 'Conversion rate', delta: '▼ 0.4%', ...down, icon: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>', iconBg: A3BG, iconColor: C },
];

export const ecomKpis = [
  { value: '$52.8k', label: 'Sales today', delta: '▲ 9.1%', ...up, icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>', iconBg: A1BG, iconColor: V },
  { value: '1,284', label: 'Orders', delta: '▲ 5.4%', ...up, icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', iconBg: A3BG, iconColor: C },
  { value: '842', label: 'Products', delta: '▲ 2.0%', ...up, icon: '<path d="M20.6 7.5L12 12 3.4 7.5M12 12v9.5M20.6 7.5v9L12 21l-8.6-4.5v-9L12 3z"/>', iconBg: A1BG, iconColor: V },
  { value: '$68.20', label: 'Avg. order value', delta: '▲ 3.3%', ...up, icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 1.5-2.5 1.5-2.5 2.5"/>', iconBg: A3BG, iconColor: C },
];

export const analyticsKpis = [
  { value: '48,200', label: 'Sessions', delta: '▲ 14%', ...up, icon: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>', iconBg: A1BG, iconColor: V },
  { value: '31,900', label: 'Users', delta: '▲ 6.7%', ...up, icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', iconBg: A3BG, iconColor: C },
  { value: '2m 41s', label: 'Avg. duration', delta: '▲ 3.2%', ...up, icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', iconBg: A1BG, iconColor: V },
  { value: '38.4%', label: 'Bounce rate', delta: '▼ 1.1%', ...down, icon: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>', iconBg: A3BG, iconColor: C },
];

export const activity = [
  { initials: 'JD', color: 'linear-gradient(135deg,var(--a2),var(--a3))', text: 'Jordan Diaz placed a new order #12841', time: '2 min ago', tag: 'Order', tagBg: 'rgba(var(--a3rgb),0.12)', tagColor: 'var(--a3)' },
  { initials: 'SM', color: 'linear-gradient(135deg,var(--a3),var(--a2))', text: 'Sara Malik upgraded to Pro plan', time: '25 min ago', tag: 'Billing', tagBg: 'rgba(var(--a1rgb),0.16)', tagColor: '#c9beff' },
  { initials: 'TW', color: 'linear-gradient(135deg,#febc2e,#ff7a90)', text: 'Tom Wright submitted a support ticket', time: '1 hr ago', tag: 'Support', tagBg: 'rgba(254,188,46,0.12)', tagColor: '#febc2e' },
  { initials: 'AL', color: 'linear-gradient(135deg,var(--a1),var(--a3))', text: 'Aisha Lee left a 5-star review', time: '3 hr ago', tag: 'Review', tagBg: 'rgba(var(--a3rgb),0.12)', tagColor: 'var(--a3)' },
  { initials: 'MK', color: 'linear-gradient(135deg,var(--a3),var(--a1))', text: 'Marco Kim refunded order #12790', time: '5 hr ago', tag: 'Refund', tagBg: 'rgba(255,122,144,0.12)', tagColor: '#ff7a90' },
];

export const pc = [
  'linear-gradient(135deg,var(--a2),var(--a3))',
  'linear-gradient(135deg,var(--a3),var(--a2))',
  'linear-gradient(135deg,#febc2e,#ff7a90)',
  'linear-gradient(135deg,var(--a1),var(--a3))',
  'linear-gradient(135deg,var(--a3),#febc2e)',
];

export const topProducts = [
  { name: 'Aurora Wireless Buds', price: '$129', sold: '1,204', revenue: '$155,316', color: pc[0] },
  { name: 'Nimbus Smart Watch', price: '$249', sold: '980', revenue: '$244,020', color: pc[1] },
  { name: 'Flux Mechanical Keyboard', price: '$89', sold: '2,140', revenue: '$190,460', color: pc[2] },
  { name: 'Halo Desk Lamp', price: '$59', sold: '1,760', revenue: '$103,840', color: pc[3] },
  { name: 'Pulse Fitness Band', price: '$79', sold: '1,320', revenue: '$104,280', color: pc[4] },
];

export const topPages = [
  { path: '/dashboard', views: '18,204', pct: '92%' },
  { path: '/pricing', views: '12,880', pct: '68%' },
  { path: '/blog/ai-agents', views: '9,410', pct: '52%' },
  { path: '/features', views: '7,220', pct: '40%' },
  { path: '/contact', views: '4,180', pct: '24%' },
];

// ---- USERS ----
const roles = ['Administrator', 'Editor', 'Viewer', 'Developer', 'Manager'];
const statuses = [
  { s: 'Active', bg: 'rgba(var(--a3rgb),0.12)', c: 'var(--a3)' },
  { s: 'Pending', bg: 'rgba(254,188,46,0.12)', c: '#febc2e' },
  { s: 'Inactive', bg: 'rgba(255,122,144,0.12)', c: '#ff7a90' },
];
const names = ['Jordan Diaz', 'Sara Malik', 'Tom Wright', 'Aisha Lee', 'Marco Kim', 'Elena Marsh', 'Liam Chen', 'Priya Nair', 'Noah Park', 'Zoe Adams', 'Omar Haddad', 'Maya Silva', 'Ivan Petrov', 'Nina Rossi', 'Kai Nakamura', 'Lucia Gomez', 'Ethan Brooks', 'Farah Aziz', 'Diego Torres', 'Hana Sato', 'Ruben Ortiz', 'Amara Okafor', 'Sven Larsson', 'Yuki Tanaka'];
export const usersAll = names.map((n, i) => {
  const parts = n.split(' ');
  const st = statuses[i % 3];
  return {
    name: n, initials: parts[0][0] + parts[1][0],
    email: parts[0].toLowerCase() + '.' + parts[1].toLowerCase() + '@nexus.io',
    role: roles[i % roles.length],
    status: st.s, statusBg: st.bg, statusColor: st.c,
    lastActive: ['2 min ago', '1 hr ago', 'Yesterday', '3 days ago', '1 week ago'][i % 5],
    color: pc[i % pc.length],
  };
});

// ---- ORDERS ----
export const oStat = {
  Paid: { bg: 'rgba(var(--a3rgb),0.12)', c: 'var(--a3)' },
  Pending: { bg: 'rgba(254,188,46,0.12)', c: '#febc2e' },
  Refunded: { bg: 'rgba(255,122,144,0.12)', c: '#ff7a90' },
  Cancelled: { bg: 'rgba(var(--fg),0.07)', c: 'var(--tx-3)' },
};
const ordersRaw = [
  ['#ORD-7841', 'Jordan Diaz', 'Mar 12, 2026', 'Paid', '$249.00'],
  ['#ORD-7840', 'Sara Malik', 'Mar 12, 2026', 'Pending', '$1,024.00'],
  ['#ORD-7839', 'Tom Wright', 'Mar 11, 2026', 'Paid', '$89.00'],
  ['#ORD-7838', 'Aisha Lee', 'Mar 11, 2026', 'Refunded', '$149.00'],
  ['#ORD-7837', 'Marco Kim', 'Mar 10, 2026', 'Paid', '$599.00'],
  ['#ORD-7836', 'Elena Marsh', 'Mar 10, 2026', 'Cancelled', '$59.00'],
  ['#ORD-7835', 'Liam Chen', 'Mar 09, 2026', 'Paid', '$329.00'],
  ['#ORD-7834', 'Priya Nair', 'Mar 09, 2026', 'Pending', '$79.00'],
  ['#ORD-7833', 'Noah Park', 'Mar 08, 2026', 'Paid', '$459.00'],
  ['#ORD-7832', 'Zoe Adams', 'Mar 08, 2026', 'Paid', '$129.00'],
  ['#ORD-7831', 'Omar Haddad', 'Mar 07, 2026', 'Refunded', '$199.00'],
  ['#ORD-7830', 'Maya Silva', 'Mar 07, 2026', 'Paid', '$749.00'],
];
export const ordersAll = ordersRaw.map((o, i) => {
  const p = o[1].split(' ');
  return { id: o[0], customer: o[1], initials: p[0][0] + p[1][0], color: pc[i % pc.length], date: o[2], status: o[3], total: o[4] };
});

// ---- PRODUCTS ----
const stockOf = (n) => (n > 50 ? { label: 'In stock', bg: 'rgba(var(--a3rgb),0.12)', c: 'var(--a3)' } : n > 0 ? { label: 'Low stock', bg: 'rgba(254,188,46,0.12)', c: '#febc2e' } : { label: 'Out of stock', bg: 'rgba(255,122,144,0.12)', c: '#ff7a90' });
const productsRaw = [
  ['Aurora Wireless Buds', 'Electronics', '$129', 4.8, 120],
  ['Nimbus Smart Watch', 'Electronics', '$249', 4.9, 64],
  ['Flux Keyboard', 'Electronics', '$89', 4.7, 210],
  ['Halo Desk Lamp', 'Home', '$59', 4.6, 38],
  ['Pulse Fitness Band', 'Electronics', '$79', 4.5, 0],
  ['Linen Overshirt', 'Fashion', '$74', 4.4, 92],
  ['Glow Serum Set', 'Beauty', '$46', 4.8, 15],
  ['Terra Ceramic Vase', 'Home', '$38', 4.3, 140],
];
export const productsAll = productsRaw.map((p, i) => {
  const s = stockOf(p[4]);
  return { name: p[0], cat: p[1], price: p[2], rating: p[3], stockLabel: s.label, stockBg: s.bg, stockColor: s.c, color: pc[i % pc.length] };
});
export const productCatNames = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty'];

// ---- INVOICE ----
export const invItems = [
  { desc: 'Pro plan — annual subscription', qty: '1', price: '$276.00', amount: '$276.00' },
  { desc: 'Additional workspace seats', qty: '5', price: '$12.00', amount: '$60.00' },
  { desc: 'Priority support add-on', qty: '1', price: '$49.00', amount: '$49.00' },
  { desc: 'Onboarding & setup', qty: '1', price: '$150.00', amount: '$150.00' },
];

// ---- PROFILE ----
export const profileStats = [{ value: '48', label: 'Projects' }, { value: '12.4k', label: 'Followers' }, { value: '318', label: 'Following' }];
export const profileSkills = ['Product Strategy', 'UX Research', 'Figma', 'Roadmapping', 'Analytics', 'Leadership', 'SQL', 'A/B Testing'];
export const profileTimeline = [
  { color: 'linear-gradient(135deg,var(--a2),var(--a3))', text: 'Shipped the new analytics dashboard', time: '2 hours ago' },
  { color: 'linear-gradient(135deg,var(--a3),var(--a2))', text: 'Reviewed 8 pull requests', time: 'Yesterday' },
  { color: 'linear-gradient(135deg,#febc2e,#ff7a90)', text: 'Closed Q1 OKRs at 112%', time: '3 days ago' },
  { color: 'linear-gradient(135deg,var(--a1),var(--a3))', text: 'Onboarded 3 new team members', time: '1 week ago' },
];

// ---- PRICING ----
export const pricePlans = (yearly) => [
  { name: 'Starter', tagline: 'For small teams getting started.', price: '$0', period: '/mo', billed: 'Free forever', popular: false, bg: 'rgba(var(--fg),0.025)', border: 'rgba(var(--fg),0.07)', shadow: 'none', cta: 'Current plan', ctaGhost: true, features: ['100 AI credits / mo', '1 workspace', 'Core integrations', 'Community support'] },
  { name: 'Pro', tagline: 'For teams that need more power.', price: yearly ? '$23' : '$29', period: '/mo', billed: yearly ? 'Billed $276 / year' : 'Billed monthly', popular: true, bg: 'linear-gradient(160deg,rgba(var(--a1rgb),0.16),rgba(var(--a3rgb),0.08))', border: 'rgba(var(--a1rgb),0.5)', shadow: '0 20px 60px rgba(var(--a1rgb),0.25)', cta: 'Upgrade to Pro', ctaGhost: false, features: ['Unlimited AI credits', '10 workspaces', 'All integrations', 'Custom agents', 'Priority support'] },
  { name: 'Enterprise', tagline: 'For organizations at scale.', price: 'Custom', period: '', billed: 'Contact sales', popular: false, bg: 'rgba(var(--fg),0.025)', border: 'rgba(var(--fg),0.07)', shadow: 'none', cta: 'Talk to sales', ctaGhost: true, features: ['Everything in Pro', 'SSO & SCIM', 'Audit logs & SOC 2', 'Dedicated manager', '99.9% SLA'] },
];

// ---- SETTINGS ----
export const settingsNavDefs = [
  ['general', 'General', '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8M4.6 9a1.6 1.6 0 0 0-.3-1.8M9 4.6a1.6 1.6 0 0 0 1.8-.3M15 19.4a1.6 1.6 0 0 0-1.8.3"/>'],
  ['account', 'Account', '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'],
  ['notifications', 'Notifications', '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'],
  ['security', 'Security', '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>'],
  ['billing', 'Billing', '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'],
];

// ---- CHAT ----
export const chatConvos = [
  { name: 'Sara Malik', initials: 'SM', color: 'linear-gradient(135deg,var(--a2),var(--a3))', dot: 'var(--a3)', time: '2m', last: 'Sounds great, let’s ship it 🚀', status: 'Online', messages: [{ me: false, text: 'Hey! Did you get a chance to look at the new dashboard?', time: '09:41' }, { me: true, text: 'Yes! It looks incredible. The charts are so smooth.', time: '09:42' }, { me: false, text: 'Sounds great, let’s ship it 🚀', time: '09:44' }] },
  { name: 'Marco Kim', initials: 'MK', color: 'linear-gradient(135deg,var(--a3),var(--a2))', dot: 'var(--a3)', time: '1h', last: 'I pushed the fix to staging', status: 'Online', messages: [{ me: false, text: 'I pushed the fix to staging', time: '08:30' }, { me: true, text: 'Perfect, testing now.', time: '08:35' }] },
  { name: 'Aisha Lee', initials: 'AL', color: 'linear-gradient(135deg,#febc2e,#ff7a90)', dot: 'var(--tx-5)', time: '3h', last: 'Thanks for the review!', status: 'Last seen 3h ago', messages: [{ me: false, text: 'Thanks for the review!', time: '06:10' }, { me: true, text: 'Anytime! 🙌', time: '06:12' }] },
  { name: 'Design Team', initials: 'DT', color: 'linear-gradient(135deg,var(--a1),var(--a3))', dot: 'var(--a3)', time: '1d', last: 'Liam: new mockups are up', status: '4 members', messages: [{ me: false, text: 'new mockups are up', time: 'Yesterday' }] },
];

// ---- EMAIL ----
export const mailFolderDefs = [{ name: 'Inbox', count: '12' }, { name: 'Starred', count: '3' }, { name: 'Sent', count: '' }, { name: 'Drafts', count: '1' }, { name: 'Trash', count: '' }];
export const mails = [
  { from: 'Sara Malik', initials: 'SM', color: 'linear-gradient(135deg,var(--a2),var(--a3))', email: 'sara@nexus.io', subject: 'Q1 launch is a go 🚀', preview: 'The team signed off on the timeline...', time: '09:44', unread: true, body: '<p>Hi Alex,</p><p style="margin-top:12px;">The team signed off on the Q1 timeline this morning. We’re clear to launch the new dashboard on the 15th.</p><p style="margin-top:12px;">Let me know if you need anything from my side.</p><p style="margin-top:12px;">Best,<br>Sara</p>' },
  { from: 'GitHub', initials: 'GH', color: 'linear-gradient(135deg,var(--a3),var(--a2))', email: 'noreply@github.com', subject: '[nexus] 3 pull requests need review', preview: 'You have been requested to review...', time: '08:12', unread: true, body: '<p>You have 3 open pull requests awaiting your review in <b>nexus/dashboard</b>.</p>' },
  { from: 'Marco Kim', initials: 'MK', color: 'linear-gradient(135deg,#febc2e,#ff7a90)', email: 'marco@nexus.io', subject: 'Re: staging deploy', preview: 'Fix is live, please verify...', time: 'Yesterday', unread: false, body: '<p>Fix is live on staging. Please verify when you get a chance.</p>' },
  { from: 'Stripe', initials: 'ST', color: 'linear-gradient(135deg,var(--a1),var(--a3))', email: 'billing@stripe.com', subject: 'Your invoice is available', preview: 'Invoice #INV-2026-0042...', time: 'Mar 01', unread: false, body: '<p>Your invoice <b>#INV-2026-0042</b> for $577.80 has been paid. Thank you!</p>' },
];

// ---- CALENDAR ----
export const calEvents = {
  3: [{ title: 'Standup', bg: 'rgba(var(--a1rgb),0.2)', color: '#c9beff' }],
  5: [{ title: 'Design sync', bg: 'rgba(var(--a3rgb),0.16)', color: '#a5edf7' }],
  12: [{ title: 'Launch review', bg: 'rgba(var(--a1rgb),0.2)', color: '#c9beff' }, { title: '1:1 Sara', bg: 'rgba(254,188,46,0.16)', color: '#febc2e' }],
  18: [{ title: 'Sprint end', bg: 'rgba(255,122,144,0.16)', color: '#ff7a90' }],
  22: [{ title: 'All-hands', bg: 'rgba(var(--a3rgb),0.16)', color: '#a5edf7' }],
  27: [{ title: 'Release v3', bg: 'rgba(var(--a1rgb),0.2)', color: '#c9beff' }],
};
export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ---- KANBAN ----
export const kanbanCols = [
  { title: 'Backlog', accent: 'var(--tx-5)', count: '2', cards: [{ title: 'Research competitor dashboards', tags: [{ label: 'Research', bg: 'rgba(var(--a1rgb),0.16)', color: '#c9beff' }], avatars: ['linear-gradient(135deg,var(--a2),var(--a3))'], comments: '2', due: 'Mar 20', dueColor: 'var(--tx-4)' }, { title: 'Draft the Q2 roadmap', tags: [{ label: 'Planning', bg: 'rgba(var(--a3rgb),0.14)', color: '#a5edf7' }], avatars: ['linear-gradient(135deg,var(--a3),var(--a2))', 'linear-gradient(135deg,#febc2e,#ff7a90)'], comments: '5', due: 'Mar 24', dueColor: 'var(--tx-4)' }] },
  { title: 'In Progress', accent: 'var(--a1)', count: '2', cards: [{ title: 'Build the analytics charts', tags: [{ label: 'Dev', bg: 'rgba(var(--a3rgb),0.14)', color: '#a5edf7' }, { label: 'Urgent', bg: 'rgba(255,122,144,0.14)', color: '#ff7a90' }], avatars: ['linear-gradient(135deg,var(--a2),var(--a3))'], comments: '8', due: 'Mar 14', dueColor: '#ff7a90' }, { title: 'Redesign the settings page', tags: [{ label: 'Design', bg: 'rgba(var(--a1rgb),0.16)', color: '#c9beff' }], avatars: ['linear-gradient(135deg,#febc2e,#ff7a90)'], comments: '3', due: 'Mar 16', dueColor: 'var(--tx-4)' }] },
  { title: 'Review', accent: '#febc2e', count: '1', cards: [{ title: 'QA the users table', tags: [{ label: 'QA', bg: 'rgba(254,188,46,0.14)', color: '#febc2e' }], avatars: ['linear-gradient(135deg,var(--a3),var(--a2))'], comments: '1', due: 'Mar 13', dueColor: 'var(--tx-4)' }] },
  { title: 'Done', accent: 'var(--a3)', count: '1', cards: [{ title: 'Set up the CI pipeline', tags: [{ label: 'DevOps', bg: 'rgba(var(--a3rgb),0.14)', color: '#a5edf7' }], avatars: ['linear-gradient(135deg,var(--a2),var(--a3))'], comments: '4', due: 'Done', dueColor: 'var(--a3)' }] },
];

// ---- TODO ----
export const initialTodos = [
  { text: 'Finalize the Q1 launch deck', tag: 'High', done: false },
  { text: 'Review analytics dashboard PR', tag: 'High', done: false },
  { text: 'Reply to Sara about timeline', tag: 'Medium', done: true },
  { text: 'Update onboarding copy', tag: 'Low', done: false },
  { text: 'Schedule team retro', tag: 'Medium', done: false },
  { text: 'Archive old projects', tag: 'Low', done: true },
];
export const tPri = { High: { bg: 'rgba(255,122,144,0.14)', color: '#ff7a90' }, Medium: { bg: 'rgba(254,188,46,0.14)', color: '#febc2e' }, Low: { bg: 'rgba(var(--a3rgb),0.12)', color: 'var(--a3)' } };

// ---- FILES ----
export const folders = [
  { name: 'Documents', count: '128', size: '2.4 GB', color: 'linear-gradient(135deg,var(--a2),var(--a3))' },
  { name: 'Images', count: '340', size: '6.1 GB', color: 'linear-gradient(135deg,var(--a3),var(--a2))' },
  { name: 'Videos', count: '42', size: '12.8 GB', color: 'linear-gradient(135deg,#febc2e,#ff7a90)' },
  { name: 'Downloads', count: '86', size: '1.2 GB', color: 'linear-gradient(135deg,var(--a1),var(--a3))' },
];
export const files = [
  { name: 'Q1-report.pdf', ext: 'PDF', size: '2.4 MB', modified: 'Mar 12, 2026', color: 'linear-gradient(135deg,#ff7a90,#febc2e)' },
  { name: 'dashboard-mockup.fig', ext: 'FIG', size: '18 MB', modified: 'Mar 11, 2026', color: 'linear-gradient(135deg,var(--a2),var(--a3))' },
  { name: 'launch-plan.xlsx', ext: 'XLS', size: '640 KB', modified: 'Mar 10, 2026', color: 'linear-gradient(135deg,var(--a3),var(--a2))' },
  { name: 'brand-assets.zip', ext: 'ZIP', size: '54 MB', modified: 'Mar 08, 2026', color: 'linear-gradient(135deg,var(--a1),var(--a3))' },
  { name: 'demo-video.mp4', ext: 'MP4', size: '128 MB', modified: 'Mar 05, 2026', color: 'linear-gradient(135deg,#febc2e,#ff7a90)' },
];

// ---- UI ACCORDION ----
export const accDefs = [
  ['Can I customize the theme?', 'Yes — every color, font, and component is fully customizable through simple variables and inline styles.'],
  ['Is it fully responsive?', 'Absolutely. Every page adapts fluidly from large desktops down to mobile.'],
  ['Do you offer support?', 'All licenses include 6 months of author support, extendable at checkout.'],
];
