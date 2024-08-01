import { useSelector, useDispatch } from "react-redux";
import { getNewQuestion } from "../../../slide/medicalTaking-slice";
import { Input } from "antd";

import Question from "./Question";
import { useEffect } from "react";

function AssociatedSymptom() {
  const recorded = useSelector((state) => state.medicalTaking.recorded);
  const dispatch = useDispatch();
  const { TextArea } = Input;

  useEffect(() => {
    dispatch(getNewQuestion(recorded));
  }, []);

  const conversation = recorded.patient_illness.map((piObj, idx) => {
    if (piObj.id != 0) {
      return <Question key={idx} piObj={piObj} idx={idx} />;
    } else {
      return (
        <div key={idx} className="flex flex-col gap-3">
          <div className="flex justify-start rounded-md  bg-slate-200  w-fit p-2">
            ผู้ป่วยมีอาการอื่นๆ เพิ่มเติมหรือไม่ ?
          </div>
          <div className="mb-2">
            <TextArea rows={4} placeholder="ระบุอาการเพิ่มเติม"/>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div>{conversation}</div>
    </>
  );
}

export default AssociatedSymptom;
