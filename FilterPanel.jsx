import React, { useState } from 'react';
import './FilterPanel.css'; // Importing external CSS file

const FilterPanel = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h4 className="filter-title">Location</h4>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Verified</h4>
        <div className="checkbox-container">
          <input type="checkbox" id="verified" />
          <label htmlFor="verified">Verified</label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Demand</h4>
        <div className="checkbox-container">
          <input type="checkbox" id="big-demand" />
          <label htmlFor="big-demand">Big Demand</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="small-demand" />
          <label htmlFor="small-demand">Small Demand</label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Price</h4>
        <div className="price-range">
          ₹{priceRange[0]} - ₹{priceRange[1]}
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          />
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Sort</h4>
        <div className="checkbox-container">
          <input type="checkbox" id="low-to-high" />
          <label htmlFor="low-to-high">Price - Low to high</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="high-to-low" />
          <label htmlFor="high-to-low">Price - High to low</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="recommended" />
          <label htmlFor="recommended">Recommended</label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-title">Rating</h4>
        <div className="checkbox-container">
          <input type="checkbox" id="5-star" />
          <label htmlFor="5-star">5.0</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="4-star" />
          <label htmlFor="4-star">4.0</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="below-4" />
          <label htmlFor="below-4">Below 4.0</label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
