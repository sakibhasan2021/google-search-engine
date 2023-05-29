import Link from 'next/link'
import Parser from 'html-react-parser';
import React from 'react'
export default function ImageResult({data}) {
  return (
    <div className="pb-24 mt-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-3">
     {
            
            data.items?.map((result) =>(
                <div className="mb-8 max-w-xl " key={result.link}>
                <div className="group flex flex-col">
                    <Link href={result.link}>
                        <img className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow "  src={result.link} alt={result.title}/>
                    </Link>
                    <Link className="text-sm truncate" href={result.link}>
                        <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
                    </Link>
                    <Link className="text-sm truncate" href={result.link}>
                      <p className="text-gray-600 group-hover:underline">{result.displayLink}</p>
                    </Link>
                   
                </div>
              
                </div>
            ))
        }


    </div>
       
    </div>
  )
}
