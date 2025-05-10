import React from "react";
import { getTimeGreeting } from "../lib/getTimeGreeting";

const WelcomeBanner = ({ username }: { username: string }) => {
  const greeting = getTimeGreeting();

  return (
    <div className="font-bold">
      <h2 className="text-2xl">
        {greeting}, {username}
      </h2>
    </div>
  );
};

export default WelcomeBanner;
