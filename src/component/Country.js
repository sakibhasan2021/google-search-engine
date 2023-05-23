"use client";

import React, { useState, useEffect } from "react";

const Country = () => {
  const [demoCountry, setDemoCountry] = useState("United State");
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setDemoCountry(data));
  }, []);
  return (
    <div>
      <h1>{demoCountry}</h1>
    </div>
  );
};

export default Country;
