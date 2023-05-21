import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import React from "react";

export default function HomeHeader() {
  return (
    <header>
      <div className="">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://images.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-4xl" />
      </div>
    </header>
  );
}
