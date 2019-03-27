import React from "react";
import "../Styles/App.css";
import { withRouter } from "react-router-dom"
import start_a_build from "../images/start_a_build.jpg";
import {Col, Row} from "react-bootstrap";


const ListButton = withRouter(({ history }) => (
    <Row>
        <Col id="frontpage1_img_div" md={4}>
            <div onClick={() => { history.push("/list") }} class="frontpage1_img">
                <p class="img_desc">Search Pre-Built Computers</p>
            </div>
        </Col>
        <Col id="frontpage2_img_div" md={4}>
            <div onClick={() => { history.push("/list") }} class="frontpage2_img">
                <p class="img_desc">Start New Build</p>
            </div>
        </Col>
        <Col id="frontpage3_img_div" md={4}>
            <div onClick={() => { history.push("/list") }} class="frontpage3_img">
                <p class="img_desc">Browse User Builds</p>
            </div>
        </Col>
    </Row>
));

const MainPageComponent = () => (
    <ListButton/>
);

export default MainPageComponent;
