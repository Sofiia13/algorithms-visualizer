import type React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

type Props = {
  setMenuOpen: (value: boolean) => void;
  currentPath: string;
  menuOpen: boolean;
};

export const Burger: React.FC<Props> = ({
  setMenuOpen,
  currentPath,
  menuOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full w-full bg-[#e3f6f5] py-10 px-5 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <header className="w-full mx-auto bg-[#bae8e8] text-[#272343] shadow-md rounded-4xl">
        <div className="flex justify-between items-center px-6 py-4">
          <Link to="/">
            <h1 className="text-xl font-bold">Algorithms Visualizer</h1>
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
      </header>

      <ul className="flex flex-col gap-6 px-6 py-8 text-lg">
        <li>
          <Link
            to="/sorting"
            onClick={() => setMenuOpen(false)}
            className={`block cursor-pointer hover:text-[#f9bc60] transition-colors ${
              currentPath === "/sorting" ? "text-yellow-600 font-bold" : ""
            }`}
          >
            Sorting Algorithms
          </Link>
        </li>
        <li>
          <Link
            to="/data-structures"
            onClick={() => setMenuOpen(false)}
            className={`block cursor-pointer hover:text-[#f9bc60] transition-colors ${
              currentPath === "/data-structures"
                ? "text-yellow-600 font-bold"
                : ""
            }`}
          >
            Data Structures
          </Link>
        </li>
      </ul>
    </div>
  );
};
