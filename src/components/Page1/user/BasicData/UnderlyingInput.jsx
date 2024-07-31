import CheckBox from "../../../CheckBox";
import { useSelector, useDispatch } from "react-redux";
import {
  underlyingAdded,
  underlyingEdited,
} from "../../../../slide/medicalTaking-slice";
function UnderlydingInput() {
  const data = useSelector((state) => state.medicalTaking.recorded.underlying);
  const dispatch = useDispatch();

  const handleOnclick = (e) => {
    dispatch(underlyingAdded({ newObj: { id: e.target.id } }));
  };

  const handleOnchange = (e) => {
    dispatch(underlyingEdited({ newText: e.target.value }));
  };

  return (
    <>
      <CheckBox
        title="โรคประจำตัว"
        data={data}
        handleOnclick={handleOnclick}
        handleOnchange={handleOnchange}
      />
    </>
  );
}

export default UnderlydingInput;
