import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS } from "../helpers/tableHeaders";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus } from "../helpers/apiRequests";
import { handleSubmit } from "../reducers/searchReducer";

class ProductListContainer extends Component {
    static propTypes = {
        fetchAllCpus: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchAllCpus();
    }

    render() {
        const tableHeaders = HEADERS[this.props.match.params.product_type];
        return tableHeaders ? (
            <div>
                <ProductListComponent
                    headers={tableHeaders}
                    handleSubmit={this.props.handleSubmit}
                    products={this.props.products}
                    productType={this.props.match.params.product_type}
                />
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}

const mapStateToProps = (state) => {
    const products = state.cpus;
    const filteredProducts = products.filter(p => {
        const fullName = `${p.Manufacturer} ${p.Name}`.toLowerCase();
        return fullName.includes(state.search.toLowerCase());
    });
    return {
        products: filteredProducts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCpus: () => {
            dispatch(fetchAllCpus());
        },
        handleSubmit: (event) => {
            dispatch(handleSubmit(event));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

