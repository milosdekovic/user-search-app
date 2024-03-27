import { IconMoon, IconSun } from "@tabler/icons-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between m-10">
      <h1 className="text-3xl lg:text-4xl  font-bold font-mono">
        SearchGitHub
      </h1>
      <button className="border-2 flex gap-2 p-1 items-center rounded-md">
        <IconSun />
        <IconMoon />
      </button>
    </div>
  );
};

export default Header;
