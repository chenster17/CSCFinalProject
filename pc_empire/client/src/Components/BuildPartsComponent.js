import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

import ProductButtonComponent from "./ProductButtonComponent";

export default class BuildPartsComponent extends Component {
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
                    {
                       this.props.productTypes.map(p => {
                           return(
                               <tr>
                                   <td>{p}</td>
                                   <td>
                                       <ProductButtonComponent productType={p}/>
                                   </td>
                                   <td/>
                               </tr>
                        )}) 
                    }
                </tbody>
            </Table>
        );
    }
}

BuildPartsComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    productTypes: PropTypes.array.isRequired
}