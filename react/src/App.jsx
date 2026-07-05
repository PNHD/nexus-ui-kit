import { Routes, Route, Navigate } from 'react-router-dom';
import ThemeControl from './components/ThemeControl.jsx';
import Landing from './pages/Landing.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

import { Overview, Ecommerce, Analytics } from './pages/admin/Dashboards.jsx';
import { Users, Orders, Products } from './pages/admin/Management.jsx';
import { Storefront, ProductDetail, OrderDetail, Checkout } from './pages/admin/Ecom.jsx';
import { Leads, Pipeline, ContactDetail, DealDetail } from './pages/admin/Crm.jsx';
import { Projects, ProjectDetail, HrOverview, Employees, Tickets, TicketDetail } from './pages/admin/Ops.jsx';
import { Lms, CourseDetail, Finance, Healthcare, AiChat } from './pages/admin/Verticals.jsx';
import { Chat, Email, Calendar, Kanban, Todo, Files } from './pages/admin/Apps.jsx';
import { Invoice, Profile, Settings, Pricing } from './pages/admin/Pages.jsx';
import { FormElements, FormWizard, UIComponents, ChartsGallery } from './pages/admin/FormsUI.jsx';
import { Login, Register, Forgot, Lock, LoginBoxed, Otp, TwoFactor } from './pages/admin/Auth.jsx';
import ErrorPage from './pages/admin/Errors.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* ===== Admin dashboard (sidebar shell) ===== */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="storefront" element={<Storefront />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="order-detail" element={<OrderDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="leads" element={<Leads />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="contact" element={<ContactDetail />} />
          <Route path="deal" element={<DealDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project-detail" element={<ProjectDetail />} />
          <Route path="hr" element={<HrOverview />} />
          <Route path="employees" element={<Employees />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="ticket-detail" element={<TicketDetail />} />
          <Route path="lms" element={<Lms />} />
          <Route path="course" element={<CourseDetail />} />
          <Route path="finance" element={<Finance />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="ai" element={<AiChat />} />
          <Route path="chat" element={<Chat />} />
          <Route path="email" element={<Email />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="todo" element={<Todo />} />
          <Route path="files" element={<Files />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="settings" element={<Settings />} />
          <Route path="form-elements" element={<FormElements />} />
          <Route path="form-wizard" element={<FormWizard />} />
          <Route path="ui" element={<UIComponents />} />
          <Route path="charts" element={<ChartsGallery />} />
        </Route>

        {/* ===== Full-screen auth ===== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/lock" element={<Lock />} />
        <Route path="/login-boxed" element={<LoginBoxed />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/two-factor" element={<TwoFactor />} />

        {/* ===== Error pages ===== */}
        <Route path="/404" element={<ErrorPage kind="404" />} />
        <Route path="/500" element={<ErrorPage kind="500" />} />
        <Route path="/maintenance" element={<ErrorPage kind="maintenance" />} />
        <Route path="/coming-soon" element={<ErrorPage kind="coming-soon" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Global theme switcher — visible on every route */}
      <ThemeControl position="right" />
    </>
  );
}
