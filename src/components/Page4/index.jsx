/* eslint-disable react/prop-types */
import Greeting from "./system/Greeting";

function Index() {
  return (
    <div className="w-full h-full overflow-y-auto p-2 pb-20 flex flex-col justify-between">
      <div>
        <Greeting />
      </div>
    </div>
  );
}

export default Index;
