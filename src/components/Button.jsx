const Button = (props) => {
  return (
    <button
      className="btn btn-secondary m-2 font-bold font-['RobotoB'] active:border-primary active:border-4 focus:border-4 focus:border-primary"
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};

export default Button;
