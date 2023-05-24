"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

const SearchOption = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "image" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 pb-3 px-2 cursor-pointer ${
          pathName === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("image")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 pb-3 px-2 cursor-pointer ${
          pathName === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchOption;
