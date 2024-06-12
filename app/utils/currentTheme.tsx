import { useTheme } from "next-themes";

export const CurrentTheme = ({icon}:{icon:boolean}): string | undefined => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  if(icon){
   return  currentTheme === "dark" ? "black" : "white"
  }
  return currentTheme;
};
