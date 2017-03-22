"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.FuncButton = React.createClass({
    getDefaultProps: function () {
        return {
            name: "button",
            value: "button",
            seat: "toolbar",
            changeEditMode: function (current_mode) {
                console.log('ToolbarButton layer:' + current_mode);
            }
        };
    },
    changeEditMode: function () {
        this.props.changeEditMode(this.props.name);
    },
    render: function () {
        return (React.createElement("button", { onClick: this.changeEditMode, name: this.props.name }, this.props.value));
    }
});
//# sourceMappingURL=FuncButton.js.map