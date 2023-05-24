"use client";

import React, { useEffect } from 'react';

const Error = ({error,reset}) => {
    useEffect(()=>{
        console.log("error ",error);
    },[error])
    return (
        <div className="flex justify-center flex-col items-center py-4">
            <h1 className="text-4xl text-blue-500 mt-4">Something went Wrong</h1>
            <button className="text-white bg-blue-400 font-medium py-3 px-2 rounded-full mt-4" onClick={()=>reset(

            )}>Try again</button>
        </div>
    );
};

export default Error;