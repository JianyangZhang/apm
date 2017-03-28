import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { topologyReducers } from "./reducers/topologyReducers";
import TopologyApp from "./components/Topology";

let store = createStore(topologyReducers)

ReactDOM.render(
    <Provider store={store}>
        <TopologyApp />
    </Provider>,
    document.getElementById('topology'),
)
