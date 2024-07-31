import RadioButton from "../../../RadioButton";
import { useSelector, useDispatch } from "react-redux";
import { ageEdited } from "../../../../slide/medicalTaking-slice";

export default function AgeInput() {
  const data = useSelector((state) => state.medicalTaking.recorded.age);
  const dispatch = useDispatch();

  const handleOnclick = (e) => {
    dispatch(ageEdited({ newValue: e.target.id }));
  };

  return (
    <>
      <RadioButton title="อายุ" data={data} handleOnclick={handleOnclick} />
    </>
  );
}
