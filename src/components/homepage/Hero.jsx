import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Stats from "./Stats";

const Hero = ({friendsdata}) => {
    
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero min-h-[70vh]">
        <div className="hero-content text-center flex flex-col">
          <div className="">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <Link href={'/'}>
              <button className="btn bg-[#244D3F] text-white">
                <FaPlus /> Add a Friend
              </button>
            </Link>
          </div>
          <div className="mt-10">
            <Stats friendsdata={friendsdata}></Stats>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
