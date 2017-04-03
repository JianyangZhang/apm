export const saveTopology = (datagram) => {
    return {
        type: "save_topology",
        datagram
    };
}

export const selectNodes = (selectedNodes) => {
    return {
        type: "select_nodes",
        selectedNodes
    };
}
export const selectEdges = (selectedEdges) => {
    return {
        type: "select_edges",
        selectedEdges
    }
}

export const editTopology = (datagram) => {
    return {
        type: "edit_topology",
        datagram
    };
}
