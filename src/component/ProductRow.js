import React from "react";

function ProductRow({ name, price }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

export default ProductRow;