/* eslint-disable react/prop-types */
import { useState } from "react";
import CCModal from "./CCModal";

// eslint-disable-next-line react/prop-types
function Index({ data }) {
  const nonActiveStyle =
    "rounded-xl min-w-[90px] bg-slate-400 px-4 m-2 cursor-pointer text-nowrap ";
  const activeStle =
    "rounded-xl min-w-[90px]  bg-green-400 px-4 m-2 cursor-pointer shadow-sm text-nowrap ";

  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnclick = (e) => {
    setSelected(e.target.id);
    setIsModalOpen(true);
  };

  const DetailInput = data.map((obj, idx) => {
    return (
      <div
        key={idx}
        id={obj.id}
        className={obj.value == 1 ? activeStle : nonActiveStyle}
        onClick={handleOnclick}
      >
        {obj.t_name}
      </div>
    );
  });

  return (
    <>
      <p className="font-semibold">
        อาการสำคัญ <span className="font-light ">(เลือกเพียง 1 อาการ)</span>
      </p>
      <div className="flex text-center  flex-wrap ">{DetailInput}</div>
      {isModalOpen ? (
        <CCModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          ccId={selected}
        />
      ) : null}
    </>
  );
}

export default Index;
