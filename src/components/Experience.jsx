import React from "react";
import { BriefcaseBusiness, CircleDot } from "lucide-react";
import ExpandableText from "./ExpandableText";
import Badge from "@mui/material/Badge";

const Experience = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <BriefcaseBusiness />
          <h2 className="text-white text-xl font-semibold">Experience</h2>
        </div>
      </div>
      <div className="space-y-2">
        {[
          {
            title: "Application Developer",
            company: "FDS Asya Philippines",
            period: "FEB 2024 - SEP 2025",
            desc: `Enhanced application features based on business requirements and integrated API endpoints for loan processing. \nImplemented caching that increased app load speed by 22%, resulting in a smoother startup experience, Developed an e-KYC feature to strengthen user verification.`,
            current: false,
          },
          {
            title: "Web Developer",
            company: "iRely",
            period: "APR 2023 - MAY 2023",
            desc: "Built a CRUD web application using Sencha EXT JS, applying the MVVC architecture throughout the project. This gave me practical experience in frontend development and working with a JavaScript framework.\n I handled data management, user interactions, and UI component implementation while also collaborating with another trainee to debug, test, and refine the application's features.",
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
                <div className="flex flex-col sm:flex-row justify-between mb-1">
                  <div>
                    <h3 className="text-white text-lg">{exp.title}</h3>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      exp.current
                        ? "bg-emerald-600/20 border-emerald-500/30 items-end text-emerald-400"
                        : "border-slate-600 items-start text-slate-400"
                    } text-sm py-0`}
                  >
                    {exp.period}
                  </Badge>
                </div>
                <div className="whitespace-pre-line">
                  <ExpandableText description={100}>{exp.desc}</ExpandableText>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
