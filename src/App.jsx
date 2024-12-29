function App() {
  function handleNext() {
    alert("Next button clicked");
  }

  return (
    <>
      <div className="w-[600px] bg-[#f7f7f7] rounded-[7px] py-[25px] px-[100px] my-[100px] mx-auto">
        <div className="flex justify-between">
          <div className="h-10 aspect-square bg-[#e7e7e7] rounded-[50%] flex items-center justify-center text-[18px]">
            1
          </div>
          <div className="h-10 aspect-square bg-[#e7e7e7] rounded-[50%] flex items-center justify-center text-[18px]">
            2
          </div>
          <div className="h-10 aspect-square bg-[#e7e7e7] rounded-[50%] flex items-center justify-center text-[18px]">
            3
          </div>
        </div>
        <p className="text-center text-xl my-[40px] mx-0 font-bold flex flex-col items-center">
          Step: Dream
        </p>
        <div className="flex justify-between">
          <button
            className="bg-[#526D82] text-white border-none py-2.5 px-[15px] rounded-[100px] text-[14px font-bold] flex items-center gap-2.5"
            onMouseEnter={() => alert("Prev button hovered")}
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
    </>
  );
}

export default App;
