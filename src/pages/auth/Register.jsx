import loginBanner from "../../assets/loginbg2.jpg";
import {
  RiArrowGoBackLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);
  const [passShow, setPassShow] = useState(false);

  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    if (!checked) {
      return setCheckedError("*accept terms and conditions");
    } else {
      setCheckedError("");
    }

    createUser(email, password)
      .then(() => {
        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            toast.success("Register Successful!!!");
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            toast.error(error.message.slice(10));
          });
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
      });
  };

  return (
    <Container className="my-20 mx-0">
      <div className="flex justify-center mb-10">
        <Button onClick={() => navigate("/")}>
          <RiArrowGoBackLine className="w-5 h-5" />
          Go Home
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${loginBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex flex-col lg:flex-row-reverse gap-6 rounded-3xl p-6"
      >
        <div className="flex-1 text-white">
          <h1 className="text-xl font-semibold lg:text-right">TaskFlow</h1>
          <div className="lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-5 lg:pt-0 pb-2">
              Unlock Powerful Tools
            </h1>
            <p className="sm:text-lg text-center">
              Access tools easily with a simple and quick registration.
            </p>
          </div>
        </div>

        {/* Register form */}
        <div className="flex-1 bg-white p-6 rounded-3xl">
          <h3 className="text-center text-lg lg:text-xl font-bold">
            Register Now
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sm:px-10 pt-2 pb-5 sm:py-5"
          >
            <div className="form-control">
              <label>
                <span className="font-medium">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                })}
                type="text"
                placeholder="Enter your name..."
                className="w-full mt-2 px-4 py-2 border border-gray-800/10 outline-none focus:border-teal-500 rounded-md text-sm"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-600">*name is required.</span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="text-red-600">
                  *name must be at least 4 characters long.
                </span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="text-red-600">
                  *name cannot exceed 20 characters.
                </span>
              )}
            </div>
            <div className="form-control mt-2">
              <label>
                <span className="font-medium">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                type="email"
                placeholder="Enter your email..."
                className="w-full mt-2 px-4 py-2 border border-gray-800/10 outline-none focus:border-teal-500 rounded-md text-sm"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-600">*email is required.</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-600">
                  *enter a valid email address.
                </span>
              )}
            </div>
            <div className="relative">
              <div className="form-control mt-2">
                <label>
                  <span className="font-medium">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 36,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/,
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password..."
                  className="w-full mt-2 px-4 py-2 border border-gray-800/10 outline-none focus:border-teal-500 rounded-md text-sm"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">*password is required.</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    *password must be at least 6 characters long.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    *password cannot exceed 36 characters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    *password must have one uppercase, one lowercase, and one
                    special character.
                  </span>
                )}
              </div>
              <p
                onClick={() => setPassShow(!passShow)}
                className="absolute right-3 top-[41px]"
              >
                {passShow ? (
                  <FaEye className="w-5 h-5" />
                ) : (
                  <FaEyeSlash className="w-5 h-5" />
                )}
              </p>
            </div>
            <div className="mt-3 sm:mt-5 flex items-center gap-2">
              <p onClick={() => setChecked(!checked)}>
                {checked ? (
                  <RiCheckboxCircleFill className="w-6 h-6 text-teal-500" />
                ) : (
                  <RiCheckboxBlankCircleLine className="w-6 h-6 text-teal-500" />
                )}
              </p>
              <p
                className={`text-sm font-medium ${
                  checked ? " opacity-100" : "opacity-70"
                }`}
              >
                I accept Terms and Conditions
              </p>
            </div>
            {checkedError && (
              <span className="text-red-600">{checkedError}</span>
            )}
            <div className="form-control mt-3 sm:mt-5">
              <Button className="md:h-10">Login</Button>
            </div>
          </form>
          <div className="text-center font-medium">
            <h3>
              Already have account?
              <Link
                to={"/login"}
                className="ml-2 text-black hover:underline font-bold underline-offset-4"
              >
                Login
              </Link>
            </h3>
            <SocialLogin />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
