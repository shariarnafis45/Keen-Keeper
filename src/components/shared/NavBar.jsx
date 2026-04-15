import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/timeline",
      name: "Timeline",
    },
    {
      path: "/stats",
      name: "Stats",
    },
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold gap-2"
            >
              {navItems.map((item, i) => (
                <NavLinks key={i} path={item.path}>
                  {item.name}
                </NavLinks>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="text-2xl font-extrabold text-[#1F2937]">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-2">
            {navItems.map((item, i) => (
              <NavLinks key={i} path={item.path}>
                {item.name}
              </NavLinks>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
