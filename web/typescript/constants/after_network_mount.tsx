import * as vis from "vis";
import * as datagram from "./datagram";
import { options } from "./options";

export function after_network_mount() {
    var data = {
        nodes: datagram.nodes,
        edges: datagram.edges
    };
    var network = new vis.Network(document.getElementById('showcase'), data, options);
    
    $("#toolbar [name='add_node']").on("click", function() {
        network.addNodeMode();
    });
    $("#toolbar [name='edit_node']").on("click", function() {
        network.editNode();
    });
    $("#toolbar [name='add_edge']").on("click", function() {
        network.addEdgeMode();
    });
    $("#toolbar [name='edit_edge']").on("click", function() {
        network.editEdgeMode();
    });
    $("#toolbar [name='delete_selected']").on("click", function() {
        network.deleteSelected();
    });
}
