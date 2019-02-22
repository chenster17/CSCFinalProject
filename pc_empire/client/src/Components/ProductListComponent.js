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
                            this.props.headers.map(h => <th key={`header-${h}`}>{h}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(p => {
                            return(
                                <tr>
                                    {
                                        this.props.sheaders.map(h => 
                                        <td>{p[h]}</td>)
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}
/* <td>{`${p.Manufacturer} ${p.Name}`}</td>
                                    <td>{p.Clock.substring(0, 7)}</td>
                                    <td>{p.Cores}</td>
                                    <td>{`${p.Power}W`}</td>
                                    <td />
                                    <td>{`\$${p.Price}`}</td>
                                    <td /> */
ProductListComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    sheaders: PropTypes.array.isRequired
}