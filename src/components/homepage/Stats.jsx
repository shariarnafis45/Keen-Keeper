import React from "react";

const Stats = ({friendsdata}) => {
    const onTrack = friendsdata.filter(friend => friend.status === 'on-track');
    const overDue = friendsdata.filter(friend => friend.status === 'overdue');
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      <div className="stats shadow">
        <div className="stat text-center">
          <div className="stat-value font-bold">{friendsdata.length}</div>
          <div className="stat-desc">Total Friends</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat text-center">
          <div className="stat-value font-bold">{onTrack.length}</div>
          <div className="stat-desc">On Track</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat text-center">
          <div className="stat-value font-bold">{overDue.length}</div>
          <div className="stat-desc">Need Attention</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat text-center">
          <div className="stat-value font-bold">12</div>
          <div className="stat-desc">Interactions This Month</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
