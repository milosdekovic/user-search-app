import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider"; // Update the path as per your project structure
import { IconMoon, IconSun } from "@tabler/icons-react";

const Header = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div
      className={`flex justify-between m-10 ${mode === "dark" ? "text-white" : "text-black"}`}
    >
      <h1 className="text-3xl lg:text-4xl  font-bold font-mono">
        SearchGitHub
      </h1>
      <button
        className="border-2 flex gap-2 p-1 items-center rounded-md"
        onClick={handleThemeToggle}
      >
        {mode === "light" ? <IconSun /> : <IconMoon />}
      </button>
    </div>
  );
};

export default Header;
