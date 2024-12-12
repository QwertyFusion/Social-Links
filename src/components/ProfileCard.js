import React from "react";
import { Profile } from "./Profile";
import { LinksList } from "./LinksList";
import { ShareToggle } from "./ShareCard/ShareToggle";

export const ProfileCard = () => {
  return (
    <div className="container">
      <ShareToggle />
      <Profile />
      <LinksList />
    </div>
  );
};
