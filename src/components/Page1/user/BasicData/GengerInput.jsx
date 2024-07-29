import { useState } from "react";
function GengerInput() {
  const nonActiveStyle =
    "rounded-xl w-[90px] min-w-[90px] bg-slate-400 px-2 m-2 cursor-pointer";
  const activeStle =
    "rounded-xl w-[90px] min-w-[90px]  bg-green-400 px-2 m-2 cursor-pointer";
  const [selected, setSelected] = useState(null);

  const handleOnclick = (e) => {
    setSelected(e.target.id);
  };

  return (
    <>
      <p className="font-semibold">เพศ</p>
      <div className="flex justify-end  text-center  flex-wrap ">
        <div
          id="0"
          className={selected == 0 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          ชาย
        </div>
        <div
          id="1"
          className={selected == 1 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          หญิง
        </div>
      </div>
    </>
  );
}

export default GengerInput;
