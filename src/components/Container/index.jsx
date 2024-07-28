import { useState } from "react";
import Header from "./Header";

function Index() {
  const [open, setOpen] = useState(true);

  const handleOpenChat = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[390px] max-w-[390px] max-h-[850px] shadow-lg bg-white rounded-t-md">
      <Header handleClick={handleOpenChat} />
      {open ? <div className="h-[650px] "></div> : null}
    </div>
  );
}

export default Index;
