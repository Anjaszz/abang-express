import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const HeaderForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-8">
      <button onClick={() => navigate(-1)} className="text-gray-600">
        <FaArrowLeft className="text-xl" />
      </button>
      <span className="text-xl font-bold">Lupa Kata Sandi</span>
      <div className="text-transparent">.</div>
    </div>
  );
};
