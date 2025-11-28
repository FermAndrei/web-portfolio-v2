import { ProjectData } from "../data/ProjectData";
import { ArrowUpRight, ChevronsLeftRight } from "lucide-react";
import ExpandableText from "../components/ExpandableText";
import { Link } from "react-router";
import { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-3 lg:overflow-y-auto h-auto">
      <div className="flex items-center gap-1.5 mb-3 py-3 border-b border-slate-800">
        <ChevronsLeftRight />
        <h2 className="text-white text-xl font-semibold">Projects</h2>
      </div>
      <p className="text-lg mb-3">
        Here are some of the projects I’ve worked on throughout my development
        journey. Each one reflects my commitment to learning, improving, and
        building with impact.
      </p>
      <div className="grid grid-cols-1 my-grid lg:grid-cols-3 gap-2">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group h-[350px] flex flex-col"
          >
            <Link to={`/projects/${project.slug}`}>
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-1.5 md:right-1.5 w-6 h-6 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="p-3 md:flex flex-col gap-2 grow">
                <h3 className="text-white text-lg font-bold line-clamp-2 leading-tight">
                  {project.name}
                </h3>
                <ExpandableText description={50} showToggle={false}>
                  {project.description}
                </ExpandableText>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
