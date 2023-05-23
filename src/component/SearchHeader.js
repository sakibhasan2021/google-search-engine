import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              width="150"
              height="150"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex-1">
          <SearchBox />
        </div>
        {/* icons */}
        <div className="hidden md:inline-flex space-x-3">
          <RiSettings3Line className="header-icons" />
          <TbGridDots className="header-icons" />
        </div>
        <button className="bg-blue-500 font-medium text-white rounded-md hover:bg-brightness-100 px-6 py-2 hover:shadow-md transition-all ml-2">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
