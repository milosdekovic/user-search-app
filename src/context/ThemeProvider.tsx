import { ReactNode, createContext, useEffect, useState } from "react";
export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    document.body.className = mode === "light" ? "bg-white" : "bg-black";
  }, [mode]);
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
