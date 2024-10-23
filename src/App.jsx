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
import EditProfile from './pages/editProfile';
import ChangePassword from './pages/ChangePassword';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // State untuk mengecek apakah ini pertama kali load
  const navigate = useNavigate();

  useEffect(() => {
    const isFirstTime = localStorage.getItem('isFirstTime');

    if (!isFirstTime) {
      // Jika ini pertama kali dibuka, set splash screen
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('isFirstTime', 'true'); // Simpan status bahwa aplikasi sudah dibuka
      }, 6000);
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
