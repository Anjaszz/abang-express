// ChangePassword.js
import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (newPassword.length < 8) {
      setErrorMessage("Kata sandi baru harus minimal 8 karakter");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Konfirmasi kata sandi tidak cocok");
      return;
    }

    
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    navigate("/account"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-screen h-screen max-w-xs p-4">
        <div className="flex items-center mb-8 mt-2">
          <FaArrowLeft className="text-xl" onClick={handleClosePopup} />
          <h1 className="text-xl font-bold ml-14">Ubah Kata Sandi</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Kata sandi lama"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showOldPassword ? (
                <FaEye
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Kata sandi baru"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showNewPassword ? (
                <FaEye
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi kata sandi"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showConfirmPassword ? (
                <FaEye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="mb-6">
            <p className="text-xs text-gray-500 bg-gray-100 p-3 rounded-md border">
              Setelah kata sandi diubah, silakan masuk kembali dengan kata sandi
              baru di semua perangkat.
            </p>
          </div>
          <button
            className="w-full py-2 mb-4 text-white bg-red-500 rounded-lg"
            type="submit"
          >
            Ubah Kata Sandi
          </button>
        </form>
        <a
          href="/reset-password"
          className="text-red-500 text-center block font-medium"
        >
          Lupa Kata Sandi?
        </a>
      </div>
      {popupVisible && (
        <SuccessPopup
          message="Kata sandi berhasil diubah!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ChangePassword;
