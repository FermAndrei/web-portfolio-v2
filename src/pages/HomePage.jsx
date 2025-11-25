import { Calendar } from "lucide-react";
import About from "../components/About";
import Career from "../components/Career";
import Experience from "../components/Experience";
import Project from "../components/Project";
import TechStack from "../components/TechStack";
const HomePage = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const monthName = date.toLocaleString("en-US", { month: "long" });
  const shortDay = date.toLocaleString("en-US", { weekday: "short" });

  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="flex-1 p-3 h-full lg:overflow-y-auto scrollbar-hide">
        <div
          className="relative rounded-xl overflow-hidden mb-5 h-48"
          id="home"
        >
          <img
            src="https://images.unsplash.com/photo-1658806283210-6d7330062704?w=1200&h=400&fit=crop"
            alt="Abstract technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-emerald-900/90 via-slate-900/80 to-transparent">
            <div className="flex items-center h-full px-3 sm:px-4 md:px-6">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs">
                    {shortDay}, {year} {monthName} {day}
                  </span>
                </div>
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  Crafting Digital{" "}
                  <span className="text-emerald-400">Excellence</span>
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl">
                  Transforming ideas into scalable, high-performance
                  applications with modern technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mb-5" id="about">
          <About />
        </div>

        {/* Career */}
        <div className="mb-5">
          <Career />
        </div>

        {/* Experience */}
        <div className="mb-5">
          <Experience />
        </div>

        {/* Project */}
        <div className="mb-5">
          <Project />
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
