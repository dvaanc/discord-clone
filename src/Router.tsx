import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import App from './components/app/App';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Login from './components/login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/app*" element={<App />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
