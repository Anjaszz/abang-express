import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNavBar = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "home") {
      navigate("/home");
    } else if (menu === "account") {
      navigate("/account");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border ">
      <div className="flex justify-around py-2">
        {/* Beranda */}
        <div className="text-center" onClick={() => handleMenuClick("home")}>
          <div className="ml-2">
            <img
              src={
                activeMenu === "home"
                  ? "IconNav/HomeActive.svg"
                  : "IconNav/HomeInactive.svg"
              }
              alt="Home Icon"
              className="w-6 h-6 mx-auto"
            />
          </div>
          <div className="text-gray-500 text-xs">Beranda</div>
        </div>

        {/* Nearby */}
        <div className="text-center" onClick={() => handleMenuClick("nearby")}>
          <div className="ml-2">
            <img
              src="IconNav/Nearby.svg"
              alt="Nearby Icon"
              className="w-6 h-6 mx-auto"
            />
          </div>
          <div className="text-gray-500 text-xs">Nearby</div>
        </div>

        {/* Paket Anda */}
        <div
          className="text-center relative"
          onClick={() => handleMenuClick("packages")}
        >
          <div className="">
            <div className="bg-red-500 rounded-full border-2 shadow-md border-gray-50 p-3 w-12 h-12 absolute bottom-6 left-4 mx-auto">
              <img
                src="IconNav/Paket.svg"
                alt="Paket Anda Icon"
                className="w-6 h-6"
              />
            </div>
          </div>
          <div className="text-gray-500 text-xs relative top-6 left-2">
            Paket Anda
          </div>
        </div>

        {/* Notifications */}
        <div
          className="text-center"
          onClick={() => handleMenuClick("notifications")}
        >
          <div className="ml-3">
            <img
              src="IconNav/Notification.svg"
              alt="Notifications Icon"
              className="w-6 h-6 mx-auto"
            />
          </div>
          <div className="text-gray-500 text-xs ">Notifications</div>
        </div>

        {/* Account */}
        <div className="text-center" onClick={() => handleMenuClick("account")}>
          <div className="ml-2">
            <img
              src={
                activeMenu === "account"
                  ? "IconNav/AccActive.png"
                  : "IconNav/AccInactive.png"
              }
              alt="Account Icon"
              className="w-6 h-6 mx-auto"
            />
          </div>
          <div className="text-gray-500 text-xs">Account</div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
