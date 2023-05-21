import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";

export default function HomeSearch() {
  return (
    <>
      <form className="flex mt-5 w-full mx-auto max-w-[90%] focus-within:shadow sm:max-w-xl md:mx-w-2xl border border-gray-200 px-5 py-5 rounded-full hover:shadow-md transition-shadow">
        <AiOutlineSearch className="text-xl mr-3 text-gray-500" />
        <input className="flex-grow focus:outline-none" type="text" />
        <BiMicrophone className="text-xl" />
      </form>
    </>
  );
}
