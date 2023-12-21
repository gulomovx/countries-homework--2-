import React from "react";
import { BsMoon } from "react-icons/bs";

import { useState, useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="bg-[#fff] w-full mt-0">
      <nav className=" justify-between items-center gap-8 shadow-md dark:bg-[#2B3844] dark:text-white  w-full   ">
        <div>
          <div className="p-4 flex items-center justify-between w-[90%] mx-auto">
            <h2 className="text-3xl font-bold ">Where in the world?</h2>
            <div onClick={handleMode} className="flex items-center cursor-pointer gap-2 py-2 ">
              <BsMoon />
              <h1 className="font-semibold">Dark Mode</h1>
            </div>
          </div>
          <hr />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
