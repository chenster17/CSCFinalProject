import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Table } from "react-bootstrap";

export default class ProductListComponent extends Component {
    render() {
        return (
            <div>
                <Form
                    onSubmit={event => this.props.handleSubmit(event)}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="productSearch">
                            <Form.Control
                                required
                                type="text"
                                placeholder={`Search ${this.props.productType}s`}
                            />
                        </Form.Group>
                        <Button type="submit">Search</Button>
                    </Form.Row>
                </Form>
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
                                        <td>{`${p.Manufacturer} ${p.Name}`}</td>
                                        <td>{p.Clock.substring(0, 7)}</td>
                                        <td>{p.Cores}</td>
                                        <td>{`${p.Power}W`}</td>
                                        <td />
                                        <td>{`\$${p.Price}`}</td>
                                        <td />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

ProductListComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    productType: PropTypes.string.isRequired
}
