import React from 'react';

function FilterOptions({ categories, selectedCategory, priceRange, onCategoryChange, onPriceRangeChange }) {
  return (
    <div>
      <h3>Filter By Category</h3>
      <select onChange={onCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <h3>Filter By Price</h3>
      <input
        className="setPrice"
        type="range"
        min="0"
        max="1000"
        value={priceRange}
        onChange={(e) => onPriceRangeChange(Number(e.target.value))}
      />
      <p>$ {priceRange}</p>
    </div>
  );
}

export default FilterOptions;