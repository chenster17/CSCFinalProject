import React, { Component } from "react";
import PropTypes from "prop-types";
import {Row, Col, Table, Form, Button} from "react-bootstrap";

import ProductButtonComponent from "./ProductButtonComponent";
import BuildRemoveButtonComponent from '../Components/BuildRemoveButtonComponent';

export default class BuildPartsComponent extends Component {

    render() {
        var pTypes = {
            CPU: 'CPU',
            Motherboard: "Motherboard",
            GPU: "GPU",
            'Power Supply': 'PS',
            RAM: "RAM",
            Storage: "Storage",
            Case: "Case"
        };
        return (
            <Col>
                <Row>
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
                                this.props.productTypes.map(p => {
                                    return(
                                        <tr key={`row-${p}`}>
                                            <td>{p}</td>
                                            <td>
                                                {(this.props[pTypes[p]] === "" || this.props[pTypes[p]].length === 0)
                                                ? <ProductButtonComponent productType={p}/>
                                                : p === "GPU" || p === "RAM" || p === "Storage" ?
                                                <Table striped>
                                                    <tbody>
                                                        {this.props[pTypes[p]].map(item => {
                                                            return (
                                                                <tr>
                                                                    <td>{item}</td>
                                                                    <td>
                                                                        <BuildRemoveButtonComponent
                                                                            _id={item}
                                                                            ptype={p}
                                                                            handleRemove={this.props.handleRemove}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                        )})}
                                                        <tr><ProductButtonComponent productType={p}/></tr>
                                                    </tbody>
                                                </Table>
                                                :
                                                <Table striped>
                                                    <tbody>
                                                        <tr>
                                                            <td>{this.props[pTypes[p]]}</td>
                                                            <td>
                                                                <BuildRemoveButtonComponent
                                                                    _id={this.props[pTypes[p]]}
                                                                    ptype={p}
                                                                    handleRemove={this.props.handleRemove}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>}
                                            </td>
                                        </tr>
                                )})
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Form onSubmit={event => this.props.handleSaveBuild(event)}>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="formGridBuildName">
                                    <Form.Control type="buildName" placeholder="Enter build name" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Save build for later
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </Col>
        );
    }
}

BuildPartsComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    productTypes: PropTypes.array.isRequired,
    CPU: PropTypes.string.isRequired,
    Motherboard: PropTypes.string.isRequired,
    GPU: PropTypes.array.isRequired,
    PS: PropTypes.string.isRequired,
    RAM: PropTypes.array.isRequired,
    Storage: PropTypes.array.isRequired,
    Case: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleSaveBuild: PropTypes.func.isRequired
};
