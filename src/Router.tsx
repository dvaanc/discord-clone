import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import App from './components/app/App';
import Login from './components/login/Login';

export default function Router() {

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={< Login />} />
        <Route path="/app" element={<App />} />
      </Routes>

    </HashRouter>
  );
}

