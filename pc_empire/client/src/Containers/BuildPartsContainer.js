import React, { Component } from "react";
import BuildPartsComponent from "../Components/BuildPartsComponent"

import { HEADERS } from "../Helpers/TableHeaders";
import { PRODUCT_TYPES } from "../Helpers/ProductTypes";

export default class BuildPartsContainer extends Component {
    render() {
        return (
            <div>
                <BuildPartsComponent
                    headers={ HEADERS["BUILD"] }
                    productTypes={ PRODUCT_TYPES }
                />
            </div>
        );
    }
}