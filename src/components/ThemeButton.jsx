// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext.jsx";

// const ThemeButton = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium 
//                  hover:bg-gray-200 dark:hover:bg-gray-700 ml-2 w-9 h-9 text-gray-800 dark:text-gray-200 
//                  transition-colors duration-200"
//       title="Toggle Dark Mode"
//     >
//       {theme === "dark" ? (
//         // ☀️ Sun icon (light mode button)
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="5" />
//           <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.05-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0 1.41 1.41M6.34 17.66l-1.41 1.41" />
//         </svg>
//       ) : (
//         // 🌙 Moon icon (dark mode button)
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default ThemeButton;
