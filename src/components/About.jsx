import React from "react";
import ExpandableText from "./ExpandableText";
import { User } from "lucide-react";

const About = () => {
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
          <ExpandableText description={130}>
            I'm a developer with 2 years of experience in front-end, web, and
            app development. I enjoy turning ideas into real projects that
            people can use and appreciate. Always curious and eager to learn,
            I'm excited to grow my skills and be part of teams that build
            something meaningful.
          </ExpandableText>
        </div>
      </div>
    </>
  );
};

export default About;
