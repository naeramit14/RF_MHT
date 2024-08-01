/* eslint-disable react/prop-types */
import { Button } from "antd";
import Greeting from "./system/Greeting";
import RadioButtonExtent from "../RadioButtonExtent/index";
import { useSelector } from "react-redux";

function Index({ handleNext, handlePrevious }) {
  const data = useSelector(
    (state) => state.medicalTaking.recorded.chief_complaint
  );

  const activeCCIndex = data.findIndex((cc) => cc.value == "1");

  return (
    <div className="w-full h-full overflow-y-auto p-2 pb-20  flex flex-col justify-between">
      <div>
        <Greeting />
        <div className="flex w-full  justify-end">
          <div className="rounded-md bg-slate-200 w-[280px] p-3 mb-4">
            <RadioButtonExtent data={data} />
          </div>
        </div>
      </div>
      <div className="flex  justify-between">
        <Button onClick={handlePrevious}>PREVIOUS</Button>
        {activeCCIndex != "-1" ? (
          <Button type="primary" onClick={handleNext}>
            NEXT
          </Button>
        ) : (
          <Button disabled>NEXT</Button>
        )}
      </div>
    </div>
  );
}

export default Index;
