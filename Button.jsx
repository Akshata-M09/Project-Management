const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-200 text-black hover:bg-blue-300 flex items-center justify-center gap-2"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
