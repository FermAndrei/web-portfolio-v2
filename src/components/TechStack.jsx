import Badge from "@mui/material/Badge";
import { Cpu } from "lucide-react";

const TechStack = ({ info }) => {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <Cpu /> <h2 className="text-white text-xl semi-bold">Tech Stack</h2>
      </div>
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
        <div className="flex flex-wrap gap-1.5">
          {info.map((tech, index) => (
            <Badge
              key={index}
              className={`bg-linear-to-r ${tech.color} text-white border-0 rounded-md px-2.5 py-1 text-base hover:scale-105 transition-transform`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
