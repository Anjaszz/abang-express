import React from "react";
import { useNavigate } from "react-router-dom";

const OnboardingScreen = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src="onboard.svg" alt="onboard" />
      <h1 className="text-black text-2xl font-bold mb-6 justify-center">
        Apps Kurir
      </h1>
      <p className="text-black text-center font-normal mb-5">
        Siapkan strategi khusus untuk <br /> mengatasi keluhan pelanggan.
      </p>
      <button
        onClick={handleFinish}
        className="px-6 py-3 text-white bg-red-600 font-semibold rounded-2xl hover:bg-red-700 w-72"
      >
        Mulai Sekarang
      </button>
    </div>
  );
};

export default OnboardingScreen;
