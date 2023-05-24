"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    // navigate to search page
    router.push(`/search/web?searchTerm=${input}`);
  };
  // random word
  const randomWordSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;
    // console.log(response);
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mt-5 w-full mx-auto max-w-[90%] focus-within:shadow
       sm:max-w-xl md:mx-w-2xl border border-gray-200 px-5 py-5 rounded-full hover:shadow-md transition-shadow text"
      >
        <AiOutlineSearch className="text-xl mr-3 text-gray-500" />
        <input
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
          type="text"
        />
        <BiMicrophone className="text-xl" />
      </form>
      <div className="mt-8 flex flex-col sm:space-y-0 sm:space-x-4 sm:flex-row space-y-2 justify-center">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomWordSearch}
          className="btn flex justify-center items-center disabled:opacity-95"
        >
          {randomSearchLoading ? (
            <Image
              src="random-search.svg"
              alt="spinner "
              className="h-6 text-center"
            />
          ) : (
            "I m felling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
