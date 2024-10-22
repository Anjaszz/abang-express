import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splash';
import OnboardingScreen from './components/OnBoarding';
import ForgotPasswordPage from './pages/ForgotPassword';
import OTPVerificationPage from './pages/OtpVerify';
import Login from './pages/login';
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
      </Routes>
    </>
  );
};

export default App;
