
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";

const NavLinks = ({ path, children }) => {
  const pathName = usePathname();
  return (
    <li>
      <Link className={`${pathName === path && "bg-[#244D3F] text-white"} `} href={path}><RiHome2Line className={`${path === '/' && 'inline-block'} hidden`} /> <FaRegClock className={`${path === '/timeline' && 'inline-block'} hidden`}/> <MdOutlineQueryStats className={`${path === '/stats' && 'inline-block'} hidden`}/> {children}</Link>
    </li>
  );
};

export default NavLinks;
