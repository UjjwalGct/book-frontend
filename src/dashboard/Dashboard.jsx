import React, { useEffect } from "react";
import {
  HiOutlineBookOpen,
  HiUserGroup,
  HiShoppingBag,
  HiCurrencyRupee,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Dashboard = () => {
  const data = [
    { name: "Jan", books: 30 },
    { name: "Feb", books: 45 },
    { name: "Mar", books: 60 },
    { name: "Apr", books: 40 },
    { name: "May", books: 75 },
    { name: "Jun", books: 90 },
  ];
 
  


  return (

    
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
    
      <main className="flex-1 p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
          📊 Admin Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <StatCard
            icon={<HiOutlineBookOpen size={28} className="text-blue-600" />}
            label="Total Books"
            value="245"
          />
          <StatCard
            icon={<HiUserGroup size={28} className="text-green-600" />}
            label="Users"
            value="128"
          />
          <StatCard
            icon={<HiShoppingBag size={28} className="text-purple-600" />}
            label="Books Sold"
            value="89"
          />
          <StatCard
            icon={<HiCurrencyRupee size={28} className="text-orange-600" />}
            label="Earnings"
            value="₹12,300"
          />
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
            Monthly Books Uploaded
          </h2>
          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="books"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md flex items-center gap-3 sm:gap-4 hover:shadow-lg transition transform hover:scale-105 duration-200">
    {icon}
    <div>
      <h4 className="text-gray-500 text-xs sm:text-sm">{label}</h4>
      <h3 className="text-xl sm:text-2xl font-bold">{value}</h3>
    </div>
  </div>
);

export default Dashboard;
