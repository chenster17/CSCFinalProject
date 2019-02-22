import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS } from "../Helpers/TableHeaders";

export default class ProductListContainer extends Component {
    render() {
        const tableHeaders = HEADERS[this.props.match.params.product_type];
        return tableHeaders ? (
            <div>
                <ProductListComponent headers={tableHeaders} />
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}