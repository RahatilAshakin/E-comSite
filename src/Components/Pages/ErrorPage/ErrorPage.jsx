import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-pink-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">
        Oops! Page Not Found
      </h2>
      <p className="mb-6 text-center max-w-md text-gray-600 italic">
        "Sometimes the road less traveled is less traveled for a reason."
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded shadow transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
