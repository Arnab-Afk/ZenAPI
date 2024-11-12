// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './views/Dashboard';
// import Monitoring from './views/Monitoring';
// import Security from './views/Security';
// import Testing from './views/Testing';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              {/* <Route path="monitoring" element={<Monitoring />} />
              <Route path="security" element={<Security />} />
              <Route path="testing" element={<Testing />} /> */}
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;