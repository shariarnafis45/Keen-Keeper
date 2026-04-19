import Chart from "@/components/shared/Chart";

import { GoDotFill } from "react-icons/go";

const StatsPage = () => {
  return (
    <div className="bg-[#F8FAFC] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold">Friendship Analytics</h2>
        <div className="min-h-[70vh] bg-white mt-7 shadow-sm p-5">
          <h2 className="text-xl font-medium">By Interaction Type</h2>
          <div className="flex flex-col justify-center items-center">
            <Chart/>
            <div className="flex gap-3">
                <p className="flex items-center font-medium"><GoDotFill className="text-2xl text-[#7E35E1]" /> Text</p>
                <p className="flex items-center font-medium"><GoDotFill className="text-2xl text-[#244D3F]" /> Call</p>
                <p className="flex items-center font-medium"><GoDotFill className="text-2xl text-[#37A163]" /> Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
