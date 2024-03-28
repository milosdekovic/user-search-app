import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode === "light" ? "bg-white" : "bg-[#0A0A0A]";
  }, [mode]);

  const textColor = mode === "light" ? "text-black" : "text-white";

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={textColor}>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
