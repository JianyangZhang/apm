"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Showcase_1 = require("./Showcase");
var after_network_mount_1 = require("../constants/after_network_mount");
exports.Network = React.createClass({
    componentDidMount: function () {
        after_network_mount_1.after_network_mount();
    },
    render: function () {
        return (React.createElement("div", null,
            React.createElement(Showcase_1.Showcase, null)));
    }
});
//# sourceMappingURL=Network.js.map