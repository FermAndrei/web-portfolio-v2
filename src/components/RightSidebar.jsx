import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Award, PencilRuler, Target, Trophy, Mail } from "lucide-react";

const RightSidebar = () => {
  const skillIcons = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      name: "Flutter",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      name: "Dart",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "Figma",
    },
  ];
  const certifications = [
    {
      title: "UI/UX for Web and Mobile with Figma",
      date: "Dec 2024",
    },
    {
      title: "JavaScript Essentials 1/2",
      date: "Aug 2024",
    },
    {
      title: "HTML/CSS Essentials",
      date: "July 2024",
    },
    {
      title: "Compute Cloud Service",
      date: "March 2022",
    },
    {
      title: "SAP Advance (Implementation & Support)",
      date: "March 2021",
    },
    {
      title: "SAP Advance (Logistics & Financials)",
      date: "March 2021",
    },
    {
      title: "Ethical Hacking",
      date: "October 2019",
    },
  ];
  const kisskiss = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
    "/public/icons/64px-Gmail_icon_(2020).svg.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 2);
  return (
    <aside className="bg-slate-900/50 border-l border-slate-800 h-screen sticky top-0 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold mb-2.5 flex items-center gap-1.5">
            <PencilRuler /> Skill Set
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-xl hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/50"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} className="p-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-white text-lg font-semibold mb-2.5 flex items-center gap-1.5">
            <Target /> Expertise
          </h3>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden mb-2">
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className="text-slate-500" />}
              >
                <Typography component="span">Web Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I bring websites to life, making them look good and work
                  smoothly. Whether it's a business site or a personal page, I
                  ensure a sleek and user-friendly experience
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className="text-slate-500" />}
              >
                <Typography component="span">UI/UX Design</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I make things look cool and easy to use! Crafting visually
                  appealing and intuitive interfaces is my forte.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className="text-slate-500" />}
              >
                <Typography component="span">Mobile Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your site on the go! I ensure websites work seamlessly on all
                  devices, providing a top-notch experience, whether on a
                  desktop or a smartphone.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-white text-lg font-semibold flex items-center gap-1.5">
              <Trophy /> Certifications
            </h3>
            {certifications.length > 2 && (
              <button
                className="text-emerald-400 text-xs hover:text-emerald-300"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "More"}
              </button>
            )}
          </div>
          <div className="space-y-2">
            {visibleCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/30 rounded-lg p-2.5 border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-300 text-base mb-0.5 group-hover:text-white transition-colors leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <h3 className="text-white text-base font-semibold mb-2.5 flex items-center gap-1.5">
            <Mail /> Get in touch
          </h3>
          <p className="text-slate-400 text-xs mb-3 leading-relaxed">
            Let's build something great together — feel free to reach out
          </p>
          <div className="flex gap-1.5">
            {kisskiss.map((emoji, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 bg-slate-800/85 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors border border-slate-700/50"
              >
                <img src={emoji} alt="" className="p-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
export default RightSidebar;
