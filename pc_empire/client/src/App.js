import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarComponent from './Components/NavBarComponent';
import MainPageContainer from './Containers/MainPageContainer';
import BuildPartsContainer from './Containers/BuildPartsContainer';
import ProductListContainer from './Containers/ProductListContainer';
import ProductPageContainer from './Containers/ProductPageContainer';
import SignInOrRegisterContainer from './Containers/SignInOrRegisterContainer';

import { BrowserRouter, Route } from "react-router-dom";
import {connect} from "react-redux";
import { fetchUserInfo } from "./reducers/userInfoReducer";

class App extends Component {
    static propTypes = {
        userInfo: PropTypes.object,
        handleLogOut: PropTypes.func.isRequired,
        fetchUserInfo: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="App">
                <NavBarComponent {...this.props} />
                <BrowserRouter>
                    <div>
                        <Route path="/(home|)" component={MainPageContainer} />
                        <Route path="/list" component={BuildPartsContainer} />
                        <Route path="/products/:product_type" component={ProductListContainer} />
                        <Route path="/part/:_id" component={ProductPageContainer} />
                        <Route path="/login" render={() => <SignInOrRegisterContainer {...this.props}/>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserInfo: () => {
            dispatch(fetchUserInfo());
        },
        handleLogOut: () => {
            localStorage.removeItem("userInfo");
            dispatch(fetchUserInfo());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
