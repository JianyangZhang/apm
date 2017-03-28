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
        return _super.call(this, props, context) || this;
    }
    Toolbar.prototype.render = function () {
        var _this = this;
        var inline = {
            display: "inline-block"
        };
        return (React.createElement("div", { id: "toolbar" }, this.props.items.map(function (item, index) {
            if (item.type == "button") {
                // isLocked属性仅锁定button类型的item
                return (React.createElement("button", { key: index, onClick: item.callback, disabled: _this.props.isLocked ? true : false }, item.text));
            }
            if (item.type == "checkbox") {
                return (React.createElement("div", { key: index, style: inline },
                    React.createElement("span", null, item.text),
                    React.createElement("input", { type: "checkbox", onChange: item.callback })));
            }
        })));
    };
    return Toolbar;
}(React.Component));
exports.Toolbar = Toolbar;
//# sourceMappingURL=Toolbar.js.map