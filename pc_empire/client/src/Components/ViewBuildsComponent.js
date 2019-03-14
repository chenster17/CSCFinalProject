import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

class ViewBuildsComponent extends Component {
    static propTypes = {
        builds: PropTypes.array.isRequired
    };

    render() {
        return(
            <Col>
                <h1>lol</h1>
            </Col>
        )
    }
}

export default ViewBuildsComponent;
