import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="text-xl py-3 bg-pink-500 text-center font-bold text-white">
        <h1>
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা{" "}
          <a
            href="https://wa.me/8801744977712"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold hover:text-green-200"
          >
            WhatsApp
          </a>{" "}
          করুন:{" "}
          <a
            href="https://wa.me/8801744977712"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold hover:text-green-200"
          >
            +8801744977712
          </a>{" "}
          | হট লাইন:{" "}
          <a
            href="tel:09642922922"
            className="font-extrabold hover:text-green-200"
          >
            +8801303118515
          </a>
        </h1>
      </div>
    </div>
  );
};

export default TopBar;
