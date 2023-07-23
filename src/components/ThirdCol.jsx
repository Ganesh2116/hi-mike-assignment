import React from "react";
import SliderWithNumbers from "./SliderWithNumbers";

const ThirdCol = () => {
  return (
    <>
      {/* Retirement Strategy */}
      <div className="flex flex-col pb-14 bg-slate-100 rounded-3xl md:p-0 ">
        <div>
          <p className="text-xl font-bold pt-8 pb-8 p-5">Retirement Strategy</p>
        </div>
        <div>
          <p className="text-base font-semibold p-5">Employee Contribution</p>
          <div className="flex pl-5 pr-5 justify-between md:flex-col ">
            <SliderWithNumbers />
            <p className="text-base font-bold">12%</p>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold p-5">Retirment Age</p>
          <div className="flex pl-5 pr-5 justify-between md:flex-col">
            <SliderWithNumbers />
            <p className="text-base font-bold">65</p>
          </div>
        </div>
        <div className="flex justify-between pt-8 pb-4 p-5">
          <p className="text-base font-semibold">Employer Contribution</p>
          <p className="text-base font-semibold">8.4%</p>
        </div>
        <div className="flex justify-between pt-4 pb-8 p-5">
          <p className="text-base font-semibold">Interest Rate</p>
          <p className="text-base font-semibold">5%</p>
        </div>
        <button className="bg-blue-600 w-full h-14 rounded-b-xl justify-center font-bold text-white">
          Update
        </button>
      </div>
    </>
  );
};
export default ThirdCol;
