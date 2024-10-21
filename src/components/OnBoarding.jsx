// components/OnboardingScreen.js
import React from 'react';

const OnboardingScreen = ({ onFinish }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <img src="onboard.svg" alt="onboard" />
      <h1 className="text-black text-2xl font-bold mb-6 justify-center">Apps Kurir</h1>
      <p className='text-black text-center font-normal mb-5'>Siapkan strategi khusus untuk <br /> mengatasi keluhan pelanggan.</p>
      <button
        onClick={onFinish}
        className="px-6 py-3 bg-red-500 font-semibold rounded-2xl hover:bg-red-600 w-72"
      >
        Mulai Sekarang
      </button>
    </div>
  );
};

export default OnboardingScreen;
