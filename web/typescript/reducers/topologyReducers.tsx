import { datagramReducer } from "./datagramReducer";
import { combineReducers } from "redux";

export const topologyReducers = combineReducers({
    datagram: datagramReducer
});
