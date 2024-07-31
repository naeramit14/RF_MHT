function Greeting() {
  return (
    <div className="flex w-full pb-6 flex-wrap gap-3">
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>ระบบได้รับข้อมูลพื้นฐานแล้ว</p>
      </div>
      <div className="rounded-md bg-slate-200 w-[310px] p-3">
        <p>
          ได้โปรดเลือก <span className="font-semibold">อาการ</span>{" "}
          ของการเจ็บป่วยครั้งนี้
        </p>
        <p>ที่มีผลกระทบต่อผู้ป่วยมากที่สุด</p>
      </div>
    </div>
  );
}

export default Greeting;
