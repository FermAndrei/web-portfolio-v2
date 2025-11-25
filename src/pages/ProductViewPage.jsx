import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";

const ProductViewPage = () => {
  const { slug } = useParams();

  const project = ProjectData.find((item) => item.slug === slug);

  return (
    <div className="flex-1">
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProductViewPage;
