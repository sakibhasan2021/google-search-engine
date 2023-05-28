
import SearchOption from "@/component/SearchOption";
import SearchResult from "@/component/SearchResult";
import Link from "next/link";
import React from "react";

const page =async ({searchParams}) => {
  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)
  if(!response.ok){
    throw new Error('Something went wrong')
  }
  const data=await response.json()
 const results= data.items

 if(!results){
      return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results Found</h1>
        <p className="text-lg">Search Something new or back to 
         <Link className="text-blue-500" href=""> Home</Link>
         </p>
       
      </div>
    }
  return (
    
    <div>
      {
        results && <SearchResult data={data}/>
      }
    </div>
  );
};

export default page;
