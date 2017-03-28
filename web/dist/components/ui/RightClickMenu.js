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
var RightClickMenu = (function (_super) {
    __extends(RightClickMenu, _super);
    function RightClickMenu(props, context) {
        return _super.call(this, props, context) || this;
    }
    RightClickMenu.prototype.render = function () {
        var style = {
            position: "absolute"
        };
        return (React.createElement("div", { id: "right_click_menu", style: style }, this.props.items.map(function (item, index) {
            if (item.type == "button") {
                return (React.createElement("div", { key: index },
                    React.createElement("button", { onClick: item.callback }, item.text),
                    React.createElement("br", null)));
            }
        })));
    };
    return RightClickMenu;
}(React.Component));
exports.RightClickMenu = RightClickMenu;
//# sourceMappingURL=RightClickMenu.js.map