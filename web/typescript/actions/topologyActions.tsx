export const generateTopology = () => {
    return {
        type: "generate_topology",
    };
}

export const saveTopology = (datagram) => {
    return {
        type: "save_topology",
        payload: datagram
    };
}
