import * as React from "react";
import * as ReactDOM from "react-dom";
import { Toolbar } from "./components/Toolbar";
import { Network } from "./components/Network";
import { after_final_mount } from "./constants/after_final_mount";

var Topology = React.createClass({
    componentDidMount: function () {
        after_final_mount();
    },
    render: function() {
        return (
            <div id="main">
                <Toolbar />
                <Network />
                <div id="console">console</div>
            </div>
        )
    }
});

ReactDOM.render(<Topology />,
    document.getElementById('topology'),
)
