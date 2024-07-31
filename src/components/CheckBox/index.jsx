/* eslint-disable react/prop-types */
import { Input } from "antd";

function Index({ title, data, handleOnclick, handleOnchange }) {
  const nonActiveStyle =
    "rounded-lg w-[90px] min-w-[180px] bg-slate-400 px-2 m-2 cursor-pointer";
  const activeStle =
    "rounded-lg w-[90px] min-w-[180px]  bg-green-400 px-2 m-2 cursor-pointer shadow-sm";

  const Options = data.options.map((obj, idx) => {
    return (
      <div
        key={idx}
        id={obj.id}
        className={
          data.value.find((e) => e.id == obj.id) ? activeStle : nonActiveStyle
        }
        onClick={handleOnclick}
      >
        {obj.t_name}
      </div>
    );
  });
  const { TextArea } = Input;
  return (
    <>
      <p className="font-semibold">{title}</p>
      <div className="flex  text-center  flex-wrap ">{Options}</div>
      <TextArea
        rows={2}
        placeholder="โรคอื่น ๆ "
        maxLength={50}
        className="mx-2 w-[200px]"
        onChange={handleOnchange}
        value={data.freeText}
      />
    </>
  );
}

export default Index;
