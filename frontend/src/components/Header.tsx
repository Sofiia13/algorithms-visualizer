import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Burger } from "./Burger";

export const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto bg-[#bae8e8] text-[#272343] shadow-md rounded-4xl">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-xl font-bold">Algorithms Visualizer</h1>
        </Link>

        <ul className="hidden md:flex gap-6">
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

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <Burger
          setMenuOpen={setMenuOpen}
          currentPath={currentPath}
          menuOpen={menuOpen}
        />
      )}
    </header>
  );
};
