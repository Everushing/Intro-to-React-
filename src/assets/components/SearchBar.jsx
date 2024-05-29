import React, { useState } from 'react';

const SearchBar = ({ employees, onUpdateFilteredEmployees }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Convert search term to lowercase for case-insensitive filtering
  };

  const filteredEmployees = employees.filter((employee) => {
    const name = employee.name.toLowerCase(); // Convert employee name to lowercase for case-insensitive filtering
    return name.includes(searchTerm);
  });

  const handleSearch = () => {
    onUpdateFilteredEmployees(filteredEmployees); // Pass filtered data to parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
