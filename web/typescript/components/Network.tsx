import * as React from "react";
import * as ReactDOM from "react-dom";
import { Showcase } from "./Showcase";
import { after_network_mount } from "../constants/after_network_mount";

export var Network = React.createClass({
    componentDidMount: function() {
        after_network_mount();
    },
    render: function() {
        return (
            <div>
                <Showcase />
            </div>
        )
    }
});
