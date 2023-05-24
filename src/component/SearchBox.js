"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex border border-gray-300 rounded-full shadow-md px-4 py-3 ml-10 mr-5 items-center flex-grow"
    >
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text"
        className="w-full  focus:outline-none "
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl cursor-pointer text-gray-500 sm:mr-2"
      />
      <BiMicrophone className="hidden sm:inline-flex text-4xl  text-blue-500 pl-4 border-1-2 border-gray-200 mr-3" />
      <AiOutlineSearch
        onClick={handleSearch}
        className="text-2xl hidden sm:inline-flex cursor-pointer text-blue-500"
      />
    </form>
  
  );
};

export default SearchBox;
// //www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
