import React from "react";
import FriendCard from "../shared/FriendCard";


const Friends = ({ friendsdata }) => {
  return (
    <div className="max-w-7xl mx-auto py-15 px-5">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {friendsdata.map((friend,i) => (
          <FriendCard key={i} friend={friend}/>
        ))}
      </div>
    </div>
  );
};

export default Friends;
