import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCheifComplaint } from "../../slide/medicalTaking-slice";
import Header from "./Header";
import Step from "../Step";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";

function Index() {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const handleOpenChat = () => {
    setOpen(!open);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    dispatch(getCheifComplaint());
  }, []);

  return (
    <main className="w-[390px] max-w-[390px] max-h-[800px] shadow-lg bg-white rounded-t-md overflow-hidden">
      <Header handleClick={handleOpenChat} />
      {open ? (
        <div className="h-[800px] w-full  pt-2 pl-2 ">
          <Step current={currentStep} />
          {currentStep == 0 ? (
            <Page1 handleNext={handleNext} />
          ) : currentStep == 1 ? (
            <Page2 handleNext={handleNext} handlePrevious={handlePrevious} />
          ) : currentStep == 2 ? (
            <Page3 handleNext={handleNext} />
          ) : currentStep == 3 ? (
            <Page4 />
          ) : null}
        </div>
      ) : null}
    </main>
  );
}

export default Index;
