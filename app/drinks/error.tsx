"use client";

import React from "react";

const error: React.FC<{ error: Error }> = ({ error }) => {
  console.log(error);
  return <div>{error.message}</div>;
};

export default error;
