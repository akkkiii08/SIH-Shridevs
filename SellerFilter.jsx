import React, { useState } from "react";
import "./SellerFilter.css";

const SellerFilter = () => {
  const [filters, setFilters] = useState({
    verified: false,
    bigFarmers: false,
    smallFarmers: false,
    rating5: false,
    rating4: false,
    below4: false,
  });

  const handleCheckboxChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="filter-container">
      <h3>Location</h3>
      <input type="text" placeholder="Search" className="search-input" />
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            name="verified"
            checked={filters.verified}
            onChange={handleCheckboxChange}
          />
          Verified
        </label>
        <label>
          <input
            type="checkbox"
            name="bigFarmers"
            checked={filters.bigFarmers}
            onChange={handleCheckboxChange}
          />
          Big Farmers
        </label>
        <label>
          <input
            type="checkbox"
            name="smallFarmers"
            checked={filters.smallFarmers}
            onChange={handleCheckboxChange}
          />
          Small Farmers
        </label>
      </div>
      <h3>Rating</h3>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            name="rating5"
            checked={filters.rating5}
            onChange={handleCheckboxChange}
          />
          5.0
        </label>
        <label>
          <input
            type="checkbox"
            name="rating4"
            checked={filters.rating4}
            onChange={handleCheckboxChange}
          />
          4.0
        </label>
        <label>
          <input
            type="checkbox"
            name="below4"
            checked={filters.below4}
            onChange={handleCheckboxChange}
          />
          Below 4.0
        </label>
      </div>
    </div>
  );
};

export default SellerFilter;
