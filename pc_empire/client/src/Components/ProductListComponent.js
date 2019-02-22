import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

export default class ProductListComponent extends Component {
    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        {
                            this.props.headers.map(h => <th>{h}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>Products go here</tr>
                </tbody>
            </Table>
        );
    }
}

ProductListComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
}