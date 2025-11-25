import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";

const ProductViewPage = () => {
  const { slug } = useParams();

  const project = ProjectData.find((item) => item.slug === slug);

  return (
    <div className="flex-1">
      <h2 className="text-white text-xl font-semibold">{project.name}</h2>
      <div className="flex gap-2 flex-wrap">
        {project.techUse.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-slate-800/50 rounded-lg text-white text-sm hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
      <p>{project.description}</p>
      <img
        src={project.thumbnail}
        alt={project.name}
        className="w-full object-cover rounded"
      />
      <div className="">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.name}
            className="w-full object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductViewPage;
