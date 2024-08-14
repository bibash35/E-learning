import React, { useState } from 'react';
import Home from './components/Home';
import AddcoursesPages from './pages/AddcoursesPages';
import { Route, Routes } from 'react-router-dom';
import AddTeamPage from './pages/AddTeamPage';
import AdminPanel from './admin/dashboard';
import MainLoginForm from './admin/MainLoginForm';
import AddEventPage from './pages/AddEventPage';
import AddFaqPages from './pages/AddFaqPages';
import ProtectedRoute from './admin/ProtectedRoute';
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route
          path="/adminpanel"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
                 
 <Route path="/adminlogin" element={<MainLoginForm setIsAuthenticated={setIsAuthenticated} />} />


        <Route
          path="/addfaq"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddFaqPages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addcoursespages"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddcoursesPages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addeventpages"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddEventPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/add-team" element={<AddTeamPage />} /> */}
        <Route
          path="/add-team"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddTeamPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

