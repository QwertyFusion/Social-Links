import React, { useRef, useState } from "react";
import { Check, Copy, X } from "lucide-react";
import "./ShareCard.css";

export const ShareCard = ({ onClose }) => {
  const inputRef = useRef(null);
  const [buttonText, setButtonText] = useState(<Copy className="icon" />);

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
        setButtonText(<Check className="icon" />);

        // Reset the button text after 2 seconds
        setTimeout(() => {
          setButtonText(<Copy className="icon" />);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <div id="shareCard">
      <div className="content">
        <div className="header">
          <h2>Share Link Tree</h2>
          <button onClick={onClose} className="close-button">
            <X className="icon" />
          </button>
        </div>
        <div className="body">
          <div className="wrapper">
            <div className="profile">
              <img
                id="profilePic"
                src={process.env.PUBLIC_URL + "/assets/images/avatar.png"}
                alt="Rishi Banerjee"
              />
              <h2>
                Rishi Banerjee<span>AKA QwertyFusion</span>
              </h2>
            </div>
            <div className="qr-container">
              <a
                href={process.env.PUBLIC_URL + "/assets/images/qr.png"}
                download="QwertyFusion_QR.png"
              >
                <img
                  id="qr"
                  src={process.env.PUBLIC_URL + "/assets/images/qr.png"}
                  alt="Rishi Banerjee"
                />
              </a>
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
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
