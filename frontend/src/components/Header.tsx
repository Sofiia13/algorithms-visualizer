import type React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full mx-auto bg-[#bae8e8] text-[#272343] shadow-md rounded-4xl">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Algorithms Visualizer</h1>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-[#f9bc60] transition-colors">
            Sorting Algorithms
          </li>
          <li className="cursor-pointer hover:text-[#f9bc60] transition-colors">
            Graphs
          </li>
        </ul>
      </nav>
    </header>
  );
};
