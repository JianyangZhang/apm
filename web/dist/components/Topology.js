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
var afterFinalMount_1 = require("../constants/afterFinalMount");
var Topology = (function (_super) {
    __extends(Topology, _super);
    function Topology(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initState = function () {
            return {
                edit_mode: "none"
            };
        };
        _this.state = _this.initState();
        return _this;
    }
    Topology.prototype.componentDidMount = function () {
        afterFinalMount_1.afterFinalMount();
    };
    Topology.prototype.changeEditMode = function (current_mode) {
        this.setState({
            edit_mode: current_mode
        });
    };
    Topology.prototype.render = function () {
        return (React.createElement("div", { id: "main" },
            React.createElement(Toolbar_1.Toolbar, { changeEditMode: this.changeEditMode.bind(this) }),
            React.createElement(Network_1.Network, { currentEditMode: this.state.edit_mode }),
            React.createElement(Console_1.Console, { currentEditMode: this.state.edit_mode })));
    };
    return Topology;
}(React.Component));
exports.Topology = Topology;
;
//# sourceMappingURL=Topology.js.map