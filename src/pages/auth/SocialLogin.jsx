import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  // const axiosPublic = usePublicAPI();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (login, social) => {
    try {
      const res = await login();

      if (res) {
        toast.success(`${social} login Successful!!!`);
        navigate(location?.state ? location.state : "/");
      }

      // const userInfo = {
      //   name: res?.user?.displayName,
      //   email: res?.user?.email,
      //   image: res?.user?.photoURL,
      //   role: "Logged-User",
      // };
      // axiosPublic
      //   .post(`/api/user/create/${res?.user?.email}`, userInfo)
      //   .then((res) => {
      //     if (res.data.insertedId) {
      //       toast.success(`${social} login Successful!!!`, { id: toastId });
      //       navigate(location?.state ? location.state : "/");
      //     } else if (res.data.message) {
      //       toast.success(`${social} login Successful!!!`, { id: toastId });
      //       navigate(location?.state ? location.state : "/");
      //     }
      //   });
    } catch (error) {
      toast.error(error.message.slice(10));
    }
  };
  return (
    <>
      <div className="divider text-xs lg:text-sm">Or Login With</div>
      <div className="w-full">
        <Button
          onClick={() => handleSocialLogin(googleLogin, "Google")}
          className="uppercase text-black hover:text-black/70 bg-transparent hover:bg-transparent border-gray-800/80 hover:border-gray-800/40 rounded-full"
        >
          <FcGoogle className="w-5 h-5"></FcGoogle> Google
        </Button>
      </div>
    </>
  );
};
export default SocialLogin;
