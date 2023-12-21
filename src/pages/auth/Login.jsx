import Container from "../../components/Container";
import loginBanner from "../../assets/loginbg2.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../../components/Button";
import { CiLock } from "react-icons/ci";
import SocialLogin from "./SocialLogin";
import { RiArrowGoBackLine } from "react-icons/ri";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [passShow, setPassShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful !");
        navigate(location?.state ? location.state : "/");
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
        className="flex flex-col lg:flex-row gap-6 rounded-3xl p-6"
      >
        <div className="flex-1 text-white">
          <h1 className="text-xl font-semibold ">TaskFlow</h1>
          <div className="lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold pt-5 lg:pt-0 pb-2">
              Welcome Back
            </h1>
            <p className="text-lg">Nice to see you again</p>
          </div>
        </div>

        {/* login form */}
        <div className="flex-1 bg-white p-6 rounded-3xl">
          <h3 className="text-center text-lg lg:text-xl font-bold">
            Login Now
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sm:px-10 pt-2 pb-5 sm:py-5"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
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
              <div className="form-control sm:mt-4">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password..."
                  className="w-full mt-2 px-4 py-2 border border-gray-800/10 outline-none focus:border-teal-500 rounded-md text-sm"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">*password is required.</span>
                )}
              </div>
              <p
                onClick={() => setPassShow(!passShow)}
                className="absolute right-3 top-[53px]"
              >
                {passShow ? (
                  <FaEye className="w-5 h-5" />
                ) : (
                  <FaEyeSlash className="w-5 h-5" />
                )}
              </p>
            </div>
            <div className="my-3 sm:my-6 flex items-center gap-2">
              <p onClick={() => setChecked(!checked)}>
                {checked ? (
                  <RiCheckboxCircleFill className="w-6 h-6 text-teal-500" />
                ) : (
                  <RiCheckboxBlankCircleLine className="w-6 h-6 text-teal-500" />
                )}
              </p>
              <p
                className={`text-sm  ${
                  checked ? " opacity-100" : "opacity-70"
                }`}
              >
                Remember Me
              </p>
            </div>
            <div className="form-control">
              <Button className="md:h-10">Login</Button>
            </div>
          </form>
          <div className="text-center font-medium">
            <p className="flex items-center gap-2 justify-center hover:underline underline-offset-4 text-sm">
              <CiLock className="w-5 h-5" />
              Forget Password?
            </p>
            <h3 className="mt-3 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to={"/register"}
                className="ml-2 hover:underline font-bold underline-offset-4"
              >
                Register
              </Link>
            </h3>
            <SocialLogin />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
