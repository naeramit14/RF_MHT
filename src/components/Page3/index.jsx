/* eslint-disable react/prop-types */
import { Button } from "antd";
import Greeting from "./system/Greeting";
import AssociatedSymptom from "./user/AssociatedSymptom";

function Index({ handleNext}) {
  return (
    <div className="w-full h-full overflow-y-auto p-2 pb-20 flex flex-col justify-between">
      <div>
        <Greeting />
        <AssociatedSymptom />
      </div>
      <div className="flex  justify-between">
        <Button disabled >
          PREVIOUS
        </Button>
        <Button type="primary" onClick={handleNext}>
          NEXT
        </Button>
      </div>
    </div>
  );
}

export default Index;
