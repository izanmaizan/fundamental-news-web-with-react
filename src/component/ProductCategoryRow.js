import React from "react";

function ProductCategoryRow({ name }) {
    return (
        <tr>
            <td colSpan="2">
                <strong>{name}</strong>
            </td>
        </tr>
    );
}

export default ProductCategoryRow;