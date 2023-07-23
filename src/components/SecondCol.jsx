import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

const SecondCol = () => {
  return (
    <div className="p-5 ">
      {/* Retirement Income */}
      <div className="pb-4">
        <p className="text-blue-500 text-base font-bold">Retirement Income</p>
        <p className="text-[28px] font-medium">Staring Year 2056</p>
      </div>
      <div className="lg:flex md:gap-20 ">
        <div>
          <p className="text-[28px] font-extrabold">$300,000</p>
          <p className="text-base text-slate-400 pb-2">My Goal</p>
          <div className="bg-blue-400 h-[0.5px] w-full"></div>
        </div>
        <div className="flex gap-20 pt-6 lg:pt-0">
          <div className="w-full">
            <p className="text-[28px] font-extrabold">59%</p>
            <p className="text-base text-slate-400">Goal Achieved</p>
            <div className="bg-blue-400 h-[0.5px] w-full"></div>
          </div>
          <div className="w-full">
            <p className="text-[28px] font-extrabold">K 300</p>
            <p className="text-base text-slate-400">Est.Montly Income</p>
            <div className="bg-blue-400 h-[0.5px] w-full"></div>
          </div>
        </div>
      </div>

      {/* Contributions Overtime */}
      <div className="pt-14">
        <p className="text-xl font-bold">Contributions Overtime</p>
      </div>
      <div className="flex gap-10 pt-5">
        <div className="w-full">
          <div className="h-2 w-2 bg-blue-600 rounded-2xl"></div>
          <div>
            <p className="text-base text-slate-400">Employer</p>
            <p className="text-lg font-bold">$73,500</p>
          </div>
        </div>
        <div className="w-full">
          <div className="h-2 w-2 bg-blue-400 rounded-2xl"></div>
          <div>
            <p className="text-base text-slate-400">Employee</p>
            <p className="text-lg font-bold">$52,500</p>
          </div>
        </div>
        <div className="w-full">
          <div className="h-2 w-2 bg-blue-300 rounded-2xl"></div>
          <div>
            <p className="text-base text-slate-400">Total Interest</p>
            <p className="text-lg font-bold">$244,313</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        <BarChart />
      </div>

      {/* how do i compare to my peers */}
      <div className="pb-8">
        <p className="text-lg font-semibold">How do I compare to my peers?</p>
        <p className="text-sm text-slate-400">
          These numbers represent current goal achievement.
        </p>
      </div>
      <div className="xl:flex md:gap-3">
        <div className="pt-5 pb-5 w-full">
          <div className="flex gap-2 pb-4">
            <p className="text-base font-bold">Age :</p>
            <select id="age" className="rounded-lg">
              <option value="">select the option</option>
              <option value="under 20" className="font-bold">
                under 20
              </option>
              <option value="under 30" className="font-bold">
                under 30
              </option>
              <option value="under 40" className="font-bold">
                under 40
              </option>
            </select>
          </div>
          <div className="h-[0.5px] w-full bg-slate-300"></div>

          <div className="flex gap-2 pb-4 pt-4">
            <p className="text-base font-bold">Salary :</p>
            <select id="salary" className="rounded-lg">
              <option value="">select the option</option>
              <option value="k 20 - k 30" className="font-bold">
                k 20 - k 30
              </option>
              <option value="k 30 - k 40" className="font-bold">
                k 30 - k 40
              </option>
              <option value="k 40 - k 50" className="font-bold">
                k 40 - k 50
              </option>
            </select>
          </div>
          <div className="h-[0.5px] w-full bg-slate-300"></div>

          <div className="flex gap-2 pb-4 pt-4">
            <p className="text-base font-bold">Gender :</p>
            <select id="gender" className="rounded-lg">
              <option value="">select the option</option>
              <option value="male" className="font-bold">
                Male
              </option>
              <option value="female" className="font-bold">
                Female
              </option>
              <option value="other" className="font-bold">
                other
              </option>
            </select>
          </div>
          <div className="h-[0.5px] w-full bg-slate-300"></div>
        </div>
        <div className="flex justify-center items-center w-full ">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};
export default SecondCol;
