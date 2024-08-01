/* eslint-disable react/prop-types */
import { Button } from "antd";
import Greeting from "./system/Greeting";
import BasicData from "./user/BasicData";
import { useSelector } from "react-redux";

function Index({ handleNext }) {
  const recorded = useSelector((state) => state.medicalTaking.recorded);
  return (
    <div className="w-full h-full overflow-y-auto p-2 pb-20 flex flex-col justify-between">
      <div>
        <Greeting />
        <BasicData />
      </div>
      {(recorded.age.value != "0") & (recorded.gender.value != "0") ? (
        <div className="flex  flex-row-reverse">
          <Button type="primary" onClick={handleNext}>
            NEXT
          </Button>
        </div>
      ) : (
        <div className="flex  flex-row-reverse">
          <Button disabled>NEXT</Button>
        </div>
      )}
    </div>
  );
}

export default Index;
