import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splash';
import OnboardingScreen from './components/OnBoarding';
import ForgotPasswordPage from './pages/ForgotPassword';
import OTPVerificationPage from './pages/OtpVerify';
import ResetPasswordPage from './pages/ResetPassword';
import Login from './pages/login';
import { SuccesResetPassword } from './pages/SuccesResetPassword';
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Tambahkan useNavigate untuk redirect otomatis ke halaman login
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Hapus state showOnboarding karena kita menggunakan route untuk menampilkan onboarding screen

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

      </Routes>
    </>
  );
};

export default App;
