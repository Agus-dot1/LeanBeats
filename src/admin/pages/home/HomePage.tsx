import React from 'react';

const HomePage = () => {
  return (
    <>
<div className="grid grid-cols-3 gap-4">
  {/* Stats Cards */}
  <div className="col-span-1 bg-[#444444] rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-2">Total Beats</h3>
    <p className="text-3xl font-bold">247</p>
  </div>
  <div className="col-span-1 bg-[#444444] rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-2">Drum Kits</h3>
    <p className="text-3xl font-bold">52</p>
  </div>
  <div className="col-span-1 bg-[#444444] rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
    <p className="text-3xl font-bold">$12,450</p>
  </div>

  {/* Recently Edited */}
  <div className="col-span-2 bg-[#444444] rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-4">Recently Edited Products</h3>
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span>Trap Beat Pack Vol. 2</span>
        <span className="text-gray-500">2 hours ago</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Summer Drums Kit</span>
        <span className="text-gray-500">5 hours ago</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Hip Hop Essentials</span>
        <span className="text-gray-500">1 day ago</span>
      </div>
    </div>
  </div>

  {/* Quick Actions */}
  <div className="col-span-1 bg-[#444444] rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
    <div className="space-y-3">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add New Beat
      </button>
      <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Create Drum Kit
      </button>
      <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
        View Analytics
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default HomePage;