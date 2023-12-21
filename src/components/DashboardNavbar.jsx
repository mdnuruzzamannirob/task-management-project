import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Button from "./Button";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const DashboardNavbar = () => {
  const [toggleProfile, setToggleProfile] = useState(false);

  const { user, logout } = useAuth();

  return (
    <div className="h-full flex items-center justify-between lg:ml-[230px] xl:ml-[300px] px-5 sm:px-10 lg:px-5 xl:px-10">
      <div className=""></div>
      <div className="">search</div>
      <div className="">
        <div className="relative flex items-center">
          {user?.photoURL ? (
            <img
              className="w-10 h-10 rounded-full"
              src={user.photoURL}
              alt=""
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
      </div>
    </div>
  );
};
export default DashboardNavbar;
