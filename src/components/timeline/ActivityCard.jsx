import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const ActivityCard = ({ data }) => {
  return (
    <div className="">
      <div className="bg-white p-5 rounded-md shadow-sm flex items-center  gap-5">
        <div className="text-3xl">
          {data.actionType === "call" ? (
            <IoCall />
          ) : data.actionType === "text" ? (
            <IoMdText />
          ) : (
            <FaVideo />
          )}
        </div>
        <div>
          <h2 className="text-[#64748B]">
            <span className="text-[1.2rem] font-medium text-black">{data.actionType === "call"
              ? "Call"
              : data.actionType === "text"
                ? "Text"
                : "Video"}</span> with {data.name}
          </h2>
          <p>{new Date(data.date).toLocaleDateString("en-US", {
            year : 'numeric',
            month : 'long',
            day: "numeric"
          })}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
