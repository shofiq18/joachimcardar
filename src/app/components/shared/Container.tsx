import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl container mx-auto px-4 lg:px-0">{children}</div>
  );
};

export default Container;
