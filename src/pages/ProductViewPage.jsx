import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect } from "react";
import { BsDot } from "react-icons/bs";

const ProductViewPage = () => {
  const { slug } = useParams();

  const project = ProjectData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex-1 p-3 mb-2">
      <IoArrowBackCircleOutline
        className="w-8 h-8 mb-2"
        onClick={() => navigate(-1)}
      />
      <h2 className="text-white text-3xl font-semibold mb-2">{project.name}</h2>
      <div className="flex gap-2 flex-wrap mb-2">
        {project.techUse.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-800/50 rounded-lg text-white text-xs hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mb-2 whitespace-pre-line">{project.description}</p>
      <div className="flex items-center mb-2">
        {project.liveDemo === true && (
          <>
            <a href={project.link} target="_blank" className="text-[#34d399]">
              Live Demo
            </a>
            <BsDot />
          </>
        )}
        <a href={project.gitHub} target="_blank" className="text-[#34d399]">
          Github
        </a>
      </div>
      <img
        src={project.thumbnail}
        alt={project.name}
        className="w-full object-cover rounded mb-3"
      />
      <div className="flex flex-col gap-3">
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
