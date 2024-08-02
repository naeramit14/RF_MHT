import { DatePicker } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProbableDisease } from "../../../slide/medicalTaking-slice";

function Greeting() {
  const { RangePicker } = DatePicker;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const recorded = useSelector((state) => state.medicalTaking.recorded);
  const probableDisease = useSelector(
    (state) => state.medicalTaking.probable_disease
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProbableDisease(recorded));
  }, []);

  const pb = probableDisease.map((obj, idx) => {
    return (
      <li key={idx}>
        {"-"} {obj} <span> </span>
      </li>
    );
  });
  const advice =
    probableDisease.length == 0 ? (
      <p>
        จากข้อมูลข้างต้น มีความหลากหลายของอาการแนะนำให้ท่านไปตรวจเพิ่มเติมที่รพ{" "}
      </p>
    ) : probableDisease.length == 1 ? (
      <p>จากข้อมูลข้างต้น สันนิษฐานเบื้องต้นได้ว่า ผู้ป่วยมีโอกาสเป็นโรค </p>
    ) : (
      <p>
        จากข้อมูลข้างต้น สันนิษฐานเบื้องต้นได้ว่า ผู้ป่วยมีโอกาสเป็นโรคเหล่านี้{" "}
      </p>
    );

  return (
    <div className="flex w-full pb-6 flex-wrap gap-3">
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>ระบบได้รับข้อมูลครบถ้วนแล้ว</p>
      </div>
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        {advice}
        <ol>{pb}</ol>
      </div>
      <div className="rounded-md bg-slate-200 w-[320px] p-3">
        <p>โปรดเลือกช่วงเวลาที่ท่านสะดวก</p>
        <p className="mb-2">เข้าตรวจที่โรงพยาบาล</p>
        <RangePicker
          showTime={{
            format: "HH:mm",
          }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value, dateString) => {
            setStartDate(dateString[0]);
            setEndDate(dateString[1]);
          }}
        />
      </div>
      {(startDate != "") & (endDate != "") ? (
        <div className="rounded-md bg-slate-200 w-[260px] p-3">
          <p>ระบบได้ทำการนัดหมายให้ท่านแล้ว</p>
        </div>
      ) : null}
    </div>
  );
}

export default Greeting;
