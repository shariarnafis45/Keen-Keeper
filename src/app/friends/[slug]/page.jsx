import { sendError } from "next/dist/server/api-utils";
import React from "react";

const FriendDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch("http://localhost:3000/friendsData.json");
  const friends = await res.json();
  const selectFriend = friends.filter((friend) => slug == friend.id);
  
  return (
    <div>
      <h2>details</h2>
    </div>
  );
};

export default FriendDetailsPage;
