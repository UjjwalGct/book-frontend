
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";
// import { FaBarsStaggered, FaXmark, FaBookOpenReader } from "react-icons/fa6";
// import { HiLogout } from "react-icons/hi";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // ✅ Toggle mobile menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // ✅ Sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Handle logout
//   const handleLogout = async () => {
//     try {
//       await logout();
//       alert("✅ Logged out successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed:", err);
//       alert("⚠️ Something went wrong while logging out.");
//     }
//   };

//   // ✅ Nav Links
//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "About", path: "/about" },
//     { link: "Shop", path: "/shop" },
//     { link: "Sell Your Book", path: "/sell-your-book" },
//     // { link: "Blog", path: "/blog" },
//   ];

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white shadow-md ${isSticky ? "bg-white shadow-md" : ""
//         }`}
//     >

//       <button class="inline-flex items-center justify-center gap-2
//        whitespace-nowrap rounded-md text-sm font-medium 
//        ring-offset-background focus-visible:outline-none 
//        focus-visible:ring-2 focus-visible:ring-ring
//         focus-visible:ring-offset-2 disabled:pointer-events-none 
//         disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4
//          [&amp;_svg]:shrink-0 hover:bg-accent ml-2 w-9 
//          h-9 text-foreground/70 hover:text-primary 
//          transition-colors duration-200" 
//          fdprocessedid="2q0m03">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
//           viewBox="0 0 24 24" fill="none" stroke="currentColor"
//            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
//            class="lucide lucide-moon h-5 w-5">
//             <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z">
//               </path>
//               </svg>
//               </button>




//       <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* ✅ Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold flex items-center gap-2 text-blue-700"
//         >
//           <FaBookOpenReader className="text-blue-700" />
//           <span>BookStore</span>
//         </Link>

//         {/* ✅ Desktop Menu */}
//         <ul className="hidden lg:flex items-center space-x-8 text-base font-medium">
//           {navItems.map(({ link, path }) => (
//             <li key={path}>
//               <Link
//                 to={path}
//                 className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}

//           {user ? (
//             <>
//               <span className="text-gray-600 font-semibold">
//                 Hi, {user.displayName || user.email}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//               >
//                 <HiLogout /> Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Login
//             </Link>
//           )}
//         </ul>

//         {/* ✅ Mobile Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-gray-800 focus:outline-none"
//         >
//           {isMenuOpen ? (
//             <FaXmark className="w-6 h-6" />
//           ) : (
//             <FaBarsStaggered className="w-6 h-6" />
//           )}
//         </button>
//       </nav>

//       {/* ✅ Mobile Menu Drawer */}
//       <div
//         className={`lg:hidden bg-white shadow-lg absolute top-16 left-0 w-full transform transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
//           }`}
//       >
//         <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
//           {navItems.map(({ link, path }) => (
//             <li key={path}>
//               <Link
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}

//           {user ? (
//             <>
//               <span className="text-gray-600 font-semibold">
//                 Hi, {user.displayName || user.email}
//               </span>
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsMenuOpen(false);
//                 }}
//                 className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//               >
//                 <HiLogout /> Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               onClick={() => setIsMenuOpen(false)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Login
//             </Link>
//           )}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";
// import { FaBarsStaggered, FaXmark, FaBookOpenReader } from "react-icons/fa6";
// import { HiLogout } from "react-icons/hi";
// //import ThemeButton from "./ThemeButton";



// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 80);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       alert("✅ Logged out successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed:", err);
//       alert("⚠️ Something went wrong while logging out.");
//     }
//   };

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "About", path: "/about" },
//     { link: "Shop", path: "/shop" },
//     { link: "Sell Your Book", path: "/sell-your-book" },
//   ];

//   return (
//     <header
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
//       ${isSticky ? "bg-white dark:bg-gray-900 shadow-md" : "bg-white dark:bg-gray-900"}`}
//     >
//       <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* ✅ Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-400"
//         >
//           <FaBookOpenReader className="text-blue-700 dark:text-blue-400" />
//           <span>BookStore</span>
//         </Link>

//         {/* ✅ Desktop Menu */}
//         <ul className="hidden lg:flex items-center space-x-8 text-base font-medium">
//           {navItems.map(({ link, path }) => (
//             <li key={path}>
//               <Link
//                 to={path}
//                 className="text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}

//           {/* ✅ Theme Toggle */}
//           {/* <ThemeButton /> */}

//           {/* ✅ Auth Section */}
//           {user ? (
//             <>
//               <span className="text-gray-600 dark:text-gray-300 font-semibold">
//                 Hi, {user.displayName || user.email}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//               >
//                 <HiLogout /> Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Login
//             </Link>
//           )}
//         </ul>

//         {/* ✅ Mobile Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
//         >
//           {isMenuOpen ? (
//             <FaXmark className="w-6 h-6" />
//           ) : (
//             <FaBarsStaggered className="w-6 h-6" />
//           )}
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;





import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import { FaBarsStaggered, FaXmark, FaBookOpenReader } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      alert("✅ Logged out successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("⚠️ Something went wrong while logging out.");
    }
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/sell-your-book" },
    { link: "Contact", path: "/contact" },
    

  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white dark:bg-gray-900 shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-400"
        >
          <FaBookOpenReader className="text-blue-700 dark:text-blue-400" />
          <span>BookStore</span>
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-base font-medium">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link}
              </Link>
            </li>
          ))}

          {user ? (
            <>
              <span className="text-gray-600 dark:text-gray-300 font-semibold">
                Hi, {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                <HiLogout /> Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}
        </ul>

        {/* ✅ Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none absolute right-5 top-4"
        >
          {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBarsStaggered className="w-6 h-6" />}
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                <HiLogout /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-center"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
