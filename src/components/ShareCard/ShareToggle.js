import React, { useState } from "react";
import { Share2 } from "lucide-react";
import { ShareCard } from "./ShareCard";

export const ShareToggle = () => {
  const [showShareCard, setShowShareCard] = useState(false);

  function handleToggleShareCardPopup() {
    setShowShareCard(!showShareCard);
  }

  return (
    <div id="ShareToggleContainer">
      <button id="ShareToggle" onClick={handleToggleShareCardPopup}>
        <Share2 className="icon" />
      </button>
      {showShareCard && <ShareCard onClose={handleToggleShareCardPopup} />}
    </div>
  );
};
