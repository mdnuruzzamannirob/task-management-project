import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="left-0 top-0 fixed w-full h-[88px] bg-white">
        <DashboardNavbar />
      </div>
      <div className="hidden lg:block h-full left-0 top-0 fixed w-[230px] xl:w-[300px]">
        <DashboardSidebar />
      </div>
      <div className="fixed left-5 top-5 z-50 lg:hidden">
        <label className="btn btn-circle border-none bg-white hover:bg-white/90 swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onClick={() => setNavOpen(!navOpen)} type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen z-50 bg-teal-400 text-white transition-transform transform  ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } duration-700 ease-in-out z-0`}
      >
        <DashboardSidebar />
      </div>

      <div className="min-h-full lg:ml-[230px] xl:ml-[300px] px-5 sm:px-10 lg:px-5 xl:px-10 pt-28 pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
