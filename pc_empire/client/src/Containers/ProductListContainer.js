import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS } from "../helpers/tableHeaders";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus, fetchBrands, fetchPrices } from "../helpers/apiRequests";
import { handleSearch } from "../reducers/searchReducer";
import { handleCheck, handleSliderChange } from "../reducers/filterReducer";

class ProductListContainer extends Component {
    static propTypes = {
        brands: PropTypes.array.isRequired,
        fetchAllCpus: PropTypes.func.isRequired,
        fetchBrands: PropTypes.func.isRequired,
        fetchPrices: PropTypes.func.isRequired,
        handleCheck: PropTypes.func.isRequired,
        handleSearch: PropTypes.func.isRequired,
        handleSliderChange: PropTypes.func.isRequired,
        prices: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        productType: PropTypes.string.isRequired
    };

    componentDidMount() {
        this.props.fetchAllCpus();
        this.props.fetchBrands(this.props.productType);
        this.props.fetchPrices(this.props.productType);
    }

    render() {
        const tableHeaders = HEADERS[this.props.productType];
        return tableHeaders ? (
            <div>
                <ProductListComponent
                    brands={this.props.brands}
                    headers={tableHeaders}
                    handleCheck={this.props.handleCheck}
                    handleSearch={this.props.handleSearch}
                    handleSliderChange={this.props.handleSliderChange}
                    prices={this.props.prices}
                    products={this.props.products}
                    productType={this.props.productType}
                />
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    const products = state.cpus;
    let filteredProducts = products.filter(p => {
        const fullName = `${p.Manufacturer} ${p.Name}`.toLowerCase();
        return fullName.includes(state.search.toLowerCase());
    });

    if (state.filter.brands.length > 0) {
        state.filter.brands.forEach(brand => {
            filteredProducts = filteredProducts.filter(p => p.Manufacturer.toLowerCase() === brand.toLowerCase());
        })
    }

    if (state.filter.priceRange.length === 2) {
        const low = state.filter.priceRange[0];
        const high = state.filter.priceRange[1];
        filteredProducts = filteredProducts.filter(p => p.Price >= low && p.Price <= high);
    }
    return {
        brands: state.brands,
        prices: state.prices,
        products: filteredProducts,
        productType: ownProps.match.params.product_type
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCpus: () => {
            dispatch(fetchAllCpus());
        },
        fetchBrands: (productType) => {
            dispatch(fetchBrands(productType));
        },
        fetchPrices: (productType) => {
            dispatch(fetchPrices(productType));
        },
        handleCheck: (event) => {
            dispatch(handleCheck(event));
        },
        handleSearch: (event) => {
            dispatch(handleSearch(event));
        },
        handleSliderChange: (event) => {
            dispatch(handleSliderChange(event));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

