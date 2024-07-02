import React, { useEffect, useState, useMemo } from "react";
import Style from "../components/style.jsx";

const TypeWriter = () => {
  const endings = useMemo(
    () => [
      "Discover Wisdom",
      "Ignite Curiosity",
      "Embrace Knowledge",
      "Navigate IT Trends",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [currIndex, setCurrIndex] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (typing) {
      timer = setTimeout(() => {
        const char = currIndex.length + 1;
        setCurrIndex(endings[index].slice(0, char));
        if (char === endings[index].length) {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            timer = null;
            setCurrIndex("");
            setIndex((index + 1) % endings.length);
          }, 2000);
        }
      }, 100);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [typing, currIndex, index, endings]);

  return (
    <div className="flex flex-row">
      <div id = "title" className={`${Style.title}`}>{currIndex}</div>
      <div className="h-12 bg-white w-1"></div>
    </div>
  );
};

export default TypeWriter;
