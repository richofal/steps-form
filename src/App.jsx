import { useState } from "react";

function App() {
  return (
    <>
      <Step />
      <Step />
    </>
  );
}

function Step() {
  const stepItems = ["Dream", "Believe", "Achieve"];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <button
        className="top-4 right-4 border-none bg-none cursor-pointer text-[40px] text-inherit hover:text-[#526d82]"
        onClick={() => setIsOpen(!isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="w-[600px] bg-[#f7f7f7] rounded-[7px] py-[25px] px-[100px] my-[100px] mx-auto">
          <div className="flex justify-between">
            <div
              className={`h-10 aspect-square rounded-[50%] flex items-center justify-center text-[18px] ${
                step >= 1 ? "bg-[#526d82] text-[#fff]" : "bg-[#e7e7e7]"
              }`}
            >
              1
            </div>
            <div
              className={`h-10 aspect-square rounded-[50%] flex items-center justify-center text-[18px] ${
                step >= 2 ? "bg-[#526d82] text-[#fff]" : "bg-[#e7e7e7]"
              }`}
            >
              2
            </div>
            <div
              className={`h-10 aspect-square rounded-[50%] flex items-center justify-center text-[18px] ${
                step >= 3 ? "bg-[#526d82] text-[#fff]" : "bg-[#e7e7e7]"
              }`}
            >
              3
            </div>
          </div>
          <p className="text-center text-xl my-[40px] mx-0 font-bold flex flex-col items-center">
            Step {step}: {stepItems[step - 1]}
          </p>
          <div className="flex justify-between">
            <button
              className="bg-[#526D82] text-white border-none py-2.5 px-[15px] rounded-[100px] text-[14px font-bold] flex items-center gap-2.5"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="bg-[#526D82] text-white border-none py-2.5 px-[15px] rounded-[100px] text-[14px font-bold] flex items-center gap-2.5"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
