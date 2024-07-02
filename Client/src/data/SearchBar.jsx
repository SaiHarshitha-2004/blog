import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { InitialState } from "../context/context";

const SearchBar = () => {
  const { search ,  setSearch, setPage } = InitialState();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const data = [
    "Python", "JavaScript", "html" , "css" ,  "Java", "C#", "cpp", "PHP", "TypeScript", "Ruby", "Swift", "Kotlin",
    "Go", "Rust", "Scala", "Dart", "Perl", "Haskell", "Objective-C", "Elixir", "Julia", "R",
    "Artificial Intelligence", "Machine Learning", "Data Science", "Cloud Computing", "DevOps",
    "Blockchain", "Cybersecurity", "Internet of Things", "Augmented Reality",
    "Virtual Reality", "Edge Computing", "Quantum Computing", "5G", "Progressive Web Apps",
    "Serverless Architecture", "Microservices", "Docker", "Low-code Development",
    "Robotic Process Automation", "Natural Language Processing"
  ];

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    const filtered = data.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    // setShowTag(true);
    setPage(1);
    setSearch(suggestion.toLowerCase().replace(/\s+/g, '')); 
    navigate(`/articlesList/search`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (showSuggestions && filteredSuggestions.length > 0) {
        handleSuggestionClick(filteredSuggestions[activeSuggestionIndex]);
      } else {
        // setShowTag(true);
        setPage(1);
        setSearch(inputValue.toLowerCase().replace(/\s+/g, '')); // Update search in InitialState without spaces
        navigate(`/articlesList/search`);
      }
    } else if (event.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === filteredSuggestions.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1
      );
    }
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index}>{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="relative">
      <div className="w-1/2 flex flex-col">
        <div className='flex flex-row'>
          <input
            type="text"
            placeholder="search by tag..."
            className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea] text-white px-4 py-2 rounded-r-md flex items-center">
            <GoSearch className="text-lg" />
          </span>
        </div>
        <div>
          {showSuggestions && inputValue && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 z-10 max-h-60 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                    index === activeSuggestionIndex ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {getHighlightedText(suggestion, inputValue)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
