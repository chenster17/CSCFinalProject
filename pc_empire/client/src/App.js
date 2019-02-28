import React, { Component } from 'react';
import NavBarComponent from './Components/NavBarComponent';
import MainPageContainer from './Containers/MainPageContainer';
import BuildPartsContainer from './Containers/BuildPartsContainer';
import ProductListContainer from './Containers/ProductListContainer';

import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBarComponent />
                <BrowserRouter>
                    <div>
                        <Route path="/(home|)" component={MainPageContainer} />
                        <Route path="/list" component={BuildPartsContainer} />
                        <Route path="/products/:product_type" component={ProductListContainer} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
