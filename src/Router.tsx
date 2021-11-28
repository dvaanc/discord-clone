import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import App from './components/app/App';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Login from './components/login/Login';

export default function Router() {
  return (
    <BrowserRouter basename="/discord-clone">
      <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={< Login />} />
        <Route path="/app" element={<App />} />
      </Routes>

    </BrowserRouter>
  );
}

