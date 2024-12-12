import React, { useRef } from "react";
import "./ShareCard.css";

export const ShareCard = ({ onClose }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const handleCopy = async () => {
    if (inputRef.current) {
      try {
        // Use the Clipboard API to write the text to the clipboard
        await navigator.clipboard.writeText(inputRef.current.value);
        // Optionally, show a message to indicate that the text has been copied
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <div id="shareCard">
      <div className="content">
        <div className="header">
          <h2>Share QwertyFusion's Link Tree</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="body">
          <div className="wrapper">
            <div className="content">
              <img
                id="profilePic"
                src={process.env.PUBLIC_URL + "/assets/images/avatar.png"}
                alt="Rishi Banerjee"
              />
              <h2>
                Rishi Banerjee<span>AKA QwertyFusion</span>
              </h2>
            </div>
          </div>
          <div className="copy-link">
            <input
              type="text"
              className="copy-link-input"
              ref={inputRef}
              onFocus={handleFocus}
              value={
                process.env.PUBLIC_URL || "qwertyfusion-linktree.netlify.app"
              }
              readOnly
            />
            <button
              type="button"
              className="copy-link-button"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
