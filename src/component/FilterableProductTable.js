import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

function FilterableProductTable() {
    return (
        <div className="container">
            <SearchBar />
            <ProductTable />
        </div>
    )
}

export default FilterableProductTable;