import { ArrowUpRight, ChevronsLeftRight } from "lucide-react";
import Badge from "@mui/material/Badge";
import { ProjectData } from "../data/ProjectData";
import { Link } from "react-router";

const Project = () => {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <ChevronsLeftRight />
        <h2 className="text-white text-xl font-semibold">Projects</h2>
      </div>
      <div className="lg:w-[550px] xl:w-[700px] 2xl:w-[1000px] overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <div className="flex gap-3 flex-nowrap">
          {ProjectData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group shrink-0 w-40 sm:w-50 md:w-60"
            >
              <Link to={`/projects/${project.slug}`}>
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={project.tumbler}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="p-2.5">
                  <h3 className="text-white text-base mb-1.5 line-clamp-2 leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex flex-col items-start md:flex-row md:items-start justify-between">
                    <Badge
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 text-sm py-0"
                    >
                      {project.type}
                    </Badge>
                    <span className="text-slate-500 text-xs">
                      {project.date}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
