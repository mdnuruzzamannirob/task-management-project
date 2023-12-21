import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import Button from "../../../components/Button";
import banner from "../../../assets/42.jpg";

const BannerSection = () => {
  return (
    <div className="py-14 sm:py-20 lg:py-28 xl:py-32 2xl:py-36">
      <Container className="h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-6">
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-teal-500">
            Simplify Your Day with{" "}
            <span className="block mt-2 lg:mt-3 xl:mt-4">
              Effortless Task Management !
            </span>
          </h1>
          <p className="text-sm md:text-base xl:text-lg font-medium opacity-80 mt-4 mb-6 lg:mt-6 lg:mb-8">
            Simplify your life with TaskFlow – the easiest way to manage your
            tasks. Stay organized, boost productivity, and get things done
            effortlessly. Try it now for a stress-free approach to task
            management.
          </p>
          <Link to={"/dashboard"}>
            <Button className=" md:h-10">Let’s Explore</Button>
          </Link>
        </div>
        <div className="flex-1">
          <img className="w-[430px] lg:w-full" src={banner} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
