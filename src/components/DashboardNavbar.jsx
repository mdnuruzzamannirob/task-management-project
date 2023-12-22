import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Button from "./Button";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import DashboardSidebar from "./DashboardSidebar";

const DashboardNavbar = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <div className="h-full flex items-center justify-between lg:ml-[230px] xl:ml-[300px] px-5 sm:px-10 lg:px-5 xl:px-10 z-50">
      <div>
        <div className="relative hidden lg:flex items-center">
          {user?.photoURL ? (
            <img
              className="w-10 h-10 rounded-full"
              src={user.photoURL}
              alt="user photo"
            />
          ) : (
            <FaUser className="w-10 h-10 rounded-full text-sky-600" />
          )}
          <Button
            onClick={() => setToggleProfile(!toggleProfile)}
            className="bg-transparent hover:bg-transparent text-black/60 shadow-none"
          >
            <h2 title={user?.displayName}>{user?.displayName}</h2>{" "}
            {toggleProfile ? (
              <IoMdArrowDropdown className="w-5 h-5" />
            ) : (
              <IoMdArrowDropright className="w-5 h-5" />
            )}
          </Button>

          {toggleProfile && (
            <div className="w-52 absolute top-16 right-0 bg-teal-400 rounded-md p-3 space-y-4 text-sm text-white text-center">
              <h2 title={user?.displayName}>{user?.displayName}</h2>
              <h2 title={user?.email}>{user?.email}</h2>
              <Button onClick={() => logout()} className="w-full">
                <RiLogoutCircleRLine /> Log Out
              </Button>
            </div>
          )}
        </div>
        <div className="relative lg:hidden">
          {user?.photoURL ? (
            <button
              onClick={() => setToggleProfile(!toggleProfile)}
              className="btn btn-circle overflow-hidden border-none hover:border-none bg-transparent hover:bg-transparent"
            >
              <img className="w-full h-full" src={user.photoURL} alt="" />
            </button>
          ) : (
            <button
              onClick={() => setToggleProfile(!toggleProfile)}
              className={`btn btn-circle border-2 ${
                toggleProfile
                  ? "border-sky-500 bg-transparent hover:border-sky-500 hover:bg-transparent"
                  : "bg-white border-transparent hover:bg-white hover:border-transparent"
              }`}
            >
              <FaUser className="w-6 h-6 text-sky-500" />
            </button>
          )}
          {toggleProfile && (
            <div className="w-52 absolute top-16 left-0 bg-teal-400 rounded-md p-3 space-y-4 text-sm text-white text-center">
              <h2 title={user?.displayName}>{user?.displayName}</h2>
              <h2 title={user?.email}>{user?.email}</h2>
              <Button onClick={() => logout()} className="w-full">
                <RiLogoutCircleRLine /> Log Out
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
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
        } duration-700 ease-in-out z-10`}
      >
        <DashboardSidebar />
      </div>
    </div>
  );
};
export default DashboardNavbar;
