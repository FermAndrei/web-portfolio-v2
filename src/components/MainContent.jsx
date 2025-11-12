import {
  Calendar,
  CircleDot,
  ArrowUpRight,
  ChartBar,
  User,
  BriefcaseBusiness,
  ChevronsLeftRight,
  Cpu,
} from "lucide-react";
import Badge from "@mui/material/Badge";

const MainContent = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const monthName = date.toLocaleString("en-US", { month: "long" });
  const shortDay = date.toLocaleString("en-US", { weekday: "short" });

  return (
    <div className="p-4 lg:h-screen ">
      <div className="p-4 h-full rounded-2xl bg-slate-900/50 border border-slate-800 lg:overflow-y-auto scrollbar-hide">
        <div className="relative rounded-xl overflow-hidden mb-5 h-48">
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

        {/* Career Stats */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-3">
            <ChartBar />
            <h2 className="text-white text-xl font-semibold">Career Stats</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                icon: "🎯",
                value: "2 Years",
                label: "Experience",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "🏆",
                value: "9",
                label: "Certificates",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: "💼",
                value: "6",
                label: "Projects",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: "⚡",
                value: "10+",
                label: "Technologies",
                color: "from-emerald-500 to-green-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 hover:border-emerald-500/50 transition-colors"
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center mb-2`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl text-white mb-0.5">{stat.value}</div>
                <div className="text-base text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* about */}
        <div className="mb-5" id="about">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <User />
              <h2 className="text-white text-xl font-semibold">About</h2>
            </div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
            <p className="text-slate-300 text-base leading-relaxed">
              I'm a developer with 2 years of experience in front-end, web, and
              app development. I enjoy turning ideas into real projects that
              people can use and appreciate. Always curious and eager to learn,
              I'm excited to grow my skills and be part of teams that build
              something meaningful.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-5" id="experience">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <BriefcaseBusiness />{" "}
              <h2 className="text-white text-xl font-semibold">Experience</h2>
            </div>
          </div>
          <div className="space-y-2">
            {[
              {
                title: "Application Developer",
                company: "FDS Asya Philippines",
                period: "FEB 2024 - SEP 2025",
                current: false,
              },
              {
                title: "Web Developer",
                company: "iRely",
                period: "APR 2023 - MAY 2023",
                current: false,
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-3 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600/20 border-2 border-emerald-500 flex items-center justify-center shrink-0">
                    <CircleDot className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-white text-base">{exp.title}</h3>
                      <Badge
                        variant="outline"
                        className={`${
                          exp.current
                            ? "bg-emerald-600/20 border-emerald-500/30 text-emerald-400"
                            : "border-slate-600 text-slate-400"
                        } text-sm px-2 py-0`}
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project */}
        <div className="mb-5" id="projects">
          <div className="flex items-center gap-1.5 mb-3">
            <ChevronsLeftRight />
            <h2 className="text-white text-xl font-semibold">Projects</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
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
            ].map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group"
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
                  <div className="flex items-center justify-between">
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
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-3">
            <Cpu /> <h2 className="text-white text-xl semi-bold">Tech Stack</h2>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4">
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: "React", color: "from-cyan-500 to-blue-500" },
                { name: "Flutter", color: "from-green-500 to-emerald-500" },
                { name: "JavaScript", color: "from-slate-600 to-gray-600" },
                { name: "Dart", color: "from-yellow-500 to-orange-500" },
                { name: "Tailwind", color: "from-green-600 to-teal-600" },
                { name: "Bootstrap", color: "from-blue-600 to-blue-700" },
                { name: "Figma", color: "from-yellow-500 to-orange-500" },
                { name: "GIT", color: "from-cyan-500 to-blue-600" },
                { name: "GitHub", color: "from-purple-600 to-purple-700" },
                { name: "VS Code", color: "from-pink-500 to-rose-500" },
                { name: "Android Studio", color: "from-green-600 to-lime-600" },
                { name: "Vite", color: "from-pink-500 to-rose-500" },
                { name: "Material UI", color: "from-emerald-600 to-teal-600" },
                { name: "Lucide", color: "from-blue-700 to-cyan-700" },
                { name: "Canva", color: "from-purple-600 to-purple-700" },
              ].map((tech, index) => (
                <Badge
                  key={index}
                  className={`bg-linear-to-r ${tech.color} text-white border-0 rounded-md px-2.5 py-1 text-base hover:scale-105 transition-transform`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
