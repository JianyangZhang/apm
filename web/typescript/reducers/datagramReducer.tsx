import { datagram } from "../constants/datagram";

export const datagramReducer = (state = { datagram: { nodes: [], edges: [] } }, action) => {
    switch (action.type) {
        case "generate_topology":
            return {
                datagram: datagram
            };
        default:
            return state;
    }
}
