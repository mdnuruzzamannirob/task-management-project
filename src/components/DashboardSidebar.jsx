import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="min-h-full flex flex-col bg-teal-400 px-5 text-white">
      <div className="flex items-center justify-center h-[72px] sm:h-[88px]">
        <h2 className="text-xl font-semibold">TaskFlow</h2>
      </div>
      <div className="flex flex-col gap-4 font-semibold border-t py-10 ">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline underline-offset-4 btn btn-sm h-10 bg-teal-600 hover:bg-teal-600 text-white border-none text-base"
              : "hover:underline underline-offset-4 btn btn-sm h-10 bg-teal-500 hover:bg-teal-600 text-white border-none text-base"
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
              ? "underline underline-offset-4 btn btn-sm h-10 bg-teal-600 hover:bg-teal-600 text-white border-none text-base"
              : "hover:underline underline-offset-4 btn btn-sm h-10 bg-teal-500 hover:bg-teal-600 text-white border-none text-base"
          }
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};
export default DashboardSidebar;
