import React, { useState } from "react";

const ExpandableText = ({ children, description }) => {
  const fullText = children;
  const [isExpanted, setIsExpanted] = useState(false);
  const toggleText = () => {
    setIsExpanted(!isExpanted);
  };

  return (
    <>
      <p className="text">
        {isExpanted ? fullText : `${fullText.slice(0, description)}...`}
        <span>
          <br />
        </span>
        <span onClick={toggleText} className="text-emerald-400 text-sm ">
          {isExpanted ? "Show less" : "Show more"}
        </span>
      </p>
    </>
  );
};

export default ExpandableText;
