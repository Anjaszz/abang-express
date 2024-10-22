import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import icon dari React Icons

const ForgotPasswordPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim email/nomor telepon ke server
    console.log('Email/Phone:', emailOrPhone);
    // Arahkan ke halaman OTP setelah sukses
    navigate('/otp-verification',{ state: { email: emailOrPhone } });
  };

  return (
    <div className=" w-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-screen h-screen  bg-white p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <FaArrowLeft className="text-xl" /> {/* Menggunakan icon dari React Icons */}
          </button>
          <span className="text-xl font-bold">Lupa Kata Sandi</span>
          <div className="text-transparent">.</div>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-left">Atur Ulang Kata Sandi</h2>
        <p className="text-gray-500 mb-6 text-left text-xs">
          Masukkan email atau nomor HP yang terdaftar. Kami akan mengirimkan kode verifikasi untuk mengatur ulang kata sandi.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email / Nomor Telepon"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
            Lanjutkan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
