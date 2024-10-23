import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splash';
import OnboardingScreen from './components/OnBoarding';
import ForgotPasswordPage from './pages/ForgotPassword';
import OTPVerificationPage from './pages/OtpVerify';
import ResetPasswordPage from './pages/ResetPassword';
import Login from './pages/login';
import HomePage from './pages/HomePage';
import { SuccesResetPassword } from './pages/SuccesResetPassword';
import { Routes, Route, useNavigate } from "react-router-dom";
import Pickup from './pages/PickUp';
import Account from './pages/Account';
import EditProfile from './pages/EditProfile';
import ChangePassword from './pages/ChangePassword';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true); 

  useEffect(() => {
    const isFirstTime = localStorage.getItem('isFirstTime');

    if (!isFirstTime) {
     
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('isFirstTime', 'true'); 
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      // Jika sudah pernah dibuka, langsung set loading ke false
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/success-reset-password" element={<SuccesResetPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </>
  );
};

export default App;
