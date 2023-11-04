const CheckboxBtn = (props) => {
  return (
    <div className="flex-col  w-1/3 items-center justify-center flex-wrap text-center  md:gap-4  md:w-[5rem]  ">
      <label className="block text-center" htmlFor={`radion${props.genre}`}>
        {props.genre}
      </label>
      <input
        type="checkbox"
        name={`radion${props.genre}`}
        id={`radion${props.genre}`}
        className="toggle toggle-success rounded-xl text-center"
        onClick={props.onClick}
        value={props.genre}
      />
    </div>
  );
};

export default CheckboxBtn;
