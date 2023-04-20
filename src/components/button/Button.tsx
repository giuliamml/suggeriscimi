const Button = (props) => {
  const { name, color } = props;

  
  return (
    <button
      className={`rounded-full p-[0.5rem] border-[2px] solid my-bg-${color}`}
      style={{ marginInline: '0.5rem', paddingInline: '0.5rem', color: 'white', fontWeight: 'bold'}}
    >
      {name}
    </button>
  );
};

export default Button;