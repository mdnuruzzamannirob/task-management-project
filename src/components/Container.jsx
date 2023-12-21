import PropTypes from "prop-types";
import cn from "../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-[1250px] 2xl:max-w-7xl mx-5 sm:mx-10 xl:mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
