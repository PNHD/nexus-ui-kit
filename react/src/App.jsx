import { Routes, Route, Navigate } from 'react-router-dom';
import ThemeControl from './components/ThemeControl.jsx';
import Landing from './pages/Landing.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Global theme switcher — visible on every route */}
      <ThemeControl position="right" />
    </>
  );
}
