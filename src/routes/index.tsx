import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import FormateurPage from '../pages/FormateurPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminPage />} />
      <Route path="formateur" element={<FormateurPage />} />
      <Route path="" element={<Navigate to="formateur" replace />} />
    </Routes>
  );
};

export default AppRoutes;
