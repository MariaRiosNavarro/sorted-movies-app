const Button = (props) => {
  return (
    <button
      className="btn btn-secondary m-2 font-bold font-['RobotoB']"
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};

export default Button;

