function Greeting() {
  return (
    <div className="flex w-full pb-6 flex-wrap gap-3">
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>อาการสำคัญของผู้ป่วยคือ ท้องเสีย</p>
      </div>
      <div className="rounded-md bg-slate-200 w-[260px] p-3">
        <p>ท่านมีอาการเหล่านี้ร่วมด้วยหรือไม่ ? </p>
      </div>
    </div>
  );
}

export default Greeting;
