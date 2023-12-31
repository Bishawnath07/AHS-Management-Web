import React, { useEffect, useRef, useState } from "react";
import SingleColleges from "./SingleColleges";
import SearchBar from "../../Components/SearchBar";
import { FaSearch } from "react-icons/fa";

const AllColleges = () => {
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://e-commerce-site-back-end.vercel.app/allCollege");
      const data = await res.json();
      setAllColleges(data);
    };
    load();
  }, []);
  const searchRef = useRef(null)
  const [search, setSearch] = useState("")
  

  useEffect( ()=>{
    fetch(`https://e-commerce-site-back-end.vercel.app/searchCollege?search=${search}`)
    .then(res => res.json())
    .then(data => {
      setAllColleges(data)
    })
  } ,[search])

  const handleSearch = () => {
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value);
   
}
  return (
    <>
      <div className="bg-[#002147] py-5 px-10 flex justify-center items-center">
        <input
          type="text"
          className="py-2 rounded px-10 lg:w-[50%] w-full relative"
          name="search"
          id="search"
          ref={searchRef}
          placeholder="Search College"
        />
        <div className="absolute lg:left-[345px] left-12">
          <FaSearch></FaSearch>
        </div>
        <input
          type="submit"
          onClick={() => handleSearch()}
          className="border lg:px-10 px-3 py-[7px] bg-image text-white border-[#f36b3b]text-white rounded absolute lg:right-[335px] right-10 lg:w-[200px] w-[35%]"
          name=""
          value="Search College"
          id=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 mt-10">
        {allColleges.map((singleCollege) => (
          <SingleColleges
            key={singleCollege._id}
            singleCollege={singleCollege}
          ></SingleColleges>
        ))}
      </div>
    </>
  );
};

export default AllColleges;
