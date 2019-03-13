import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default class BuildAddButtonComponent extends Component {
    render() {
        return (
            <Button
                variant="primary"
                
                value={[ this.props._id , this.props.ptype ]}
                onClick={ this.props.handleAdd }
            >
                Add to Build
            </Button>
        );
    }
}

BuildAddButtonComponent.propTypes = {
    _id: PropTypes.string.isRequired,
    ptype: PropTypes.string.isRequired,
    handleAdd: PropTypes.func.isRequired
};