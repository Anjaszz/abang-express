import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HeaderForgotPassword } from '../components/HeaderForgotPassword';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = () => {
    let valid = true;

    if (password.length < 8) {
      setPasswordError('Kata sandi minimal 8 karakter.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Kata sandi dan konfirmasi harus sama.');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validatePassword()) {
      navigate('/success-reset-password'); // Mengarahkan ke halaman sukses reset password
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      <div className="p-6 bg-white w-full max-w-md mx-auto shadow-lg min-h-screen">
        <HeaderForgotPassword />
        <h2 className="text-lg font-semibold mb-2">Kata Sandi Baru</h2>
        <p className="text-sm text-gray-600 mb-4">
          Buat kata sandi baru yang kuat untuk akun dengan email adventreey@gmail.com
        </p>

        {/* Input untuk kata sandi baru */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata sandi baru"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          <p className="text-xs text-gray-500 mt-1">Kata sandi minimal 8 karakter</p>
        </div>

        {/* Input untuk konfirmasi kata sandi */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Ketik ulang kata sandi baru"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                confirmPasswordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
        </div>

        {/* Informasi tambahan */}
        <div className="mb-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-500 border border-gray-300">
          Setelah kata sandi diubah, silakan masuk kembali dengan kata sandi baru di semua perangkat.
        </div>

        {/* Tombol lanjutkan */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
