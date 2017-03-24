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
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initState = function () {
            return {
                isLocked: false,
            };
        };
        _this.state = _this.initState();
        return _this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement("div", { id: "toolbar" },
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "add_node", value: "增加节点", seat: "toolbar" }),
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "edit_node", value: "编辑节点", seat: "toolbar" }),
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "add_edge", value: "增加连接", seat: "toolbar" }),
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "edit_edge", value: "编辑连接", seat: "toolbar" }),
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "delete_selected", value: "删除元素", seat: "toolbar" }),
            React.createElement(FuncBtn, { changeEditMode: this.props.changeEditMode, name: "layout", value: "预设布局", seat: "toolbar" })));
    };
    return Toolbar;
}(React.Component));
exports.Toolbar = Toolbar;
var FuncBtn = (function (_super) {
    __extends(FuncBtn, _super);
    function FuncBtn(props, context) {
        return _super.call(this, props, context) || this;
    }
    FuncBtn.prototype.render = function () {
        var _this = this;
        return (React.createElement("button", { onClick: function () { return _this.props.changeEditMode(_this.props.name); }, name: this.props.name }, this.props.value));
    };
    return FuncBtn;
}(React.Component));
//# sourceMappingURL=Toolbar.js.map