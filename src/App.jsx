import "./App.css";
import React from "react";
import FirstCol from "./components/FirstCol";
import SecondCol from "./components/SecondCol";
import ThirdCol from "./components/ThirdCol";

const App = () => {
  return (
    <div className="md:flex md:pl-10 md:pt-10">
      <div className="md:w-1/4">
        <FirstCol />
      </div>
      <div className="md:w-1/2">
        <SecondCol />
      </div>
      <div className="md:w-1/5">
        <ThirdCol />
      </div>
    </div>
  );
};
export default App;
