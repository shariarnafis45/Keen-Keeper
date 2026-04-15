
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ path, children }) => {
  const pathName = usePathname();
  return (
    <li>
      <Link className={`${pathName === path && "bg-[#244D3F] text-white"} `} href={path}>{children}</Link>
    </li>
  );
};

export default NavLinks;
