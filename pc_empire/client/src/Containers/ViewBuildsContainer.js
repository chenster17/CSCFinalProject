import React, { Component } from 'react';
import ViewBuildsComponent from "../Components/ViewBuildsComponent";
import PropTypes from 'prop-types';

class ViewBuildsContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        builds: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <ViewBuildsComponent {...this.props}/>
            </div>
        )
    }
}


export default ViewBuildsContainer;
