import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@mui/material";

const ResumePage = () => {
  return (
    <div className="w-full">
      <div className="bg-black/50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-[90%] h-[90%] relative flex flex-col">
          <div className="flex-1 overflow-hidden mt-6">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl="/Trillana, Ferm Andrei - Resume.pdf"
                theme="light"
              />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
