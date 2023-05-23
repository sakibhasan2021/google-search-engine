import React from "react";
import Country from "./Country";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-5">
        <Country />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex space-x-6 items-center">
          <li className="link">About</li>
          <li className="link">Advertersing</li>
          <li className="link">About</li>
          <li className="link">Advertersing</li>
        </ul>
        <ul className="flex space-x-6 items-center">
          <li className="link">Settings</li>
          <li className="link">Settings</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
