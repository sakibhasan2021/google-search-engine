import HomeHeader from "@/component/HomeHeader";
import HomeSearch from "@/component/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />
      {/* body */}
      <div className="mt-24 flex flex-col items-center">
        <Image
          width="200"
          alt="image"
          height="100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBl5eA3gwpjJrMFmbJaY3VIZNjH1O6iJYTg&usqp=CAU"
        />
        <HomeSearch />
      </div>
    </>
  );
}
