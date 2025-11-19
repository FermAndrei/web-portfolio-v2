import React from "react";
import { ArrowUpRight, ChevronsLeftRight } from "lucide-react";
import Badge from "@mui/material/Badge";

const Project = () => {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <ChevronsLeftRight />
        <h2 className="text-white text-xl font-semibold">Projects</h2>
      </div>
      <div className="lg:w-[400px] xl:w-[700px] 2xl:w-[1000px] overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <div className="flex gap-3 flex-nowrap">
          {[
            {
              title: "HackerRank Problem Solving",
              type: "Certificate",
              image:
                "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
              date: "September 19",
            },
            {
              title: "Rebranding Google's Homepage",
              type: "Design",
              image:
                "https://images.unsplash.com/photo-1566915896913-549d796d2166?w=300&h=200&fit=crop",
              date: "August 22",
            },
            {
              title: "HackerRank Problem Solving",
              type: "Certificate",
              image:
                "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
              date: "September 19",
            },
            {
              title: "Creating Two Projects in Under 24 Hours",
              type: "Development",
              image:
                "https://images.unsplash.com/photo-1658806283210-6d7330062704?w=300&h=200&fit=crop",
              date: "August 21",
            },
            {
              title: "From Scratch to Stunning",
              type: "UI/UX",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=200&fit=crop",
              date: "September 13",
            },
            {
              title: "Rebranding Google's Homepage",
              type: "Design",
              image:
                "https://images.unsplash.com/photo-1566915896913-549d796d2166?w=300&h=200&fit=crop",
              date: "August 22",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group shrink-0 w-40 sm:w-50 md:w-60"
            >
              <div className="relative h-24 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="p-2.5">
                <h3 className="text-white text-base mb-1.5 line-clamp-2 leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-col items-start md:flex-row md:items-start justify-between">
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 text-emerald-400 text-sm py-0"
                  >
                    {project.type}
                  </Badge>
                  <span className="text-slate-500 text-xs">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
