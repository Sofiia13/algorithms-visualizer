import type React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full mx-auto bg-[#bae8e8] text-[#272343] shadow-md rounded-4xl">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-xl font-bold">Algorithms Visualizer</h1>
        </Link>

        <ul className="flex gap-6">
          <Link
            to="/sorting"
            className={`cursor-pointer hover:text-[#f9bc60] transition-colors ${
              currentPath === "/sorting" ? "text-yellow-600 font-bold" : ""
            }`}
          >
            Sorting Algorithms
          </Link>
          <li>
            <Link
              to="/data-structures"
              className={`cursor-pointer hover:text-[#f9bc60] transition-colors ${
                currentPath === "/data-structures"
                  ? "text-yellow-600 font-bold"
                  : ""
              }`}
            >
              Data Structures
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
