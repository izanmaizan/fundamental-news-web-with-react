import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

function ProductTable() {
    return (
        <div className="product-table_container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductCategoryRow name="Sporting Goods" />
                <ProductRow name="Football" price="$4.99" />
                <ProductRow name="Vollyball" price="$3.99" />
                <ProductRow name="Basketball" price="$7.99" />
                <ProductCategoryRow name="Electronic" />
                <ProductRow name="Cooler" price="$199.99" />
                <ProductRow name="Oven" price="$130.99" />
                <ProductRow name="Freezer" price="$349.99" />
            </table>
        </div>
    );
}

export default ProductTable;