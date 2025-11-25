import { ChartBar } from "lucide-react";
import { CareerStats } from "../data/CareerStats";

const Career = () => {
  return (
    <>
      {/* Career Stats */}
      <div className="flex items-center gap-1.5 mb-3">
        <ChartBar />
        <h2 className="text-white text-xl font-semibold">Career Stats</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CareerStats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 hover:border-emerald-500/50 transition-colors"
          >
            <div
              className={`w-8 h-8 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center mb-2`}
            >
              {stat.icon}
            </div>
            <div className="text-2xl text-white mb-0.5">{stat.value}</div>
            <div className="text-base text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Career;
