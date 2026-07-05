// Sidebar navigation — 13 groups, ~40 real routes. Mirrors the HTML edition's
// navGroups, but each item points at a real react-router path.

export const navGroups = [
  {
    label: 'Dashboards',
    items: [
      { to: '/app', end: true, label: 'Overview', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>' },
      { to: '/app/ecommerce', label: 'eCommerce', icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>' },
      { to: '/app/analytics', label: 'Analytics', icon: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>' },
    ],
  },
  {
    label: 'Management',
    items: [
      { to: '/app/users', label: 'Users', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>', badge: '2.4k', badgeBg: 'rgba(var(--a1rgb),0.18)', badgeColor: '#c9beff' },
      { to: '/app/orders', label: 'Orders', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', badge: '12', badgeBg: 'rgba(var(--a3rgb),0.15)', badgeColor: 'var(--a3)' },
      { to: '/app/products', label: 'Products', icon: '<path d="M20.6 7.5L12 12 3.4 7.5M12 12v9.5M20.6 7.5v9L12 21l-8.6-4.5v-9L12 3z"/>' },
    ],
  },
  {
    label: 'eCommerce',
    items: [
      { to: '/app/storefront', label: 'Storefront', icon: '<path d="M3 9l1.2-5h15.6L21 9M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18M9 20v-6h6v6"/>' },
      { to: '/app/product-detail', label: 'Product detail', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>' },
      { to: '/app/order-detail', label: 'Order detail', icon: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>' },
      { to: '/app/checkout', label: 'Checkout', icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>' },
    ],
  },
  {
    label: 'CRM',
    items: [
      { to: '/app/leads', label: 'Leads', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3 3-1.5-1.5"/>' },
      { to: '/app/pipeline', label: 'Pipeline', icon: '<rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="12" rx="1"/><rect x="17" y="3" width="4" height="7" rx="1"/>' },
      { to: '/app/contact', label: 'Contact', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/><path d="M19 8v6M22 11h-6"/>' },
      { to: '/app/deal', label: 'Deal', icon: '<path d="M12 2l2.4 5 5.6.8-4 3.9 1 5.5L12 14.6 7 17.2l1-5.5-4-3.9 5.6-.8z"/>' },
    ],
  },
  {
    label: 'Project',
    items: [
      { to: '/app/projects', label: 'Projects', icon: '<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/><path d="M8 13h8"/>' },
      { to: '/app/project-detail', label: 'Project detail', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    ],
  },
  {
    label: 'HR',
    items: [
      { to: '/app/hr', label: 'HR overview', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>' },
      { to: '/app/employees', label: 'Employees', icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M5 18a4 4 0 0 1 8 0M15 9h4M15 13h4"/>' },
    ],
  },
  {
    label: 'Help Desk',
    items: [
      { to: '/app/tickets', label: 'Tickets', icon: '<path d="M4 5h16a1 1 0 0 1 1 1v3a2 2 0 0 0 0 4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 0 0-4V6a1 1 0 0 1 1-1z"/>' },
      { to: '/app/ticket-detail', label: 'Ticket detail', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
    ],
  },
  {
    label: 'Verticals',
    items: [
      { to: '/app/lms', label: 'Learning', icon: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/>' },
      { to: '/app/course', label: 'Course detail', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
      { to: '/app/finance', label: 'Finance', icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>' },
      { to: '/app/healthcare', label: 'Healthcare', icon: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>' },
      { to: '/app/ai', label: 'AI Assistant', icon: '<path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>' },
    ],
  },
  {
    label: 'Apps',
    items: [
      { to: '/app/chat', label: 'Chat', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', badge: '3', badgeBg: 'rgba(var(--a3rgb),0.15)', badgeColor: 'var(--a3)' },
      { to: '/app/email', label: 'Email', icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>', badge: '12', badgeBg: 'rgba(var(--a1rgb),0.18)', badgeColor: '#c9beff' },
      { to: '/app/calendar', label: 'Calendar', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>' },
      { to: '/app/kanban', label: 'Kanban', icon: '<rect x="3" y="3" width="6" height="18" rx="1"/><rect x="10" y="3" width="6" height="12" rx="1"/><rect x="17" y="3" width="4" height="8" rx="1"/>' },
      { to: '/app/todo', label: 'To-do', icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
      { to: '/app/files', label: 'File manager', icon: '<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>' },
    ],
  },
  {
    label: 'Pages',
    items: [
      { to: '/app/invoice', label: 'Invoice', icon: '<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4z"/><path d="M8 13h8M8 17h5"/>' },
      { to: '/app/profile', label: 'Profile', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/>' },
      { to: '/app/pricing', label: 'Pricing', icon: '<path d="M20 12V8a2 2 0 0 0-2-2h-3l-9 9 5 5 9-9z"/><circle cx="16.5" cy="8.5" r="1"/>' },
      { to: '/app/settings', label: 'Settings', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8M4.6 9a1.6 1.6 0 0 0-.3-1.8M9 4.6a1.6 1.6 0 0 0 1.8-.3M15 19.4a1.6 1.6 0 0 0-1.8.3"/>' },
    ],
  },
  {
    label: 'Forms & UI',
    items: [
      { to: '/app/form-elements', label: 'Form elements', icon: '<rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="12" width="18" height="4" rx="1"/><path d="M7 20h10"/>' },
      { to: '/app/form-wizard', label: 'Form wizard', icon: '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/>' },
      { to: '/app/ui', label: 'UI components', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>' },
      { to: '/app/charts', label: 'Charts', icon: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>' },
    ],
  },
  {
    label: 'Authentication',
    items: [
      { to: '/login', label: 'Sign in', icon: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/>' },
      { to: '/register', label: 'Sign up', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>' },
      { to: '/forgot', label: 'Forgot password', icon: '<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
      { to: '/lock', label: 'Lock screen', icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><circle cx="12" cy="16" r="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' },
      { to: '/login-boxed', label: 'Boxed sign in', icon: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 12l2 2 4-4"/>' },
      { to: '/otp', label: 'OTP verify', icon: '<rect x="3" y="8" width="3.5" height="8" rx="1"/><rect x="10" y="8" width="3.5" height="8" rx="1"/><rect x="17" y="8" width="3.5" height="8" rx="1"/>' },
      { to: '/two-factor', label: 'Two-factor auth', icon: '<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 15v2"/>' },
    ],
  },
  {
    label: 'Error Pages',
    items: [
      { to: '/404', label: '404 Not found', icon: '<circle cx="12" cy="12" r="9"/><path d="M9 9h.01M15 9h.01M9 15s1-1.5 3-1.5S15 15 15 15"/>' },
      { to: '/500', label: '500 Server', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
      { to: '/maintenance', label: 'Maintenance', icon: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z"/>' },
      { to: '/coming-soon', label: 'Coming soon', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
    ],
  },
];
