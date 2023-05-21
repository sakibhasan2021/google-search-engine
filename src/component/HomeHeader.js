import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import React from "react";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex justify-end text-sm p-5 space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://images.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-300 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
