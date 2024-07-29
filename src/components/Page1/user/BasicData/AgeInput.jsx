import { useState } from "react";

export default function AgeInput() {
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
      <p className="font-semibold">อายุ</p>
      <div className="flex justify-end  text-center  flex-wrap ">
        <div
          id="0"
          className={selected == 0 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          &lt; 2 ปี
        </div>
        <div
          id="1"
          className={selected == 1 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          2 - 15 ปี
        </div>
        <div
          id="2"
          className={selected == 2 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          16 - 65 ปี
        </div>
        <div
          id="3"
          className={selected == 3 ? activeStle : nonActiveStyle}
          onClick={handleOnclick}
        >
          &gt; 65 ปี
        </div>
      </div>
    </>
  );
}
