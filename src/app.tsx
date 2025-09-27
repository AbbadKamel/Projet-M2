import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
