"use client";

import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const Actions = ({ selectFriend }) => {
  const { timeline, setTimeline } = useContext(FriendContext);
  const handleAction = (type) => {
    const newActivity = {
      name: selectFriend.name ,
      actionType: type,
      date: new Date().toISOString(),
    };
    toast.success(`${type} with ${selectFriend.name}`,{
      position: "top-center",
    })
    setTimeline([...timeline, newActivity])
  };
  

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-5">
        <div
          onClick={() => handleAction('call')}
          className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn"
        >
          <div>
            <IoCall className="text-3xl" />
          </div>
          <p className="text-xl font-medium">Call</p>
        </div>
        <div onClick={() => handleAction('text')} className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn">
          <div>
            <IoMdText className="text-3xl" />
          </div>
          <p className="text-xl font-medium">Text</p>
        </div>
        <div onClick={() => handleAction('video')} className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn">
          <div>
            <FaVideo className="text-3xl" />
          </div>
          <p className="text-xl font-medium">Video</p>
        </div>
      </div>
    </div>
  );
};

export default Actions;
