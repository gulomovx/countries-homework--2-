import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CountriesList = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <ul className="z-0 mt-16 w-[95%] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 place-items-center h-screen   ">
        {data &&
          data.data.map((data) => {
            // console.log(data);
            return (
              <li
                key={data._id}
                className="cursor-pointer w-[260px] mb-20 h-[336px] bg-[#ffffff] dark:bg-[#2B3844] dark:text-white rounded-lg shadow-md"
              >
                <NavLink to={`/country/${data.name.slug}`}>
                  <img
                    className="w-[270px] h-[160px] rounded-lg object-cover  shadow-2xl"
                    src={data.flags.png}
                    alt=""
                  />
                  <div className=" px-6">
                    <h1 className="text-[18px] font-bold my-4   ">
                      {data.name.common}
                    </h1>
                    <h1>{`Population: ${data.population}`}</h1>
                    <h1>{`Region: ${data.region}`}</h1>
                    <h1>{`Capital: ${data.capital}`}</h1>
                  </div>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CountriesList;
