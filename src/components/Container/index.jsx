import { useState } from "react";
import Header from "./Header";
import Step from "../Step";
import Page1 from "../Page1";
function Index() {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [page, setPage] = useState(0);

  const handleOpenChat = () => {
    setOpen(!open);
  };

  const handleOnchangeStep = (value) => {
    if (value <= currentStep) {
      setPage(value);
    }
  };
  return (
    <div className="w-[390px] max-w-[390px] max-h-[850px] shadow-lg bg-white rounded-t-md">
      <Header handleClick={handleOpenChat} />
      {open ? (
        <div className="h-[650px] w-full  pt-2 pl-2 overflow-hidden">
          <Step current={currentStep} handleOnchange={handleOnchangeStep} />
          <Page1 />
        </div>
      ) : null}
    </div>
  );
}

export default Index;
