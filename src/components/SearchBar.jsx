import React from "react";
import { Search as SearchIcon } from "lucide-react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input pr-10"
          placeholder="Search GitHub repositories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} type="button" className="search-button">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
