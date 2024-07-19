const Button = ({ text, color, children }) => {
  return (
    <button style={{ color }}>
      {text}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
