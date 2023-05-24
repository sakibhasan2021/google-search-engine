
import SearchOption from "@/component/SearchOption";
import React from "react";

const page =async ({searchParams}) => {
  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)
  const data=await response.json()
 const results= data.items

  return (
    <div>
      {
        results && results.map((result,index) =><h1 key={index}>{result.title}</h1>)
      }
    </div>
  );
};

export default page;
