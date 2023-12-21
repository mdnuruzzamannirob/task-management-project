import PropTypes from "prop-types";
import cn from "../utils/cn";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "btn btn-sm px-6 font-Epilogue font-bold bg-teal-500 hover:bg-teal-600 text-white border-transparent hover:border-transparent rounded",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.array,
};

export default Button;
