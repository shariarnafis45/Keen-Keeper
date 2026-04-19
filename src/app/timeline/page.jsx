"use client";

import ActivityCard from "@/components/timeline/ActivityCard";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext, useState } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(FriendContext);
  const [filter, setFilter] = useState("all");
  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((data) => data.actionType === filter);

  return (
    <div className="bg-[#F8FAFC] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold">Timeline</h2>
        <div className="my-5">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="select focus:border-none outline-none"
          >
            <option disabled={true}>Filter timeline</option>
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>
        {filteredTimeline.length === 0 ? (
          <div className="min-h-[50vh] flex justify-center items-center bg-white mt-7 shadow-sm">
            <h2 className="text-2xl font-medium">No Data Available</h2>
          </div>
        ) : (
          <div className="mt-7 space-y-3">
            {filteredTimeline.map((data, i) => (
              <ActivityCard key={i} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
