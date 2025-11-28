import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@mui/material";
import { MdDataArray } from "react-icons/md";

const ResumePage = () => {
  return (
    <div className="w-full p-3 flex flex-col">
      <div className="flex mb-3 justify-between items-center">
        <h2 className="flex items-center gap-2 text-white text-xl font-semibold">
          <span>
            <MdDataArray />
          </span>
          Resume
        </h2>
        <a
          href="https://drive.google.com/uc?export=download&id=1rQ9eEweGhFB0FU49CMjiqW-GZVIm0TpA"
          download="Ferm-Andrei-Trillana-Resume.pdf"
        >
          <Button variant="contained" color="primary">
            Download
          </Button>
        </a>
      </div>

      <div className="overflow-hidden rounded">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/Trillana, Ferm Andrei - Resume.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default ResumePage;
