// LogoutPopup.js
import React from 'react';

const LogoutPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-lg font-bold mb-4">Keluar dari Abang Express Kurir.</h2>
        <p className="mb-6">Apakah Anda yakin ingin keluar?</p>
        <div className="flex justify-end">
          <button
            className=" text-gray-500 mr-6 font-medium "
            onClick={onCancel}
          >
            Batal
          </button>
          <button
            className=" text-red-500 px-4 py-2 font-medium "
            onClick={onConfirm}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
