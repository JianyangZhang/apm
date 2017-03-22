"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.ToolbarButton = React.createClass({
    getDefaultProps: function () {
        return {
            name: "button",
            value: "button"
        };
    },
    render: function () {
        return (React.createElement("button", { name: this.props.name }, this.props.value));
    }
});
//# sourceMappingURL=ToolbarButton.js.map