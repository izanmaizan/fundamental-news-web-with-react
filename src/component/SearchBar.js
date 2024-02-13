import React from "react";

function SearchBar() {
    return (
        <div className="search-bar_container">
            <input type="text" placeholder="Search.." />
            <div className="search-bar_stock_checkbox">
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        </div>
    );
}

export default SearchBar;