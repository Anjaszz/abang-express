import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icon untuk show/hide password

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol apakah password terlihat
  const navigate = useNavigate(); // Menggunakan useNavigate untuk mengarahkan user ke halaman lain

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Mengarahkan ke halaman forgot-password saat link diklik
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Mengganti state showPassword
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-blue-200 w-full max-w-sm relative h-full">
        {/* Image div */}
        <div>
          <img
            src="Illustration.png"
            alt="Illustration of a delivery person on a scooter with packages in a cityscape background"
            className="w-full rounded-t-lg"
          />
        </div>

        {/* Form div */}
        <div className="absolute top-[200px] h-full left-0 right-0 z-10 p-6 bg-white rounded-t-3xl">
          <h2 className="text-center text-2xl font-bold mb-4">Masuk ke Akun Mu.</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email / Nomor Telepon"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Input password dengan fitur show/hide */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'} // Mengganti tipe input berdasarkan state
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility} // Menambahkan fungsi toggle show/hide
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Ganti icon sesuai kondisi */}
              </div>
            </div>

            <div className="text-right mb-4">
              <a onClick={handleForgotPassword} className="text-red-500 text-sm cursor-pointer">
                Lupa Password?
              </a>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
