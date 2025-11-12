

import React, { useContext, useState } from "react";
import {
  HiOutlineMenu,
  HiChartPie,
  HiOutlineCloudUpload,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiLogout,
  HiArrowSmRight,
  HiTable,
  HiSupport,
  HiViewBoards,
  HiHome,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import { AuthContext } from "../contects/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";
import userImg from "../assets/profile.jpg";



const SideBar = () => {
  const { user } = useContext(AuthContext) || {};
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await logout();
      alert("✅ You have logged out successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("⚠️ Something went wrong while logging out.");
    }
  };

  const isActive = (path) => location.pathname === path;






  

const handleDashboardClick = (e) => {
    e.preventDefault(); // stop default link navigation first

    if (!user) {
      alert("⚠️ Please login first!");
      navigate("/login");
      return;
    }

    if (user.email !== "admin@gmail.com") {
      alert("🚫 This section is for admins only.");
      return;
    }

    // if admin -> navigate to dashboard
    navigate("/admin/dashboard");
  };


  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          <HiOutlineMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-64 z-[50] pt-[23px] pb-[9px]`}
      >
        <Sidebar aria-label="Book Dashboard Sidebar" className="h-full ">
          {/* Sidebar Header */}
          <Sidebar.Logo
            href="#"
            img={userImg}
            imgAlt="User Profile"
            className="rounded-full"
          >
            <span className="text-lg font-semibold text-blue-700">
              Book Dashboard
            </span>
          </Sidebar.Logo>

          {/* Sidebar Items */}
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                as={Link}
                to="/"
                icon={HiHome}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive("/") ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
                } rounded-lg transition`}
              >
                Home
              </Sidebar.Item>

              {/* <Sidebar.Item
                as={Link}
                to="/admin/dashboard"
                icon={HiChartPie}
                className={`${
                  isActive("/admin/dashboard")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                } rounded-lg transition`}
              >
                Dashboard
              </Sidebar.Item> */}

               <Sidebar.Item
            as="button" // use button to control navigation manually
            icon={HiChartPie}
            onClick={handleDashboardClick}
            className={`${
              isActive("/admin/dashboard")
                ? "bg-blue-100 text-blue-700 font-medium"
                : "hover:bg-gray-100"
            } rounded-lg transition`}
          >
            Dashboard
          </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/admin/dashboard/upload"
                icon={HiOutlineCloudUpload}
                className={`${
                  isActive("/admin/dashboard/upload")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                } rounded-lg transition`}
              >
                Upload Book
              </Sidebar.Item>

              <Sidebar.Item
                as={Link}
                to="/admin/dashboard/manage"
                icon={HiInbox}
                className={`${
                  isActive("/admin/dashboard/manage")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                } rounded-lg transition`}
              >
                Manage Books
              </Sidebar.Item>

              <Sidebar.Item as={Link} to="#" icon={HiUser}>
                Users
              </Sidebar.Item>

              <Sidebar.Item as={Link} to="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>

              <Sidebar.Item as={Link} to="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>

              <Sidebar.Item as={Link} to="/sign-up" icon={HiTable}>
                Sign Up
              </Sidebar.Item>

              {/* Logout Button */}
              <Sidebar.Item
                onClick={handleLogout}
                icon={HiLogout}
                className="cursor-pointer hover:bg-red-50 text-red-600 rounded-lg transition"
              >
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Footer Section */}
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} to="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="#" icon={HiSupport}>
                Help & Support
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 lg:hidden z-[40]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
