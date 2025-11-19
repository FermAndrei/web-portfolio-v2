import React from "react";
import Badge from "@mui/material/Badge";
import { Cpu } from "lucide-react";

const TechStack = () => {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <Cpu /> <h2 className="text-white text-xl semi-bold">Tech Stack</h2>
      </div>
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
        <div className="flex flex-wrap gap-1.5">
          {[
            { name: "React", color: "from-cyan-500 to-blue-500" },
            { name: "Flutter", color: "from-green-500 to-emerald-500" },
            { name: "JavaScript", color: "from-slate-600 to-gray-600" },
            { name: "Dart", color: "from-yellow-500 to-orange-500" },
            { name: "Tailwind", color: "from-green-600 to-teal-600" },
            { name: "Bootstrap", color: "from-blue-600 to-blue-700" },
            { name: "Figma", color: "from-yellow-500 to-orange-500" },
            { name: "GIT", color: "from-cyan-500 to-blue-600" },
            { name: "GitHub", color: "from-purple-600 to-purple-700" },
            { name: "VS Code", color: "from-pink-500 to-rose-500" },
            { name: "Android Studio", color: "from-green-600 to-lime-600" },
            { name: "Vite", color: "from-pink-500 to-rose-500" },
            { name: "Material UI", color: "from-emerald-600 to-teal-600" },
            { name: "Lucide", color: "from-blue-700 to-cyan-700" },
            { name: "Canva", color: "from-purple-600 to-purple-700" },
          ].map((tech, index) => (
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
