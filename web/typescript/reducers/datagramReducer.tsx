import { datagram } from "../constants/datagram";

export const datagramReducer = (state = { nodes: [], edges: [] }, action) => {
    switch (action.type) {
        case "save_topology":
            return action.payload;
        default:
            return datagram;
    }
}
