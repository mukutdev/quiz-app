import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  let activeStyle = {
    color: "white",
    backgroundColor: "#4f46e5",
  };

  return (
    <header className="shadow py-5">
      <nav className="container mx-auto">
        <div className="nav-items-wrapper flex justify-between items-center">
          <div className="logo md:ml-0 ml-3">
            <Link className="text-3xl font-bold text-indigo-600" to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-items">
            <div
              onClick={() => setNavOpen(!navOpen)}
              className="mr-4 rounded text-2xl bg-indigo-600 px-3 py-1 duration-500 ease-in text-white cursor-pointer top-0  md:hidden"
            >
              {navOpen ? (
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="text-2xl" icon={faBars} />
              )}
            </div>
            <div
              className={`flex flex-col duration-500 z-10 ease-in-out md:bg-transparent bg-indigo-600 md:flex-row absolute md:static w-full gap-6 items-center 
                    ${
                      navOpen
                        ? "top-20 left-0 text-white py-7"
                        : "top-[-300px] left-0 "
                    }`}
            >
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white"
                to={"/topics"}
              >
                Topics
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white"
                to={"/statistic"}
              >
                Statistic
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white"
                to={"/blog"}
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
