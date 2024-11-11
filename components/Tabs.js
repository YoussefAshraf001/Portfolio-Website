import React from "react";

const Tabs = ({ tabs, selectedTab, onTabSelect, mode }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8 mt-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out 
    ${
      selectedTab === tab
        ? `${
            mode ? "text-white bg-sky-600" : "text-white bg-sky-400"
          } shadow-md`
        : `${
            mode
              ? "text-white border-2 border-sky-600 hover:bg-sky-600 hover:text-white"
              : "text-black border-2 border-sky-400 hover:bg-sky-600 hover:text-white"
          }`
    }`}
          onClick={() => onTabSelect(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
