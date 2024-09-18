import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div
      className={`flex justify-between mt-5 mb-10 ${mode === "dark" ? "text-emerald-500" : "text-black"}`}
    >
      <h1 className="text-3xl lg:text-4xl font-bold">
        <Link to={"/"}>SearchGitHub</Link>
      </h1>
      <button
        className="flex gap-2 p-1 items-center rounded-md"
        onClick={handleThemeToggle}
      >
        {mode === "light" ? <IconMoon size={30} /> : <IconSun size={30} />}
      </button>
    </div>
  );
};

export default Header;
