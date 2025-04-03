import React, { useState } from "react";
import Show from "../public/components/show/show";
import Search from "../public/components/search/Search";
// import "./App.css";

const App = () => {
  const [city, setCity] = useState("Chandauli"); // Default city

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className="app-container" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Weather App</h1>
      <Search onSearch={handleSearch} />
      <Show city={city} />
    </div>
  );
};

export default App;
