import { useState } from "react";

const ExpandableText = ({ children, description, showToggle = true }) => {
  const fullText = children;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p className="text">
        {isExpanded ? fullText : `${fullText.slice(0, description)}...`}
        <span>
          <br />
        </span>
        {showToggle && (
          <>
            <span
              onClick={toggleText}
              className="text-emerald-400 text-sm cursor-pointer"
            >
              {isExpanded ? "Show less" : "Show more"}
            </span>
          </>
        )}
      </p>
    </>
  );
};

export default ExpandableText;
