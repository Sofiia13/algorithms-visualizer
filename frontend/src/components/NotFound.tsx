import type React from "react";
import notFound from "../assets/not-found.png";

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[70vh]">
      <img src={notFound} alt="Not found" className="max-w-full max-h-full" />
      <p className="mt-4 text-gray-700 text-lg">Page not found</p>
    </div>
  );
};