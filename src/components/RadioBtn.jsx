const RadioBtn = (props) => {
  return (
    <div className="flex-col  w-1/3 items-center justify-center flex-wrap text-center  md:gap-4 md:border md:w-[5rem]  ">
      <label className="block text-center" htmlFor={`radion${props.value}`}>
        {props.value}
      </label>
      <input
        type="checkbox"
        name={`radion${props.value}`}
        id={`radion${props.value}`}
        className="toggle toggle-success rounded-xl text-center"
      />
    </div>
  );
};

export default RadioBtn;
