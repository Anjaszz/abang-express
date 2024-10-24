import React, { useState } from "react";
import {
  FaLock,
  FaStar,
  FaBell,
  FaQuestionCircle,
  FaHeart,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";
import BottomNavBar from "../components/BottomNavbar";
import LogoutPopup from "../components/PopupLogout"; 
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const HandleEdit = () => {
    navigate("/edit-profile");
  };
  const confirmLogout = () => {
    setShowPopup(false);
    navigate("/login"); 
  };

  const cancelLogout = () => {
    setShowPopup(false);
  };

  const handleChangePass = () => {
    navigate("/change-password");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-red-500 text-white text-center py-4 text-lg font-bold h-32 relative">
        <h1 className="mt-5">Akun</h1>
      </div>

      {/* Profile Section */}
      <div className="p-4 relative bottom-12">
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
          <img
            src="profile1.png"
            alt="Profile picture of Albertus Pangaribuan"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="font-bold">Albertus Pangaribuan</div>
            <div className="text-gray-500">+62822-8058-1234</div>
            <div className="text-gray-500">advenreey@gmail.com</div>
          </div>
          <div
            className="text-red-500 font-bold cursor-pointer"
            onClick={HandleEdit}
          >
            Ubah
          </div>
        </div>

        {/* Menu Section */}
        <div className="mt-4">
          <div
            className="bg-white rounded-lg p-4 flex items-center mb-4"
            onClick={handleChangePass}
          >
            <FaLock className="mr-4 text-gray-500" />
            <div className="flex-1">Ganti Kata Sandi</div>
            <FaChevronRight className="text-gray-500" />
          </div>

          <div className="bg-white rounded-lg  p-4 flex items-center mb-4">
            <FaStar className="mr-4 text-gray-500" />
            <div className="flex-1">Beri Nilai Aplikasi</div>
            <FaChevronRight className="text-gray-500" />
          </div>

          <div className="bg-white rounded-lg  p-4 flex items-center mb-4">
            <FaBell className="mr-4 text-gray-500" />
            <div className="flex-1">Notifikasi</div>
            <FaChevronRight className="text-gray-500" />
          </div>

          <div className="bg-white rounded-lg  p-4 flex items-center mb-4">
            <FaQuestionCircle className="mr-4 text-gray-500" />
            <div className="flex-1">Bantuan</div>
            <FaChevronRight className="text-gray-500" />
          </div>

          <div className="bg-white rounded-lg  p-4 flex items-center mb-2">
            <FaHeart className="mr-4 text-gray-500" />
            <div className="flex-1">Kebijakan Privasi</div>
            <FaChevronRight className="text-gray-500" />
          </div>

          <div
            className="bg-white rounded-lg  p-4 flex items-center cursor-pointer"
            onClick={handleLogoutClick}
          >
            <FaSignOutAlt className="mr-4 text-gray-500" />
            <div className="flex-1">Keluar</div>
          </div>
        </div>
      </div>

      {/* Popup Box */}
      {showPopup && (
        <LogoutPopup onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}

      <BottomNavBar />
    </div>
  );
};

export default Account;
