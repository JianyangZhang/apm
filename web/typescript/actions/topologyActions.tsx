export const saveTopology = (datagram) => {
    console.log("保存拓扑图...");
    return {
        type: "save_topology",
        payload: datagram
    };
}
