"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex justify-center items-center mt-8 gap-5">
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default ClientPage;
