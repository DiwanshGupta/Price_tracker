"use client";
import React from "react";

const Searchbar = () => {
  const handlesubmit = () => {};
  return (
    <form className=" flex flex-wrap gap-4 mt-12" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Enter Product"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
