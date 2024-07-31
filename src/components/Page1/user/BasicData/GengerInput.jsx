import RadioButton from "../../../RadioButton";
import { useSelector, useDispatch } from "react-redux";
import { genderEdited } from "../../../../slide/medicalTaking-slice";
function GenderInput() {
  const data = useSelector((state) => state.medicalTaking.recorded.gender);
  const dispatch = useDispatch();

  const handleOnclick = (e) => {
    dispatch(genderEdited({ newValue: e.target.id }));
  };
  return (
    <>
      <RadioButton title="เพศ" data={data} handleOnclick={handleOnclick} />
    </>
  );
}

export default GenderInput;
