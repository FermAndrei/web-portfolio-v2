import React, { useState } from "react";

const ExpandableText = ({ children, description }) => {
  const fullText = children;
  const [isExpanted, setIsExpanted] = useState(false);
  const toggleText = () => {
    setIsExpanted(!isExpanted);
  };

  return (
    <div>
      <p className="text">
        {isExpanted ? fullText : `${fullText.slice(0, description)}...`}
        <br />
        <span onClick={toggleText} className="text-emerald-400 text-sm ">
          {isExpanted ? "Show less" : "Show more"}
        </span>
      </p>
    </div>
  );
};

export default ExpandableText;
