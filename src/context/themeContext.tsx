import { createContext, useState } from "react";
import { Theme, ThemeContextType } from "../@types/theme";

interface Props {
  children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<Theme>('light')
  return (
  <ThemeContext.Provider value={{theme:themeMode, changeTheme:setThemeMode}}>
    {children}
  </ThemeContext.Provider>
  );
};
export default ThemeProvider;
