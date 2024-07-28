import { useState } from "react";
import { Steps } from "antd";
import Header from "./Header";

function Index() {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  const handleOpenChat = () => {
    setOpen(!open);
  };

  const handleOnchangeStep = (value) => {
    setCurrent(value);
  };
  return (
    <div className="w-[390px] max-w-[390px] max-h-[850px] shadow-lg bg-white rounded-t-md">
      <Header handleClick={handleOpenChat} />
      {open ? (
        <div className="h-[650px] w-full p-2">
          <Steps
            size="small"
            current={current}
            onChange={handleOnchangeStep}
            items={[
              {
                title: "",
              },
              {
                title: "",
              },
              {
                title: "",
              },
              {
                title: "",
              },
            ]}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Index;
