import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="admin" element={<AdminPage />} />
      <Route path="" element={<Navigate to="admin" replace />} />
    </Routes>
  );
};

export default AppRoutes;
