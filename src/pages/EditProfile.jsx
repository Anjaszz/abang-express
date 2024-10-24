import React, { useState } from "react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAddressChange = (e) => {
    if (e.target.value.length <= 150) {
      setAddress(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    navigate("/account");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={handleClosePopup}
        />
        <h1 className="text-xl font-semibold">Ubah Profil</h1>
        <div></div>
      </div>

      <div className="flex items-center mb-4">
        <img
          src="profile1.png"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="text-sm">Semua orang akan dapat melihat foto Kamu.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Nama<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue="Albertus Pangaribuan"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue="Demo@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Nomor Handphone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue="0822 8058 5903"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Tanggal Lahir
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            defaultValue="10 / 12 / 1994"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Jenis Kelamin
          </label>
          <div className="relative">
            <select className="w-full border rounded-lg px-3 py-2 appearance-none">
              <option>Laki - Laki</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Provinsi</label>
          <div className="relative">
            <select className="w-full border rounded-lg px-3 py-2 appearance-none">
              <option>DKI Jakarta</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Kabupaten</label>
          <div className="relative">
            <select className="w-full border rounded-lg px-3 py-2 appearance-none">
              <option>Grogol</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Alamat<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            maxLength="150"
            value={address}
            onChange={handleAddressChange}
            placeholder="Masukkan alamat..."
          />
          <p className="text-gray-500 text-xs flex justify-end mt-2">
            {address.length}/150
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Simpan
        </button>
      </form>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Data berhasil disimpan!
            </h2>
            <button
              onClick={handleClosePopup}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
