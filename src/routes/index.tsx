import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import ApprenantPage from '../pages/ApprenantPage';
import FormateurPage from '../pages/FormateurPage';
import LoginPage from '../pages/LoginPage';
import RequireAuth from './RequireAuth';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="admin"
        element={
          <RequireAuth role="admin">
            <AdminPage />
          </RequireAuth>
        }
      />
      <Route
        path="formateur"
        element={
          <RequireAuth role="formateur">
            <FormateurPage />
          </RequireAuth>
        }
      />
      <Route
        path="apprenant"
        element={
          <RequireAuth role="apprenant">
            <ApprenantPage />
          </RequireAuth>
        }
      />
      <Route path="" element={<Navigate to="login" replace />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
