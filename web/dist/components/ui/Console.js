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
var $ = require("jquery");
var Console = (function (_super) {
    __extends(Console, _super);
    function Console(props, context) {
        return _super.call(this, props, context) || this;
    }
    Console.prototype.render = function () {
        switch (this.props.currentEditMode) {
            case "none":
                return (React.createElement(PopMessage, { id: "pop_message", message: "" }));
            case "add_node":
                return (React.createElement(PopMessage, { id: "pop_message", message: "增加新节点: 在空白处左键单击" }));
            case "edit_node":
                return (React.createElement(EditNodePanel, null));
            case "add_edge":
                return (React.createElement(PopMessage, { id: "pop_message", message: "增加连接: 从一个节点拖拽到另一个节点" }));
            case "edit_edge":
                return (React.createElement(PopMessage, { id: "pop_message", message: "编辑连接: 拖拽连接的末端" }));
            case "delete_selected":
                return (React.createElement(PopMessage, { id: "pop_message", message: "选中的元素已经被删除" }));
            case "layout":
                return (React.createElement(LayoutPanel, null));
            default:
                return (React.createElement("div", { id: "console" }));
        }
    };
    return Console;
}(React.Component));
exports.Console = Console;
var PopMessage = (function (_super) {
    __extends(PopMessage, _super);
    function PopMessage(props, context) {
        return _super.call(this, props, context) || this;
    }
    PopMessage.prototype.componentDidMount = function () {
        setTimeout(function () {
            $("#pop_message").fadeOut(400);
        }, 1800);
    };
    PopMessage.prototype.componentWillUpdate = function () {
        $("#pop_message").show();
    };
    PopMessage.prototype.componentDidUpdate = function () {
        setTimeout(function () {
            $("#pop_message").fadeOut(400);
        }, 1800);
    };
    PopMessage.prototype.render = function () {
        return (React.createElement("div", { id: this.props.id }, this.props.message));
    };
    return PopMessage;
}(React.Component));
var EditNodePanel = (function (_super) {
    __extends(EditNodePanel, _super);
    function EditNodePanel(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initState = function () {
            return {
                isVisible: true
            };
        };
        _this.state = _this.initState();
        return _this;
    }
    EditNodePanel.prototype.render = function () {
        var style = {
            display: this.state.isVisible ? "table" : "none"
        };
        return (React.createElement("div", { id: "console", style: style },
            React.createElement("span", null, "\u8282\u70B9\u6807\u7B7E: "),
            React.createElement("input", { type: "textarea", size: 30 }),
            React.createElement("span", null, "\u8282\u70B9\u56FE\u5F62: "),
            React.createElement("input", { type: "textarea", size: 30, placeholder: "ellipse/circle/box/url" }),
            React.createElement("button", null, "\u786E\u8BA4"),
            React.createElement("button", null, "\u53D6\u6D88")));
    };
    return EditNodePanel;
}(React.Component));
var LayoutPanel = (function (_super) {
    __extends(LayoutPanel, _super);
    function LayoutPanel(props, context) {
        return _super.call(this, props, context) || this;
    }
    LayoutPanel.prototype.render = function () {
        return (React.createElement("div", { id: "console" },
            React.createElement("span", null, "\u5E03\u5C40\u7C7B\u578B: "),
            React.createElement("select", null,
                React.createElement("option", { value: "default" }, "\u9ED8\u8BA4\u5E03\u5C40"),
                React.createElement("option", { value: "LR" }, "\u4ECE\u5DE6\u81F3\u53F3"),
                React.createElement("option", { value: "RL" }, "\u4ECE\u53F3\u81F3\u5DE6"),
                React.createElement("option", { value: "UD" }, "\u4ECE\u4E0A\u81F3\u4E0B"),
                React.createElement("option", { value: "DU" }, "\u4ECE\u4E0B\u81F3\u4E0A"))));
    };
    return LayoutPanel;
}(React.Component));
//# sourceMappingURL=Console.js.map