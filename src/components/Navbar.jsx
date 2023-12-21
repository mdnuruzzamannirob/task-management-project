import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const { user, logout } = useAuth();

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-teal-500 underline underline-offset-4"
            : "hover:underline underline-offset-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/userDemographics"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-teal-500 underline underline-offset-4"
            : "hover:underline underline-offset-4"
        }
      >
        User Demographics
      </NavLink>
      {user && user?.email && (
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-teal-500 underline underline-offset-4"
              : "hover:underline underline-offset-4"
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );
  return (
    <nav className="fixed w-full z-50 bg-white">
      <Container className="flex items-center justify-between py-3 sm:py-5">
        <h2 className="text-xl font-semibold lg:font-bold text-teal-500">
          TaskFlow
        </h2>
        <div className="hidden lg:flex items-center gap-8 font-semibold">
          {navLink}
          {user && user?.email ? (
            <div className="relative">
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
                      ? "bg-white border-transparent hover:bg-white hover:border-transparent"
                      : "border-sky-500 bg-transparent hover:border-sky-500 hover:bg-transparent"
                  }`}
                >
                  <FaUser className="w-6 h-6 text-sky-500" />
                </button>
              )}
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
          ) : (
            <div className="flex items-center">
              <Link
                to={"/login"}
                className="text-teal-500 font-bold hover:underline underline-offset-4"
              >
                Login
              </Link>
              <div className="divider divider-horizontal"></div>
              <Link to={"/register"}>
                <Button className="hover:underline underline-offset-4 h-9">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex lg:hidden">
          <label className="btn btn-circle bg-white hover:bg-white/90 swap swap-rotate">
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
          className={`lg:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen z-50 bg-teal-400 text-white px-5  transition-transform transform  ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } duration-700 ease-in-out`}
        >
          <div className="flex items-center justify-center h-[72px] sm:h-[88px]">
            <h2 className="text-xl font-bold">TaskFlow</h2>
          </div>
          <div className="flex flex-col gap-4 lg:hidden font-Epilogue font-semibold opacity-80 border-t py-12">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-4 btn bg-teal-600 hover:bg-teal-600 text-white border-none"
                  : "hover:underline underline-offset-4 btn bg-teal-500 hover:bg-teal-600 text-white border-none"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/userDemographics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-4 btn bg-teal-600 hover:bg-teal-600 text-white border-none"
                  : "hover:underline underline-offset-4 btn bg-teal-500 hover:bg-teal-600 text-white border-none"
              }
            >
              User Demographics
            </NavLink>
            {user && user?.email ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline underline-offset-4 btn bg-teal-600 hover:bg-teal-600 text-white border-none"
                      : "hover:underline underline-offset-4 btn bg-teal-500 hover:bg-teal-600 text-white border-none"
                  }
                >
                  Dashboard
                </NavLink>
                <Button
                  onClick={() => logout()}
                  className="w-full btn-md bg-teal-500 hover:bg-teal-600 hover:underline underline-offset-4 border-none rounded-md"
                >
                  <RiLogoutCircleRLine className="w-5 h-5" /> Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <Button className="w-full btn-md bg-teal-500 hover:bg-teal-600 hover:underline underline-offset-4">
                    Login
                  </Button>
                </Link>
                <Link to={"/register"}>
                  {" "}
                  <Button className="w-full btn-md bg-teal-500 hover:bg-teal-600 hover:underline underline-offset-4">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
