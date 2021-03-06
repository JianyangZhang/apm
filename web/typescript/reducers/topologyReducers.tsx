import { combineReducers } from "redux";
// import { datagram } from "../constants/topologyConstants/datagram";
import { assign } from 'lodash';

const defaultState = {
    datagram: {
        nodes: {},
        edges: {}
    },
    nodeState: {
        selectedNodes: []
    },
    edgeState: {
        selectedEdges: []
    }
}

const datagram = {
    nodes: [],
    edges: []
};

$.ajax({
    async: false,
    url: "/topology/nodes/sample",
    type: 'GET',
    data: {},
    success: function(data) {
        console.log("%c从数据库读取nodes成功", 'color: green;');
        datagram.nodes = data;
    },
    error: function(error) {
        console.log("从数据库读取nodes失败: ", error);
    },
    dataType: "json"
});
$.ajax({
    async: false,
    url: "/topology/edges/sample",
    type: 'GET',
    data: {},
    success: function(data) {
        console.log("%c从数据库读取edges成功", 'color: green;');
        datagram.edges = data;
    },
    error: function(error) {
        console.log("从数据库读取edges失败: ", error);
    },
    dataType: "json"
});

const nodesObj = datagram.nodes.reduce(function(newObj, oldObj) {
    newObj[oldObj.id] = oldObj;
    return newObj;
}, {});
const edgesObj = datagram.edges.reduce(function(newObj, oldObj) {
    newObj[oldObj.id] = oldObj;
    return newObj;
}, {});

defaultState.datagram.nodes = nodesObj;
defaultState.datagram.edges = edgesObj;

export const topologyReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        case "add_node":
            previousState.datagram.nodes[action.info.id] = action.info.data;
            return previousState;
        case "drag_node":
            previousState.datagram.nodes[action.info.id].x = action.info.data.x;
            previousState.datagram.nodes[action.info.id].y = action.info.data.y;
            return previousState;
        case "add_edge":
            previousState.datagram.edges[action.info.id] = action.info.data;
            return previousState;
        case "delete_selected":
            for (let i = 0; i < action.info.nodes.length; i++) {
                delete previousState.datagram.nodes[action.info.nodes[i]];
            }
            for (let i = 0; i < action.info.edges.length; i++) {
                delete previousState.datagram.edges[action.info.edges[i]];
            }
            return previousState;
        case "save_topology":
            if (action.datagram.nodes == "delete") {
                const deleteURL: string = "/topology/" + action.datagram.topology_id;
                $.ajax({
                    async: true,
                    url: deleteURL,
                    type: "DELETE",
                    data: {},
                    success: function() {
                        console.log("%c清空拓扑图成功", 'color: green;');
                    },
                    error: function(error) {
                        console.log("清空拓扑图失败: ", error);
                    },
                });
                return assign({}, previousState, {
                    datagram: {
                        nodes: {},
                        edges: {}
                    }
                });
            }
            $.ajax({
                async: true,
                url: "/topology/nodes",
                type: "PUT",
                data: JSON.stringify(action.datagram.nodes),
                success: function(data) {
                    console.log("%c成功将nodes写入数据库", 'color: green;');
                },
                error: function(error) {
                    console.log("nodes写入数据库失败: ", error);
                },
                dataType: "text",
                contentType: "application/json"
            });
            $.ajax({
                async: true,
                url: "/topology/edges",
                type: "PUT",
                data: JSON.stringify(action.datagram.edges),
                success: function(data) {
                    console.log("%c成功将edges写入数据库", 'color: green;');
                },
                error: function(error) {
                    console.log("edges写入数据库失败: ", error);
                },
                dataType: "text",
                contentType: "application/json"
            });
            const nodesObj = action.datagram.nodes.reduce(function(newObj, oldObj) {
                newObj[oldObj.id] = oldObj;
                return newObj;
            }, {});
            const edgesObj = action.datagram.edges.reduce(function(newObj, oldObj) {
                newObj[oldObj.id] = oldObj;
                return newObj;
            }, {});
            return assign({}, previousState, {
                datagram: {
                    nodes: nodesObj,
                    edges: edgesObj
                }
            });
        case "select_nodes":
            return assign({}, previousState, {
                nodeState: {
                    selectedNodes: action.selectedNodes
                }
            });
        case "select_edges":
            return assign({}, previousState, {
                edgeState: {
                    selectedEdges: action.selectedEdges
                }
            });
        default:
            return assign({}, previousState, {
                datagram: {
                    nodes: datagram.nodes,
                    edges: datagram.edges
                }
            });
    }
}


export const topologyReducers = combineReducers({
    topology: topologyReducer
});
