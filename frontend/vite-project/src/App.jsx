import React from 'react';
import Home from './components/Home';
import AddcoursesPages from './pages/AddcoursesPages';
import AdminLoginForm from './admin/AdminLoginForm';
import { Route, Routes } from 'react-router-dom';
import AddTeamPage from './pages/AddTeamPage';
import AdminPanel from './admin/dashboard';
import MainLoginForm from './admin/MainLoginForm';
import AddEventPage from './pages/AddEventPage';
import AddFaqPages from './pages/AddFaqPages';
import IndexPage from './pages/IndexPage';
export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/adminlogin" element={<MainLoginForm />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/addfaq" element={<AddFaqPages />} />
        <Route path="/addcoursespages" element={<AddcoursesPages />} />
        <Route path="/addeventpages" element={<AddEventPage />} />
        <Route path="/adminloginform" element={<AdminLoginForm />} />
        <Route path="/add-team" element={<AddTeamPage />} />
      </Routes>
    </>
  );
}
