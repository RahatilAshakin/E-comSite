import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaMapMarkedAlt, FaLock, FaBell, FaCreditCard } from 'react-icons/fa';

const settings = [
  {
    icon: <FaUser className="text-pink-500 text-xl" />,
    title: 'Personal Information',
    description: 'Edit your name, phone number, and gender.',
    to: '/settings/profile',
  },
  {
    icon: <FaMapMarkedAlt className="text-pink-500 text-xl" />,
    title: 'Address Book',
    description: 'Manage your shipping addresses.',
    to: '/settings/addresses',
  },
  {
    icon: <FaLock className="text-pink-500 text-xl" />,
    title: 'Change Password',
    description: 'Update your login credentials.',
    to: '/settings/password',
  },
  {
    icon: <FaBell className="text-pink-500 text-xl" />,
    title: 'Notifications',
    description: 'Control notification preferences.',
    to: '/settings/notifications',
  },
  {
    icon: <FaCreditCard className="text-pink-500 text-xl" />,
    title: 'Payment Methods',
    description: 'Add or remove cards and payment options.',
    to: '/settings/payment',
  },
];

const Setting = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Account Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {settings.map((setting, index) => (
          <Link
            key={index}
            to={setting.to}
            className="flex items-start gap-4 bg-white shadow hover:shadow-lg transition rounded-xl p-4 border hover:border-pink-400"
          >
            <div className="mt-1">{setting.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{setting.title}</h3>
              <p className="text-sm text-gray-600">{setting.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Setting;
