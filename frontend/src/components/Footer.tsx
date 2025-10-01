import type React from "react";
import linkedinIcon from "../assets/linkedin.png";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-4 bg-[#bae8e8] text-[#272343] rounded-2xl">
      <a
        href="https://www.linkedin.com/in/sofiiastanishevska/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn icon"
          className="w-6 h-6"
        />
      </a>
      <p className="text-sm">Made by Sofiia Stanishevska</p>
    </footer>
  );
};
