"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var vis = require("vis");
var datagram = require("../../constants/datagram");
var options_1 = require("../../constants/options");
var Network = (function (_super) {
    __extends(Network, _super);
    function Network(props, context) {
        return _super.call(this, props, context) || this;
    }
    Network.prototype.componentDidMount = function () {
        var data = {
            nodes: datagram.nodes,
            edges: datagram.edges
        };
        this.network = new vis.Network(document.getElementById('showcase'), data, options_1.options);
    };
    Network.prototype.componentDidUpdate = function () {
        switch (this.props.currentEditMode) {
            case "add_node":
                this.network.addNodeMode();
                break;
            case "edit_node":
                console.log("open edit node panel");
                this.network.editNode();
                break;
            case "add_edge":
                this.network.addEdgeMode();
                break;
            case "edit_edge":
                this.network.editEdgeMode();
                break;
            case "delete_selected":
                this.network.deleteSelected();
                break;
            case "layout":
                console.log("open layout panel");
                break;
            default:
                console.log("none");
                break;
        }
    };
    Network.prototype.render = function () {
        return (React.createElement("div", { id: "showcase" }));
    };
    return Network;
}(React.Component));
exports.Network = Network;
//# sourceMappingURL=Network.js.map