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
var Toolbar_1 = require("./ui/Toolbar");
var Network_1 = require("./ui/Network");
var Console_1 = require("./ui/Console");
var RightClickMenu_1 = require("./ui/RightClickMenu");
var didUpdate_1 = require("../constants/didUpdate");
var afterFinalMount_1 = require("../constants/afterFinalMount");
var datagram_1 = require("../constants/datagram");
var Topology = (function (_super) {
    __extends(Topology, _super);
    function Topology(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initState = function () {
            return {
                edit_mode: "none",
                isLocked: false,
                datagram: datagram_1.datagram
            };
        };
        _this.state = _this.initState();
        _this.menuItems = [
            { text: "增加节点", type: "button", callback: function () { _this.setState({ edit_mode: "add_node" }); } },
            { text: "编辑节点", type: "button", callback: function () { _this.setState({ edit_mode: "edit_node" }); } },
            { text: "增加连接", type: "button", callback: function () { _this.setState({ edit_mode: "add_edge" }); } },
            { text: "编辑连接", type: "button", callback: function () { _this.setState({ edit_mode: "edit_edge" }); } },
            { text: "删除元素", type: "button", callback: function () { _this.setState({ edit_mode: "delete_selected" }); } },
            { text: "改变布局", type: "button", callback: function () { _this.setState({ edit_mode: "layout" }); } },
            { text: "锁定", type: "checkbox", callback: function () { _this.setState({ edit_mode: "none", isLocked: !_this.state.isLocked }); } },
        ];
        return _this;
    }
    Topology.prototype.componentDidUpdate = function () {
        didUpdate_1.didUpdate(this.state.isLocked);
    };
    Topology.prototype.componentDidMount = function () {
        afterFinalMount_1.afterFinalMount();
    };
    Topology.prototype.render = function () {
        return (React.createElement("div", { id: "main" },
            React.createElement(Toolbar_1.Toolbar, { items: this.menuItems, isLocked: this.state.isLocked }),
            React.createElement(Network_1.Network, { editMode: this.state.edit_mode, isLocked: this.state.isLocked, datagram: this.state.datagram }),
            React.createElement(Console_1.Console, { editMode: this.state.edit_mode }),
            React.createElement(RightClickMenu_1.RightClickMenu, { items: this.menuItems })));
    };
    return Topology;
}(React.Component));
exports.Topology = Topology;
;
//# sourceMappingURL=Topology.js.map