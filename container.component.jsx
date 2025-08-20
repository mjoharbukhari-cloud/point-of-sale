import React from "react";

export const Container = ({ className = "", children }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto px-3 md:px-[2rem] lg:px-[5rem] xl:px-[8rem] 2xl:px-[8rem] relative ${className}`}
    >
      {children}
    </div>
  );
};
