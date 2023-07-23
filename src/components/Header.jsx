import React from "react";
import { BoxMultiple } from "tabler-icons-react";
import { AlignBoxLeftMiddle } from "tabler-icons-react";
import { Man } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
import { Home } from "tabler-icons-react";

const Header = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white h-14 flex gap-10 justify-center items-center md:left-0 md:top-0 md:bottom-0 md:flex-col md:h-full md:w-14 ">
      <Home
        className="bg-blue-600 rounded-md w-8 h-8"
        color="white"
        size="10px"
      />
      <BoxMultiple size="30px" />
      <AlignBoxLeftMiddle size="30px" />
      <Man size="30px" />
      <Search size="30px" />
    </div>
  );
};
export default Header;
