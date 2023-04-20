const Button = (props) => {
  const { name, color } = props;

  const classString = `rounded-full p-[0.5rem] my-bg-${color} m-[0.5rem] px-[0.8rem]
   text-white font-bold`;

  return <button className={classString}>{name}</button>;
};

export default Button;