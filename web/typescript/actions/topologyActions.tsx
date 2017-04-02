export const saveTopology = (datagram) => {
    return {
        type: "save_topology",
        payload: datagram
    };
}

export const selectNodes = (nodes) => {
    return {
        type: "select_nodes",
        payload: nodes
    };
}
