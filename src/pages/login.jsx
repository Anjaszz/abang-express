// components/LoginScreen.js
import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
<div className="flex flex-col justify-center  h-screen w-screen">
  <img src="Illustration.png" alt="illustration" className="w-full h-auto object-cover mt-0" />
  <form
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded shadow-md w-96"
  >
    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-3 mb-4 border border-gray-300 rounded"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full p-3 mb-4 border border-gray-300 rounded"
    />
    <button
      type="submit"
      className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Login
    </button>
  </form>
</div>

  );
};

export default LoginScreen;
