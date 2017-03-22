"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var vis = require("vis");
var datagram = require("../constants/datagram");
var options_1 = require("../constants/options");
var Showcase_1 = require("./Showcase");
var network;
exports.Network = React.createClass({
    getDefaultProps: function () {
        return {
            currentEditMode: "none"
        };
    },
    componentDidMount: function () {
        var data = {
            nodes: datagram.nodes,
            edges: datagram.edges
        };
        network = new vis.Network(document.getElementById('showcase'), data, options_1.options);
    },
    componentDidUpdate: function () {
        switch (this.props.currentEditMode) {
            case "add_node":
                network.addNodeMode();
                break;
            case "edit_node":
                network.editNode();
                break;
            case "add_edge":
                network.addEdgeMode();
                break;
            case "edit_edge":
                network.editEdgeMode();
                break;
            case "delete_selected":
                network.deleteSelected();
                break;
            case "layout":
                console.log("open layout selector");
                break;
            default:
                console.log("none");
                break;
        }
    },
    render: function () {
        return (React.createElement("div", null,
            React.createElement(Showcase_1.Showcase, null)));
    }
});
//# sourceMappingURL=Network.js.map