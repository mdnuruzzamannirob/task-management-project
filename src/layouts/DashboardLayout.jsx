import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="left-0 top-0 fixed w-full h-[88px] bg-white">
        <DashboardNavbar />
      </div>
      <div className="hidden lg:block h-full left-0 top-0 fixed w-[230px] xl:w-[300px]">
        <DashboardSidebar />
      </div>

      <div className="min-h-full lg:ml-[230px] xl:ml-[300px] px-5 sm:px-10 lg:px-5 xl:px-10 pt-28 pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
