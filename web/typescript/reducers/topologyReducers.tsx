import { datagramReducer } from "./datagramReducer";
import { nodeStateReducer } from "./nodeStateReducer";
import { combineReducers } from "redux";

export const topologyReducers = combineReducers({
    datagram: datagramReducer,
    nodeState: nodeStateReducer
});
