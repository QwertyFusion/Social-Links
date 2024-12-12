import React, { useState } from "react";
import { ShareCard } from "./ShareCard";

export const ShareToggle = () => {
  const [showShareCard, setShowShareCard] = useState(false);

  function handleToggleShareCardPopup() {
    setShowShareCard(!showShareCard);
  }

  return (
    <div className="ShareToggleButtonContainer">
      <button onClick={handleToggleShareCardPopup}>O</button>
      {showShareCard && <ShareCard onClose={handleToggleShareCardPopup} />}
    </div>
  );
};
