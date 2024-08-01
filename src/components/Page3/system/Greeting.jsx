import { useSelector } from "react-redux";
function Greeting() {
  const data = useSelector(
    (state) => state.medicalTaking.recorded.chief_complaint
  );

  const cc = data.find((obj) => obj.value == "1");
  const ccText = cc.id == "0" ? cc.freeText : cc.t_name;
  return (
    <div className="flex w-full pb-6 flex-wrap gap-3">
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>
          อาการสำคัญของผู้ป่วยคือ
          <span className="px-1 font-semibold">{ccText}</span>
        </p>
      </div>
    </div>
  );
}

export default Greeting;
