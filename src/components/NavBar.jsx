import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      {/* Nav Logo */}
      <div className="flex justify-between items-center   p-4">
        <Link to="/">
          <h1 className="text-3xl font-bold">Principles.</h1>
        </Link>
        <Link to="/newsletter">
          <FaEnvelopeOpenText className="text-3xl hover:text-slate-600" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
