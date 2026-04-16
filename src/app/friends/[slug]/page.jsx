import { sendError } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoArchiveOutline, IoCall } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const FriendDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch("http://localhost:3000/friendsData.json");
  const friends = await res.json();
  const selectFriend = friends.find((friend) => slug == friend.id);
  const { name, bio, email, tags, status, picture,days_since_contact,goal,next_due_date } = selectFriend;

  return (
    <div className="bg-[#F8FAFC] py-15 min-h-screen px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-start gap-7">
        {/* left */}
        <div className="max-w-md">
          {/* left-1 */}
          <div className="px-15 py-10 shadow-sm flex flex-col justify-center items-center rounded-xl bg-white">
            <Image
              src={picture}
              alt={`profile picture of ${name}`}
              width={80}
              height={80}
              className="rounded-full"
            ></Image>
            <h2 className="text-xl font-semibold mt-2">{name}</h2>
            <div
              className={`badge badge-success text-white border-none mt-2 ${status === "overdue" && "bg-red-500"} ${status === "almost due" && "bg-[#EFAD44]"}`}
            >
              {status}
            </div>

            <div>
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="badge badge-soft badge-success bg-green-100 text-black mr-2 my-4 font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 my-2">{bio}</p>
            <p className="text-center text-gray-700">Preferred: email</p>
          </div>
          {/* left-2 */}
          <div className="mt-5 space-y-3">
            <button className="btn w-full shadow-sm font-medium text-[1rem] bg-white">
              <RiNotificationSnoozeLine /> Snooze 2 weeks
            </button>
            <button className="btn w-full shadow-sm font-medium text-[1rem] bg-white">
              <IoArchiveOutline /> Archive
            </button>
            <button className="btn w-full shadow-sm font-medium text-[1rem] text-red-600 bg-white">
              <MdOutlineDeleteForever /> Delete
            </button>
          </div>
        </div>
        {/* right */}
        <div>
          {/* stats */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="stats shadow bg-white">
                <div className="stat text-center px-9 ">
                  <div className="stat-value font-bold text-[#244D3F]">
                    {days_since_contact}
                  </div>
                  <div className="stat-desc">Days Since Contact</div>
                </div>
              </div>
              <div className="stats shadow bg-white">
                <div className="stat text-center px-9 ">
                  <div className="stat-value font-bold text-[#244D3F]">
                    {goal}
                  </div>
                  <div className="stat-desc">Goal (Days)</div>
                </div>
              </div>
              <div className="stats shadow bg-white">
                <div className="stat text-center ">
                  <div className="stat-value font-bold text-[#244D3F]">
                    {next_due_date}
                  </div>
                  <div className="stat-desc">Next Due</div>
                </div>
              </div>
              
            </div>
          </div>
          {/* relations */}
          <div className="bg-white p-5 mt-7 shadow-sm rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium text-[#244D3F]">Relationship Goal</h2>
              <button className="btn">Edit</button>
            </div>
            <p className="text-gray-700 mt-3">Connect every <span className="font-bold text-xl text-black">{goal} days</span></p>
          </div>
          {/* check in */}
          <div className="bg-white p-5 mt-7 shadow-sm rounded-md">
              <h2 className="text-xl font-medium text-[#244D3F]">Quick Check-In</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-5">
                <div className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn">
                  <div>
                    <IoCall className="text-3xl" />
                  </div>
                  <p className="text-xl font-medium">Call</p>
                </div>
                <div className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn">
                  <div>
                    <IoMdText className="text-3xl"/>
                  </div>
                  <p className="text-xl font-medium">Text</p>
                </div>
                <div className="px-8 py-15 bg-[#F8FAFC] shadow-sm flex flex-col  items-center justify-center btn">
                  <div>
                    <FaVideo className="text-3xl"/>
                  </div>
                  <p className="text-xl font-medium">Video</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
