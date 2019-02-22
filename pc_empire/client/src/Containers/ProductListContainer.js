import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS, SEARCH_HEADERS } from "../helpers/tableHeaders";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus, fetchAllMobos } from "../helpers/apiRequests";

class ProductListContainer extends Component {
    static propTypes = {
        fetchAllCpus: PropTypes.func.isRequired,
        fetchAllMobos: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchAllMobos();
        this.props.fetchAllCpus();
    }

    render() {
        const tableHeaders = HEADERS[this.props.match.params.product_type];
        const searchHeaders = SEARCH_HEADERS[this.props.match.params.product_type];
        return tableHeaders ? (
            <div>
                <ProductListComponent headers={tableHeaders} sheaders={searchHeaders} products={this.props.products[this.props.match.params.product_type]}/>
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCpus: () => {
            dispatch(fetchAllCpus());
        },
        fetchAllMobos: () => {
            dispatch(fetchAllMobos());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

