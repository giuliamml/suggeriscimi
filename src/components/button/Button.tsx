const Button = (props) => {
  const { name, color } = props;
  return (
    <button
      className="rounded-full p-[0.5rem]"
      style={{ border: `2px solid ${color}`, color: color }}
    >
      {name}
    </button>
  );
};

export default Button;