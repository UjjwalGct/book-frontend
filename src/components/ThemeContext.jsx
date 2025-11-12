// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeButton  = ({ children }) => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   // ✅ Apply theme to <html>
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme); // ✅ Remember preference
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
