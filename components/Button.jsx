const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-200 ${className} z-0`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
