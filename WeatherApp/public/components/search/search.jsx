import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm(""); // Clear input after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="searchContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        border: "2px solid #333",
        borderRadius: "20px",
        width: "50%",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "20px",
          width: "70%",
          fontSize: "1.2rem",
          outline: "none",
          backgroundColor: "transparent",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          border: "none",
          background: "none",
          fontSize: "1.8rem",
          cursor: "pointer",
          padding: "5px",
        }}
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
