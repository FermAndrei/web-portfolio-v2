import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Award } from "lucide-react";

const RightSidebar = () => {
  const skillIcons = [
    { icon: "⚛️", name: "React" },
    { icon: "🟢", name: "Vue" },
    { icon: "⚡", name: "Next.js" },
    { icon: "📘", name: "TypeScript" },
    { icon: "🎨", name: "Tailwind" },
    { icon: "🟩", name: "Node.js" },
    { icon: "🔷", name: "Angular" },
    { icon: "🎯", name: "Figma" },
  ];
  const certifications = [
    {
      title: "HackerRank on Gidzit's Code to Career",
      date: "June 2023",
    },
    {
      title: "Titanium exercise Q3 2024",
      date: "Sept 2024",
    },
  ];
  const kisskiss = ["🐙", "🐦", "💼", "📧", "🌐"];

  return (
    <aside className="w-64 bg-slate-900/50 border-l border-slate-800 p-4 h-screen overflow-y-auto sticky top-0">
      <div className="mb-4">
        <h3 className="text-white text-sm mb-2.5 flex items-center gap-1.5">
          <span className="text-emerald-400 text-sm">⚡</span>
          Skill Set
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-xl hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/50"
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-white text-sm mb-2.5 flex items-center gap-1.5">
        <span className="text-emerald-400 text-sm">🎯</span>
        Expertise
      </h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-white text-sm flex items-center gap-1.5">
            <span className="text-emerald-400 text-sm">🏆</span>
            Certifications
          </h3>
          <button className="text-emerald-400 text-xs hover:text-emerald-300">
            More →
          </button>
        </div>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-lg p-2.5 border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-300 text-xs mb-0.5 group-hover:text-white transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 text-xs">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800">
        <h3 className="text-white text-sm mb-2.5 flex items-center gap-1.5">
          <span className="text-emerald-400 text-sm">📧</span>
          Get in touch
        </h3>
        <p className="text-slate-400 text-xs mb-3 leading-relaxed">
          Let's build something great together — feel free to reach out
        </p>
        <div className="flex gap-1.5">
          {kisskiss.map((emoji, index) => (
            <a
              key={index}
              href="#"
              className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors border border-slate-700/50"
            >
              {emoji}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
