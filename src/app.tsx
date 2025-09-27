import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
};

export default App;
