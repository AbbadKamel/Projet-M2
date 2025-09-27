import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import FormateurPage from '../pages/FormateurPage';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="formateur" element={<FormateurPage />} />
      <Route path="" element={<Navigate to="login" replace />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
