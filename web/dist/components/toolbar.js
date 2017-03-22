"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ToolbarButton_1 = require("./ToolbarButton");
exports.Toolbar = React.createClass({
    getInitialState: function () {
        return {
            isVisible: true,
        };
    },
    render: function () {
        var style = {
            display: this.state.isVisible ? "block" : "none"
        };
        return (React.createElement("div", { id: "toolbar", style: style },
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "add_node", value: "add node" }),
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "edit_node", value: "edit node" }),
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "add_edge", value: "add edge" }),
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "edit_edge", value: "edit edge" }),
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "delete_selected", value: "delete" }),
            React.createElement(ToolbarButton_1.ToolbarButton, { name: "layout", value: "layout" })));
    }
});
//# sourceMappingURL=Toolbar.js.map