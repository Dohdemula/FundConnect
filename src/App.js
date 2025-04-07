import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Dashboard from "./components/AdminDashboard";
import Members from "./components/Members";
import Contributions from "./components/Contributions";
import Events from "./components/Events"; // Import the Events component
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      // Redirect to dashboard if user is logged in and on auth pages
      if (user && (window.location.pathname === '/login' || window.location.pathname === '/signin')) {
        navigate('/dashboard');
      }
    });
    return unsubscribe;
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signin" element={user ? <Navigate to="/dashboard" /> : <SignIn />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/members" element={user ? <Members /> : <Navigate to="/login" />} />
        <Route path="/contributions" element={user ? <Contributions /> : <Navigate to="/login" />} />
        <Route path="/events" element={user ? <Events /> : <Navigate to="/login" />} /> {/* New Events route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;