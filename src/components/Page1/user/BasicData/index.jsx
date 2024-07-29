import AgeInput from "./AgeInput";
import GengerInput from "./GengerInput";

function Index() {
  return (
    <div className="flex w-full  justify-end">
      <div className="rounded-md bg-slate-200 w-[250px] p-3">
        <AgeInput />
        <GengerInput />
        <p className="font-semibold">โรคประจำตัว</p>
        <p className="font-semibold">การแพ้ยา/แพ้อาหาร</p>
      </div>
    </div>
  );
}

export default Index;
