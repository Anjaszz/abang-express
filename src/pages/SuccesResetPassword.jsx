import React from 'react'
import { useNavigate } from 'react-router';
import { HeaderForgotPassword } from '../components/HeaderForgotPassword'
export const SuccesResetPassword = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login'); // Mengarahkan ke halaman forgot-password saat link diklik
      };
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="w-Screen h-screen bg-white p-6 rounded-lg shadow-md text-center"> {/* Full width dengan max width */}
    <HeaderForgotPassword /> {/* Tambahkan margin bawah */}
    <img src="Frame.svg" alt="Illustration of a person holding a large key and a padlock with a green checkmark" className="mx-auto mb-4 mt-20" />
    <h1 className="text-lg font-bold mb-2">Kata sandi berhasil diubah</h1>
    <p className="text-gray-600 mb-6 text-sm">Pakai kata sandi baru untuk masuk lagi ke aplikasi abang express kurir, jangan berikan kesiapanpun ya!</p>
    <button onClick={handleLogin} className="bg-red-500 text-white py-3 px-6 rounded-xl w-full">Masuk</button>
  </div>
</div>

  )
}
