import React from "react";

const FirstCol = () => {
  return (
    <div className="md:bg-slate-100">
      {/* hi mike profile */}
      <div className="flex flex-col items-center pt-4">
        <p className="text-3xl font-bold">Hi Mike,</p>
        <p className="text-md font-light">welcome back.</p>
      </div>

      {/* // Today price */}
      <div className="p-5 ">
        <div className="bg-slate-100 rounded-xl p-6 ">
          <div className="p-2">
            <p className="text-lg font-medium">Today</p>
          </div>
          <div>
            <p className="text-5xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
              $19,892
            </p>
            <p className="text-lg font-thin">Account Balance</p>
          </div>
          <div className="flex gap-8 pt-10 pb-10 md:flex-col">
            <div>
              <p className="text-2xl font-bold">$4,000</p>
              <p className="text-lg font-thin">Year-to-Date</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$1,892</p>
              <p className="text-lg font-thin">Total Interest</p>
            </div>
          </div>
          <button className="bg-blue-600 w-full h-14 rounded-lg text-center text-white">
            I want to..
          </button>
        </div>
      </div>

      {/* //Recent Transactions */}
      <div className="p-5">
        <div className="bg-slate-100 rounded-xl p-6">
          <p className="text-lg font-bold ">Recent Transactions</p>
          <div className="pt-5">
            <p className="text-base font-thin">2020-08-07</p>
            <p className="text-lg font-bold">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="pt-3">
            <p className="text-base font-thin ">2020-07-21</p>
            <p className="text-lg font-bold">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
          <div className="pt-3">
            <p className="text-base font-thin">2020-07-16</p>
            <p className="text-lg font-bold">
              Withdrawal Transfer to Bank-XXX11
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstCol;
