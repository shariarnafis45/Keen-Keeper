import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white">
        <div className="p-6 shadow-sm flex flex-col justify-center items-center rounded-xl">
          <Image
            src={friend.picture}
            alt={`profile picture of ${friend.name}`}
            width={80}
            height={80}
            className="rounded-full"
          ></Image>
          <h2 className="text-xl font-semibold mt-2">{friend.name}</h2>
          <p className="text-[0.8rem] text-[#64748B] mt-1">
            {friend.days_since_contact} days ago
          </p>
          <div>
            {friend.tags.map((tag, i) => (
              <div
                key={i}
                className="badge badge-soft badge-success bg-green-100 text-black mr-2 my-3 font-medium"
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            className={`badge badge-success text-white border-none ${friend.status === "overdue" && "bg-red-500"} ${friend.status === "almost due" && "bg-[#EFAD44]"}`}
          >
            {friend.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
