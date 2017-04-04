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

// add_node: {id: 101, data: {id: 101, ...}}
export const editTopology = (operation, info) => {
    return {
        type: operation,
        info
    };
}
