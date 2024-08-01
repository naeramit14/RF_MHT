import { useSelector, useDispatch } from "react-redux";
import { getNewQuestion } from "../../../slide/medicalTaking-slice";

import Question from "./Question";
import { useEffect } from "react";

function AssociatedSymptom() {
  const recorded = useSelector((state) => state.medicalTaking.recorded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewQuestion(recorded));
  }, []);

  const conversation = recorded.patient_illness.map((piObj, idx) => {
    return <Question key={idx} piObj={piObj} idx={idx} />;
  });

  return (
    <>
      <div>{conversation}</div>
    </>
  );
}

export default AssociatedSymptom;
