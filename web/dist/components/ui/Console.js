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
var Console = (function (_super) {
    __extends(Console, _super);
    function Console(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initState = function () {
            return {
                // checker的作用:
                // 1.当用户不断点击工具栏的同一个按钮时, checker可以切换控制台隐藏显示状态
                // 2.当用户点击控制台的"确认"或"取消"按钮后, 控制台就被隐藏了, checker可以让工具栏的按钮再次显示控制台
                editNodePanelChecker: true,
                layoutPanelChecker: true,
                // 真正决定控制台隐藏显示的state
                isEditNodePanelVisible: false,
                isLayoutPanelVisible: false
            };
        };
        _this.toggleEditNodePanelVisibility = function () {
            _this.state.editNodePanelChecker = false;
            _this.state.isEditNodePanelVisible ?
                _this.setState({ isEditNodePanelVisible: false }) : _this.setState({ isEditNodePanelVisible: true });
        };
        _this.toggleLayoutPanelVisibility = function () {
            _this.state.layoutPanelChecker = false;
            _this.state.isLayoutPanelVisible ?
                _this.setState({ isLayoutPanelVisible: false }) : _this.setState({ isLayoutPanelVisible: true });
        };
        _this.state = _this.initState();
        return _this;
    }
    Console.prototype.componentDidUpdate = function () {
        this.state.editNodePanelChecker = true;
        this.state.layoutPanelChecker = true;
    };
    Console.prototype.render = function () {
        switch (this.props.editMode) {
            case "none":
                return (React.createElement(PopMessage, { message: "" }));
            case "add_node":
                return (React.createElement(PopMessage, { message: "增加新节点: 在空白处左键单击" }));
            case "edit_node":
                if (this.state.editNodePanelChecker) {
                    this.state.isEditNodePanelVisible = !this.state.isEditNodePanelVisible;
                }
                return (React.createElement(EditNodePanel, { isVisible: this.state.isEditNodePanelVisible, toggleVisibility: this.toggleEditNodePanelVisibility }));
            case "add_edge":
                return (React.createElement(PopMessage, { message: "增加连接: 从一个节点拖拽到另一个节点" }));
            case "edit_edge":
                return (React.createElement(PopMessage, { message: "编辑连接: 拖拽连接的末端" }));
            case "delete_selected":
                return (React.createElement(PopMessage, { message: "选中的元素已经被删除" }));
            case "layout":
                if (this.state.layoutPanelChecker) {
                    this.state.isLayoutPanelVisible = !this.state.isLayoutPanelVisible;
                }
                return (React.createElement(LayoutPanel, { isVisible: this.state.isLayoutPanelVisible, toggleVisibility: this.toggleLayoutPanelVisibility }));
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
        return (React.createElement("div", { id: "pop_message" }, this.props.message));
    };
    return PopMessage;
}(React.Component));
var EditNodePanel = (function (_super) {
    __extends(EditNodePanel, _super);
    function EditNodePanel(props, context) {
        return _super.call(this, props, context) || this;
    }
    EditNodePanel.prototype.render = function () {
        var style = {
            display: this.props.isVisible ? "table" : "none"
        };
        return (React.createElement("div", { id: "edit_node_panel", style: style },
            React.createElement("span", null, "\u8282\u70B9\u6807\u7B7E: "),
            React.createElement("input", { id: "edit_node_label", type: "text", size: 30 }),
            React.createElement("span", null, "\u8282\u70B9\u56FE\u5F62: "),
            React.createElement("select", { id: "edit_node_shape" },
                React.createElement("option", { value: "stay_the_same" }, "\u4FDD\u6301\u539F\u6837"),
                React.createElement("option", { value: "ellipse" }, "\u692D\u5706"),
                React.createElement("option", { value: "circle" }, "\u5706\u5F62"),
                React.createElement("option", { value: "box" }, "\u65B9\u5757")),
            React.createElement("button", { id: "edit_node_confirm", onClick: this.props.toggleVisibility }, "\u786E\u8BA4"),
            React.createElement("button", { id: "edit_node_cancel", onClick: this.props.toggleVisibility }, "\u53D6\u6D88")));
    };
    return EditNodePanel;
}(React.Component));
var LayoutPanel = (function (_super) {
    __extends(LayoutPanel, _super);
    function LayoutPanel(props, context) {
        return _super.call(this, props, context) || this;
    }
    LayoutPanel.prototype.render = function () {
        var style = {
            display: this.props.isVisible ? "table" : "none"
        };
        return (React.createElement("div", { id: "layout_panel", style: style },
            React.createElement("span", null, "\u5E03\u5C40\u7C7B\u578B: "),
            React.createElement("select", { id: "layout_selector" },
                React.createElement("option", { value: "default" }, "\u9ED8\u8BA4\u5E03\u5C40"),
                React.createElement("option", { value: "LR" }, "\u4ECE\u5DE6\u81F3\u53F3"),
                React.createElement("option", { value: "RL" }, "\u4ECE\u53F3\u81F3\u5DE6"),
                React.createElement("option", { value: "UD" }, "\u4ECE\u4E0A\u81F3\u4E0B"),
                React.createElement("option", { value: "DU" }, "\u4ECE\u4E0B\u81F3\u4E0A")),
            React.createElement("button", { id: "layout_confirm", onClick: this.props.toggleVisibility }, "\u786E\u8BA4"),
            React.createElement("button", { id: "layout_cancel", onClick: this.props.toggleVisibility }, "\u53D6\u6D88")));
    };
    return LayoutPanel;
}(React.Component));
//# sourceMappingURL=Console.js.map