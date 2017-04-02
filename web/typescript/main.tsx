import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { topologyReducers } from "./reducers/topologyReducers";
import TopologyApp from "./components/Topology";

let store = createStore(topologyReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <TopologyApp />
    </Provider>,
    document.getElementById('topology'),
)
