// src/Components/Pages/Profile/Profile.jsx
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Mock user data; replace with actual fetched data as needed
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+8801XXXXXXXXX",
    avatar: "https://via.placeholder.com/100",
  };

  const menuItems = [
    { label: "My Orders", to: "/orders" },
    { label: "My Wallet", to: "/wallet" },
    { label: "Messages", to: "/messages" },
    { label: "Account Settings", to: "/settings" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-1/4 p-6 shadow-md">
        <div className="flex flex-col items-center text-center">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500">{user.phone}</p>
        </div>

        <nav className="mt-8 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <Link
            to="/logout"
            className="block w-full text-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl  font-bold text-gray-800 mb-6">Account Settings</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4 bg">
            <div>
              <h3 className="font-semibold text-gray-600">Full Name</h3>
              <p className="text-gray-800">{user.name}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-600">Email Address</h3>
              <p className="text-gray-800">{user.email}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-600">Phone Number</h3>
              <p className="text-gray-800">{user.phone}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                to="/edit-profile"
                className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition"
              >
                Edit Profile
              </Link>
              <Link
                to="/change-password"
                className="px-4 py-2 bg-cyan-600 text-white rounded-md shadow hover:bg-cyan-700 transition"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
