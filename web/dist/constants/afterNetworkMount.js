"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vis = require("vis");
var datagram = require("./datagram");
var options_1 = require("./options");
function afterNetworkMount() {
    var data = {
        nodes: datagram.nodes,
        edges: datagram.edges
    };
    var network = new vis.Network(document.getElementById('showcase'), data, options_1.options);
}
exports.afterNetworkMount = afterNetworkMount;
//# sourceMappingURL=afterNetworkMount.js.map