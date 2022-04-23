import React from "react";
import { FaTwitter, FaInfoCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-8 mb-6 flex lg:flex-row flex-col items-center gap-3 lg:justify-between">
      <div>
        <h1> © {new Date().getFullYear()} Principles Alrights reserved </h1>
      </div>
      <div className="flex gap-4 text-2xl">
        <FaTwitter />
        <FaInfoCircle />
      </div>
    </div>
  );
};

export default Footer;
