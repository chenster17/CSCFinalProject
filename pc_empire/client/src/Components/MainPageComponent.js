import React from "react";
import "../Styles/App.css";
import { withRouter } from "react-router-dom"

const ListButton = withRouter(({ history }) => (
    <button className="infoButton"
        type="button"
        onClick={() => { history.push("/list") }}
    >
        Start Custom Build
    </button>
));

const MainPageComponent = () => (
    <section id="info">
        <section className="infoBox" id="infoBox1">
            <p>Option 1 text</p>
            <button className="infoButton">Search Pre-Built Computers</button>
        </section>
        <section className="infoBox" id="infoBox2">
            <p>Option 2 text</p>
            <ListButton />
        </section>
        <section className="infoBox" id="infoBox3">
            <p>Option 3 text</p>
            <button className="infoButton">Browse User Builds</button>
        </section>
    </section>
);

export default MainPageComponent;
