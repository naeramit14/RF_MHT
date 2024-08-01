import { DatePicker } from "antd";
import { useState } from "react";

function Greeting() {
  const { RangePicker } = DatePicker;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div className="flex w-full pb-6 flex-wrap gap-3">
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>ระบบได้รับข้อมูลครบถ้วนแล้ว</p>
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
