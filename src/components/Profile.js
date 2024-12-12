import React from "react";

export const Profile = () => {
  return (
    <>
      <img
        id="profilePic"
        src={process.env.PUBLIC_URL + "/assets/images/avatar.png"}
        alt="Rishi Banerjee"
      />
      <h1>
        Rishi Banerjee<span>AKA QwertyFusion</span>
      </h1>

      <p>
        Art, Branding, UI/UX Design, Web Development, Java Development, Gaming,
        Game Development, Cats
      </p>
    </>
  );
};
