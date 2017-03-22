"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Toolbar_1 = require("./components/Toolbar");
var Network_1 = require("./components/Network");
var after_final_mount_1 = require("./constants/after_final_mount");
var Topology = React.createClass({
    componentDidMount: function () {
        after_final_mount_1.after_final_mount();
    },
    render: function () {
        return (React.createElement("div", { id: "main" },
            React.createElement(Toolbar_1.Toolbar, null),
            React.createElement(Network_1.Network, null),
            React.createElement("div", { id: "console" }, "console")));
    }
});
ReactDOM.render(React.createElement(Topology, null), document.getElementById('topology'));
//# sourceMappingURL=main.js.map