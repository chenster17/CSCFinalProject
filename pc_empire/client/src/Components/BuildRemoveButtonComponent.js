import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default class BuildRemoveButtonComponent extends Component {
    render() {
        return (
            <Button
                variant="primary"
                
                value={[ this.props._id , this.props.ptype ]}
                onClick={ this.props.handleRemove }
            >
                Remove
            </Button>
        );
    }
}

BuildRemoveButtonComponent.propTypes = {
    _id: PropTypes.string.isRequired,
    ptype: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
};