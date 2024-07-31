/* eslint-disable react/prop-types */
import { Button } from "antd";
import Greeting from "./system/Greeting";

function Index({ handleNext, handlePrevious }) {
  return (
    <div className="w-full h-full overflow-y-auto p-2 pb-20 flex flex-col justify-between">
      <div>
        <Greeting />
      </div>
      <div className="flex  justify-between">
        <Button danger type="primary" onClick={handlePrevious}>
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
