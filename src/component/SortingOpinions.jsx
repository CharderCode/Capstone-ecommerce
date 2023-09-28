import React from 'react';

function SortingOptions({ sortBy, onSortChange }) {
  return (
    <div>
      <h3>Sort By</h3>
      <select value={sortBy} onChange={onSortChange}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default SortingOptions;