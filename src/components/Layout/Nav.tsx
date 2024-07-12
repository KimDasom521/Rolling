import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex flex-row align-items-center">
          <img
            className="mr-2"
            src="/assets/icons/IconColor.png"
            alt="Rolling 로고"
            width="27.82"
          />
          <p className="font-poppins font-bold text-xl text-gray-800">
            Rolling
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
