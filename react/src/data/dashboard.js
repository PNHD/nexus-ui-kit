// Demo data for the dashboard. Swap these for your API responses.

export const kpis = [
  { icon: 'dollar', label: 'Total revenue', value: '$284.2K', delta: '+12.4%', up: true },
  { icon: 'users', label: 'Active users', value: '18,472', delta: '+8.1%', up: true },
  { icon: 'cart', label: 'Orders', value: '3,894', delta: '+3.7%', up: true },
  { icon: 'chart', label: 'Conversion', value: '4.62%', delta: '-0.4%', up: false },
];

export const activity = [
  { initials: 'JC', color: 'linear-gradient(135deg,#a48bff,#22d3ee)', text: 'Jordan Cole upgraded to Business plan', time: '2 min ago', tag: 'Upgrade', tone: 'good' },
  { initials: 'MR', color: 'linear-gradient(135deg,#34d399,#2dd4bf)', text: 'Maya Reeves invited 3 team members', time: '18 min ago', tag: 'Team', tone: 'info' },
  { initials: 'TN', color: 'linear-gradient(135deg,#fb923c,#f59e0b)', text: 'Theo Nakamura closed ticket #4821', time: '1 hour ago', tag: 'Support', tone: 'neutral' },
  { initials: 'AL', color: 'linear-gradient(135deg,#a48bff,#22d3ee)', text: 'Ava Lindqvist published a new report', time: '3 hours ago', tag: 'Report', tone: 'info' },
  { initials: 'DB', color: 'linear-gradient(135deg,#34d399,#2dd4bf)', text: 'Diego Barros exceeded quarterly target', time: 'Yesterday', tag: 'Goal', tone: 'good' },
];

export const products = [
  { name: 'Aurora Wireless Buds', color: 'linear-gradient(135deg,#a48bff,#7c5cff)', price: '$129', sold: '1,204', revenue: '$155.3K' },
  { name: 'Nimbus Smart Watch', color: 'linear-gradient(135deg,#22d3ee,#2dd4bf)', price: '$249', sold: '842', revenue: '$209.6K' },
  { name: 'Vertex Mechanical Keyboard', color: 'linear-gradient(135deg,#fb923c,#f59e0b)', price: '$89', sold: '2,310', revenue: '$205.6K' },
  { name: 'Halo Desk Lamp', color: 'linear-gradient(135deg,#34d399,#10b981)', price: '$59', sold: '1,876', revenue: '$110.7K' },
  { name: 'Pulse Portable Speaker', color: 'linear-gradient(135deg,#a48bff,#22d3ee)', price: '$79', sold: '1,540', revenue: '$121.7K' },
];

export const navGroups = [
  {
    label: 'Overview',
    items: [
      { icon: 'grid', label: 'Dashboard', active: true },
      { icon: 'chart', label: 'Analytics' },
      { icon: 'cart', label: 'eCommerce', badge: 'New' },
    ],
  },
  {
    label: 'Manage',
    items: [
      { icon: 'users', label: 'Customers' },
      { icon: 'box', label: 'Products' },
      { icon: 'file', label: 'Invoices' },
      { icon: 'form', label: 'Forms' },
    ],
  },
  {
    label: 'Account',
    items: [
      { icon: 'settings', label: 'Settings' },
      { icon: 'lock', label: 'Security' },
    ],
  },
];
