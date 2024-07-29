import Greeting from "./system/Greeting";
import BasicData from "./user/BasicData";

function Index() {
  return (
    <div className="w-full h-full overflow-y-auto p-2">
      <Greeting />
      <BasicData />
    </div>
  );
}

export default Index;
