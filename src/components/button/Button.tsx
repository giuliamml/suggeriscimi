const Button = (props) => {
  const { name, color } = props;

  
  return (
    <button
      className={`rounded-full p-[0.5rem] border-[2px] solid my-bg-${color} my-border-${color}`}
    >
      {name}
    </button>
  );
};

export default Button;