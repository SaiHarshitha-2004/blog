import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../data/SearchBar.jsx";
import { InitialState } from "../context/context.jsx";
import Style from "../components/style.jsx";
import ArticlesCardData from "../data/ArticlesCardData.jsx";

const ShowLatest = () => {
  const navigate = useNavigate();
  const {setPage, setSearch } = InitialState();
  const [selectedTag, setSelectedTag] = useState("latest");

  const toggleTab = (item) => {
    setPage(1);
    setSelectedTag(item);
    navigate(`/articlesList/search`);
    setSearch(item);
  };

  const data = ["latest", "trends", "programming", "jobs"];

  useEffect(() => {
    setSearch("latest");
  }, [setSearch]);

  return (
    <div className="mb-5 mt-20 pb-5">
      <div className="mt-16 ml-5 mr-5">
        <div className="w-full flex justify-between p-5">
          <div className="flex space-x-2 flex-row">
            {data.map((item, index) => (
              <div
                key={index}
                className={`${Style.captionTitle} flex-wrap w-1/2 flex flex-row cursor-pointer`}
              >
                <button
                  onClick={() => toggleTab(item)}
                  className={`border border-gray-400 p-2 ${
                    selectedTag === item
                      ? "bg-gradient-to-r from-[#2600fc] to-[#ff00ea] border-0"
                      : "hover:bg-gradient-to-r hover:from-[#2600fc] hover:to-[#ff00ea]"
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>

          <div className="w-1/2">
            <p className="float-right flex items-center">
              <SearchBar />
            </p>
          </div>
        </div>
        
        <div className="flex flex-col mt-16 items-center justify-center">
          <ArticlesCardData />
        </div>
      </div>
    </div>
  );
};

export default ShowLatest;
