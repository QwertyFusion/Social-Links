import React from "react";

const links = [
  { id: "github", name: "GitHub", url: "https://github.com/QwertyFusion" },
  { id: "linkedin", name: "LinkedIn", url: "https://www.linkedin.com/in/mr-rishi-banerjee/" },
  { id: "twitter", name: "Twitter", url: "https://x.com/QwertyFusion" },
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/rishi._.banerjee" },
  { id: "dribble", name: "Dribble", url: "https://dribbble.com/QwertyFusion" },
  { id: "steam", name: "Steam", url: "https://steamcommunity.com/id/QwertyFusion/" },
];

export const LinksList = () => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <button onClick={() => window.open(link.url, "_blank")}>{link.name}</button>
        </li>
      ))}
    </ul>
  );
};
