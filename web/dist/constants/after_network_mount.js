"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vis = require("vis");
var datagram = require("./datagram");
var options_1 = require("./options");
function after_network_mount() {
    var data = {
        nodes: datagram.nodes,
        edges: datagram.edges
    };
    var network = new vis.Network(document.getElementById('showcase'), data, options_1.options);
    $("#toolbar [name='add_node']").on("click", function () {
        network.addNodeMode();
    });
    $("#toolbar [name='edit_node']").on("click", function () {
        network.editNode();
    });
    $("#toolbar [name='add_edge']").on("click", function () {
        network.addEdgeMode();
    });
    $("#toolbar [name='edit_edge']").on("click", function () {
        network.editEdgeMode();
    });
    $("#toolbar [name='delete_selected']").on("click", function () {
        network.deleteSelected();
    });
}
exports.after_network_mount = after_network_mount;
//# sourceMappingURL=after_network_mount.js.map