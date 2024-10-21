
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splash';
import OnboardingScreen from './components/OnBoarding';
import LoginScreen from './pages/login';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
  };

  const handleLogin = (email, password) => {
    console.log('Email:', email, 'Password:', password);
    setIsLoggedIn(true);
  };

  if (loading) {
    return <SplashScreen />;
  }

  if (showOnboarding) {
    return <OnboardingScreen onFinish={handleFinishOnboarding} />;
  }



  return (
  <LoginScreen/>
  );
};

export default App;
