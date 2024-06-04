import React, { useState } from 'react';

const ToggleText = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure text is a string, provide a fallback if it's not
  const displayText = typeof text === 'string' ? text : '';

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{isExpanded ? displayText : `${displayText.substring(0, limit)}...`}</p>
      <button className="toggle-button" onClick={toggleText}>
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default ToggleText;