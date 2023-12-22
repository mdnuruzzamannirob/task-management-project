import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Taskflow_logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <div className="h-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 lg:py-10 ">
          <div className="flex items-start gap-3">
            <div className="">
              {" "}
              <div className="flex items-center gap-2">
                <img className="w-8 h-8" src={logo} alt="" />
                <h2 className="text-xl font-semibold lg:font-bold text-teal-500">
                  TaskFlow
                </h2>
              </div>
              <small>Simplify Your Day with Effortless Task Management !</small>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mdnuruzzamannirob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>
            <a
              href="https://linkedin.com/in/nuruzzamanmd2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>
          </div>
        </div>
        <hr className="opacity-50" />
        <div className="flex flex-col items-center justify-center py-5">
          <small>
            Copyright © 2023 - All right reserved by <span>TaskFlow</span>
          </small>
          <small>Created by Md. Nuruzzaman</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
