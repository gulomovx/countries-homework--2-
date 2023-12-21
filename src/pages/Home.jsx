import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { UseFetch } from "../hooks/UseFetch";
import CountriesList from "./CountriesList";
import SingleCountry from "./SingleCountry";

const Home = () => {
  const [search, setSearch] = useState("");
  let url ="https://countries-api-v7sn.onrender.com/countries?limit=250"
  const { data, pending, error } = UseFetch(search ? search : url);
  // console.log(search);
  return (
    <div>
      <Header setSearch={setSearch} />
      <CountriesList data={data} />
      <Outlet/>
    </div>
  );
};

export default Home;
