"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FuncButton_1 = require("./FuncButton");
exports.Toolbar = React.createClass({
    getDefaultProps: function () {
        return {
            changeEditMode: function (current_mode) {
                console.log('Toolbar layer');
            }
        };
    },
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
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "add_node", value: "add node", seat: "toolbar" }),
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "edit_node", value: "edit node", seat: "toolbar" }),
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "add_edge", value: "add edge", seat: "toolbar" }),
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "edit_edge", value: "edit edge", seat: "toolbar" }),
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "delete_selected", value: "delete", seat: "toolbar" }),
            React.createElement(FuncButton_1.FuncButton, { changeEditMode: this.props.changeEditMode, name: "layout", value: "layout", seat: "toolbar" })));
    }
});
//# sourceMappingURL=Toolbar.js.map