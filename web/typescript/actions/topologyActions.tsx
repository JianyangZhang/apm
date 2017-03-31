export const saveTopology = (datagram) => {
    return {
        type: "save_topology",
        payload: datagram
    };
}
