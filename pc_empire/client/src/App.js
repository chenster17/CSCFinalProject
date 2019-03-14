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
import ViewBuildsContainer from "./Containers/ViewBuildsContainer";
import {fetchBuilds} from "./helpers/apiRequests";

class App extends Component {
    static propTypes = {
        builds: PropTypes.array.isRequired,
        userInfo: PropTypes.object,
        isLoggedIn: PropTypes.bool.isRequired,
        handleLogOut: PropTypes.func.isRequired,
        fetchUserInfo: PropTypes.func.isRequired,
        fetchBuilds: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchBuilds();
    }

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
                        <Route path="/viewBuilds" render={() => <ViewBuildsContainer {...this.props}/>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        builds: state.viewBuilds,
        isLoggedIn: localStorage.getItem("userInfo") !== null
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
        },
        fetchBuilds: () => {
            dispatch(fetchBuilds());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
