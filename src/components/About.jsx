import ExpandableText from "./ExpandableText";
import { User } from "lucide-react";

const About = ({ info }) => {
  return (
    <>
      {/* about */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <User />
          <h2 className="text-white text-xl font-semibold">About</h2>
        </div>
      </div>
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
        <div className="text-slate-300 text-base leading-relaxed">
          {info.aboutMeDesc}
        </div>
      </div>
    </>
  );
};

export default About;
