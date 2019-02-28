import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS } from "../helpers/tableHeaders";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus } from "../helpers/apiRequests";

class ProductListContainer extends Component {
    static propTypes = {
        fetchAllCpus: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchAllCpus();
    }

    render() {
        const tableHeaders = HEADERS[this.props.match.params.product_type];
        return tableHeaders ? (
            <div>
                <ProductListComponent headers={tableHeaders} products={this.props.products}/>
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cpus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCpus: () => {
            dispatch(fetchAllCpus());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

