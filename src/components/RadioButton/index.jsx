/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Index({ title, data, handleOnclick }) {
  const nonActiveStyle =
    "rounded-xl w-[90px] min-w-[90px] bg-slate-400 px-2 m-2 cursor-pointer";
  const activeStle =
    "rounded-xl w-[90px] min-w-[90px]  bg-green-400 px-2 m-2 cursor-pointer shadow-sm";

  const Options = data.options.map((obj, idx) => {
    return (
      <div
        key={idx}
        id={obj.id}
        className={data.value == obj.id ? activeStle : nonActiveStyle}
        onClick={handleOnclick}
      >
        {obj.t_name}
      </div>
    );
  });
  return (
    <>
      <p className="font-semibold">{title}</p>
      <div className="flex justify-end  text-center  flex-wrap ">{Options}</div>
    </>
  );
}

export default Index;
