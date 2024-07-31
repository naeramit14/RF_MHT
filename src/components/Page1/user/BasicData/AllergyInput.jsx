import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { allergyEdited } from "../../../../slide/medicalTaking-slice";
function AllergyInput() {
  const { TextArea } = Input;
  const data = useSelector((state) => state.medicalTaking.recorded.allergy);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(allergyEdited({ newText: e.target.value }));
  };
  return (
    <>
      <p className="font-semibold mt-2">การแพ้ยา/แพ้อาหาร</p>
      <TextArea
        rows={2}
        maxLength={50}
        placeholder="ถ้ามีโปรดระบุ"
        className="mx-2 w-[200px]"
        onChange={handleOnChange}
        value={data.freeText}
      />
    </>
  );
}

export default AllergyInput;
