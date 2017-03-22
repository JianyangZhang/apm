"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Toolbar_1 = require("./components/Toolbar");
var Network_1 = require("./components/Network");
var afterFinalMount_1 = require("./constants/afterFinalMount");
var Topology = React.createClass({
    getInitialState: function () {
        return {
            edit_mode: "none"
        };
    },
    componentDidMount: function () {
        afterFinalMount_1.afterFinalMount();
    },
    changeEditMode: function (current_mode) {
        this.setState({
            edit_mode: current_mode
        });
    },
    componentDidUpdate: function () {
    },
    render: function () {
        return (React.createElement("div", { id: "main" },
            React.createElement(Toolbar_1.Toolbar, { changeEditMode: this.changeEditMode }),
            React.createElement(Network_1.Network, { currentEditMode: this.state.edit_mode }),
            React.createElement("div", { id: "console" }, "console")));
    }
});
ReactDOM.render(React.createElement(Topology, null), document.getElementById('topology'));
//# sourceMappingURL=main.js.map