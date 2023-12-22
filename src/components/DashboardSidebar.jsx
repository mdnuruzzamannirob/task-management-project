import { NavLink } from "react-router-dom";
import logo from "../assets/Taskflow_logo.png";

const DashboardSidebar = () => {
  return (
    <div className="min-h-full flex flex-col bg-[#F8F8FD] px-5 text-white z-50">
      <div className="flex items-center justify-center h-[72px] sm:h-[88px]">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="" />
          <h2 className="text-xl font-semibold lg:font-bold text-teal-500">
            TaskFlow
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-semibold border-t py-10 ">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " btn bg-black/20 border-none text-base"
              : "btn bg-black/10 hover:bg-black/20 border-none text-base"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " btn bg-black/20 border-none text-base"
              : "btn bg-black/10 hover:bg-black/20 border-none text-base"
          }
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};
export default DashboardSidebar;
