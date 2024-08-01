/* eslint-disable react/prop-types */
import { PIAbsent, getNewQuestion } from "../../../slide/medicalTaking-slice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import PIModal from "./PIModal";

function Question({ piObj, idx }) {
  const nonActiveStyle =
    "rounded-xl min-w-[90px] bg-slate-400 px-4 m-2 cursor-pointer text-nowrap ";
  const activeStle =
    "rounded-xl min-w-[90px]  bg-green-400 px-4 m-2 cursor-pointer shadow-sm text-nowrap ";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const recorded = useSelector((state) => state.medicalTaking.recorded);
  const dispatch = useDispatch();


  return (
    <div key={idx} id={idx} className="w-full flex flex-col ">
      <div className="flex justify-start rounded-md  bg-slate-200  w-fit p-2">
        ผู้ป่วยมีอาการ{" "}
        <span className="px-1 font-semibold"> {piObj.t_name} </span>{" "}
        ร่วมด้วยหรือไม่ ?
      </div>
      <div className=" w-full flex justify-end text-center my-2">
        <div
          id={2}
          className={piObj.value == 2 ? activeStle : nonActiveStyle}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          มี
        </div>
        <div
          id={1}
          className={piObj.value == 1 ? activeStle : nonActiveStyle}
          onMouseDown={async () => {
            const selectedPI = recorded.patient_illness.find(
              (obj) => obj.id == piObj.id
            );
            if (selectedPI.value != 1) {
              setIsupdate(true);
            } else {
              setIsupdate(false);
            }
            dispatch(PIAbsent({ piIdx: idx }));
          }}
          onMouseUp={() => {
            if (isUpdate) {
              dispatch(getNewQuestion(recorded));
            }
          }}
        >
          ไม่มี
        </div>
      </div>
      {isModalOpen ? (
        <PIModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          piId={piObj.id}
        />
      ) : null}
    </div>
  );
}

export default Question;
