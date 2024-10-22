import React, { useState } from 'react';
import { AiFillHome, AiFillBell, AiOutlineUser } from 'react-icons/ai';
import { FaBox, FaMapMarkerAlt, FaTruck, FaTruckLoading, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const HomePage = () => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="bg-white min-h-screen">
   <div className="bg-red-500 text-white text-center py-4 relative h-36 ">
  <img
    src="city.svg"
    alt="City"
    className="absolute inset-0 w-full h-full object-bottom object-contain" // Menambahkan opacity agar teks lebih terlihat
  />
  <h1 className="text-sm relative z-10 top-10">Abang Express</h1>
  <h2 className="text-xl font-bold relative z-10 top-11">Agen Jogjakarta</h2>
</div>


      <div className="bg-white relative bottom-10 shadow-md rounded-lg mx-4 mt-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="profile.svg"
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <span className="ml-4 text-lg">{isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isOnline}
                onChange={toggleOnlineStatus}
              />
              <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                <div
                  className={`${
                    isOnline ? 'bg-green-500 translate-x-4' : 'bg-red-500'
                  } w-4 h-4 rounded-full absolute top-1 left-1 transition-transform`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4 mt-4">
        {[
          { icon: <FaTruck className="text-red-500 text-2xl" />, label: 'Pending', count: '1 pickup' },
          { icon: <FaTruckLoading className="text-red-500 text-2xl" />, label: 'In Progress', count: '1 pickup' },
          { icon: <FaCheckCircle className="text-red-500 text-2xl" />, label: 'Success', count: '1 pickup' },
          { icon: <FaExclamationCircle className="text-red-500 text-2xl" />, label: 'Trouble', count: '1 pickup' },
        ].map(({ icon, label, count }, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4 flex items-center">
            <div className="flex items-center justify-center mb-2">{icon}</div>
            <div className="ml-4 text-center">
              <div className="text-gray-500 text-sm">{label}</div>
              <div className="text-sm font-bold">{count}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Pending</h3>
          <a href="#" className="text-red-500 font-semibold">
            Lihat Semua
          </a>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaTruck className="text-red-500 text-2xl" />
              <div className="ml-4">
                <div className="text-black font-bold">#1234566788</div>
                <div className="text-gray-500 text-md">10 Sep 2021</div>
              </div>
            </div>
            <div className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full">
              Pending
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-gray-500">
              <div>Berat</div>
              <div>Total Paket</div>
              <div>Estimasi</div>
            </div>
            <div className="flex justify-between">
              <div>32 Kg</div>
              <div>50</div>
              <div >10 Sep 2021, 20:20 WIB</div>
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 p-2 rounded-xl">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-gray-500" />
              <div className="ml-2">
                <div className="font-bold">Kost</div>
                <div className="text-gray-500 text-xs">
                  Jl. Ampera Raya No. 133, RT.05/RW.10, Ragunan, Kec. Ps. Minggu,
                  Kota Jakarta...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
  <div className="flex justify-around py-2">
    {[
      { 
        icon: <img src="Active.svg" alt="Home Icon" className="w-6 h-6" />, 
        label: 'Beranda' 
      },
      { 
        icon: <img src="Active.svg" alt="Nearby Icon" className="w-6 h-6" />, 
        label: 'Nearby' 
      },
      { 
        icon: (
          <div className="relative">
            <div 
              className="bg-red-500 rounded-full " 
              style={{ transform: 'translateY(-10px)' }}  // Mengangkat sedikit ikon Paket Anda
            >
              <img src="Active.svg" alt="Paket Icon" className="w-6 h-6" />
            </div>
          </div>
        ), 
        label: 'Paket Anda' 
      },
      { 
        icon: <img src="Active.svg" alt="Notifications Icon" className="w-6 h-6" />, 
        label: 'Notifications' 
      },
      { 
        icon: <img src="Active.svg" alt="Account Icon" className="w-6 h-6" />, 
        label: 'Account' 
      },
    ].map(({ icon, label }, index) => (
      <div key={index} className="text-center">
        <div className="ml-2">
          {icon}
        </div>
        <div className="text-gray-500 text-xs">{label}</div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default HomePage;
