import React, { useContext } from "react";
import { ThemeContextType, Theme } from "../@types/theme";
import { ThemeContext } from "../context/themeContext";

interface Props {
    children: React.ReactNode;
  }
const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleChangeTheme = (e: any) => {
    changeTheme(e.target.value as Theme);
  };

return (
    <div data-theme={theme}>
        <select name="toggleTheme" onChange={handleChangeTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        </select>
        {children}
    </div>
)
};

export default ThemeWrapper;