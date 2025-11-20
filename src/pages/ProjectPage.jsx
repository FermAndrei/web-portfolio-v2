import { ProjectData } from "../data/ProjectData";
import { ArrowUpRight, ChevronsLeftRight } from "lucide-react";
import Badge from "@mui/material/Badge";
import ExpandableText from "../components/ExpandableText";

const ProjectPage = () => {
  return (
    <div className="p-2 w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden 
      hover:border-emerald-500/50 transition-all cursor-pointer group
      h-[200px] flex flex-col"
          >
            <div className="relative h-28 overflow-hidden">
              <img
                src={project.tumbler}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="p-3 flex flex-col gap-2 grow">
              <h3 className="text-white text-base line-clamp-2 leading-tight">
                {project.name}
              </h3>

              <ExpandableText description={50} showToggle={false}>
                {project.description}
              </ExpandableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
