import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderForgotPassword } from '../components/HeaderForgotPassword';

const OTPVerificationPage = () => {
  const location = useLocation();
  const email = location.state?.email || 'example@example.com'; // Ambil email dari state atau default
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isResendDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [isResendDisabled, countdown]);

  // Efek untuk memantau apakah semua input sudah diisi
  useEffect(() => {
    const otp = otpCode.join('');
    if (otpCode.every(code => code !== '')) {
      // Jika semua input telah diisi, maka verifikasi OTP dan arahkan ke halaman berikutnya
      console.log('OTP:', otp);
      navigate('/reset-password'); // Pindah ke halaman reset password
    }
  }, [otpCode, navigate]); // Tambahkan otpCode dan navigate sebagai dependency

  const handleResendCode = () => {
    console.log('Mengirim ulang kode OTP...');
    setIsResendDisabled(true);
    setCountdown(30); // Reset countdown
  };

  const handleChange = (value, index) => {
    const newOtpCode = [...otpCode];
    newOtpCode[index] = value;

    setOtpCode(newOtpCode);

    if (value && index < otpCode.length - 1) {
      const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`);
      nextInput?.focus(); // Fokus pada input berikutnya jika ada
    }

    // Reset error jika pengguna mulai mengisi
    if (error && newOtpCode.every(code => code !== '')) {
      setError(false);
    }
  };

  const maskEmail = (email) => {
    const parts = email.split('@');
    if (parts.length === 2) {
      const [username, domain] = parts;
      const maskedUsername = username.slice(0, 3) + '*'.repeat(Math.max(0, username.length - 3));
      return `${maskedUsername}@${domain}`;
    }
    return email;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-screen h-screen max-w-md p-6">
        <HeaderForgotPassword />
        <img src="logomail.svg" alt="Email icon" className="mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2 text-center">Masukkan Kode Verifikasi</h2>
        <p className="text-gray-500 mb-4 text-center text-sm">Kode verifikasi telah kami kirim melalui email.</p>
        <p className="text-gray-700 text-center mb-4">{maskEmail(email)}</p>
        
        <form className="mb-4">
          <div className="flex justify-center space-x-2 mb-4">
            {otpCode.map((code, index) => (
              <input
                key={index}
                name={`otp-${index}`}
                type="text"
                maxLength="1"
                value={code}
                onChange={(e) => handleChange(e.target.value, index)}
                className={`border-b-2 text-2xl font-semibold w-10 text-center ${error && code === '' ? 'border-red-500' : 'border-gray-300'}`}
              />
            ))}
          </div>
        </form>

        <p className="text-gray-500 text-sm text-center">
          Tidak menerima kode? 
          {isResendDisabled ? `Mohon tunggu ${countdown} detik untuk mengirim ulang kode.` : (
            <button 
              onClick={handleResendCode} 
              className="text-red-500 underline ml-2"
            >
              Kirim Ulang
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
