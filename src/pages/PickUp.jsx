import React, { useState,useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'; // Import icon back
import { useNavigate,useLocation } from 'react-router';
const Pickup = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);
  const pickupData = {
    Pending: [
      {
        id: '#1234566788',
        date: '10 Sep 2021',
        total: 50,
        weight: '32 Kg',
        estimate: '10 Sep 2021, 20:20 WIB',
        location: 'Jl. Ampera Raya No. 133, Ragunan, Jakarta',
      },
      {
        id: '#973837633',
        date: '21 Sep 2024',
        total: 50,
        weight: '30 Kg',
        estimate: '10 Sep 2021, 20:20 WIB',
        location: 'Jl. Ampera Raya No. 133, Ragunan, Jakarta',
      },
    ],
    'In Progress': [
      {
        id: '#2345678899',
        date: '11 Sep 2021',
        total: 60,
        weight: '45 Kg',
        estimate: '11 Sep 2021, 15:00 WIB',
        location: 'Jl. Sudirman No. 100, Jakarta',
      },
    ],
    Success: [
      {
        id: '#3456789900',
        date: '12 Sep 2021',
        total: 70,
        weight: '50 Kg',
        estimate: '12 Sep 2021, 10:30 WIB',
        location: 'Jl. Kuningan No. 55, Jakarta',
      },
    ],
    Trouble: [
      {
        id: '#4567890111',
        date: '13 Sep 2021',
        total: 80,
        weight: '60 Kg',
        estimate: '13 Sep 2021, 09:00 WIB',
        location: 'Jl. Gatot Subroto No. 20, Jakarta',
      },
    ],
  };

  // Function to determine the color class based on the activeTab value
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-200 text-yellow-600';
      case 'In Progress':
        return 'bg-blue-200 text-blue-600';
      case 'Success':
        return 'bg-green-200 text-green-600';
      case 'Trouble':
        return 'bg-red-200 text-red-600';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const renderList = () => {
    return pickupData[activeTab].map((item, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="Truck.svg" alt="Truck Icon" className="w-8 h-8 text-pink-500" />
            <div className="ml-2">
              <div className="font-semibold">{item.id}</div>
              <div className="text-gray-500 text-sm">{item.date}</div>
            </div>
          </div>
          {/* Apply conditional styling based on activeTab */}
          <div className={`${getStatusClass(activeTab)} px-2 py-1 rounded-full text-sm`}>{activeTab}</div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-gray-500 text-sm">
            <div>Total Paket</div>
            <div>Berat</div>
            <div>Estimasi</div>
          </div>
          <div className="flex justify-between font-semibold mt-1">
            <div>{item.total}</div>
            <div>{item.weight}</div>
            <div>{item.estimate}</div>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-2 rounded-lg">
          <div className="flex items-center text-gray-500 text-sm">
            <i className="fas fa-map-marker-alt text-xl text-pink-500"></i>
            <div className="ml-2">
              <div className="font-semibold">Kost</div>
              <div>{item.location}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto bg-white  rounded-lg">
      {/* Header with Back Icon and Pickup Text */}
      <div className="flex justify-between items-center p-4 mb-5">
        <AiOutlineArrowLeft onClick={() => navigate(-1)} className="text-2xl cursor-pointer" />
        <h1 className="text-xl font-semibold">Pickup</h1>
        <div></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b">
        <div
          className={`py-2 ${activeTab === 'Pending' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Pending')}
        >
          Pending
        </div>
        <div
          className={`py-2 ${activeTab === 'In Progress' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('In Progress')}
        >
          In Progress
        </div>
        <div
          className={`py-2 ${activeTab === 'Success' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Success')}
        >
          Success
        </div>
        <div
          className={`py-2 ${activeTab === 'Trouble' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Trouble')}
        >
          Trouble
        </div>
      </div>

      {/* List Content */}
      <div className="p-4 space-y-4">{renderList()}</div>
    </div>
  );
};

export default Pickup;
