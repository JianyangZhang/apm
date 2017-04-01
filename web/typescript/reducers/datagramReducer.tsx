// import { datagram } from "../constants/datagram";

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

export const datagramReducer = (state = { nodes: [], edges: [] }, action) => {
    switch (action.type) {
        case "save_topology":
            if (action.payload.nodes == "delete") {
                const deleteURL: string = "/topology/" + action.payload.topology_id;
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
                return state;
            }
            $.ajax({
                async: true,
                url: "/topology/nodes",
                type: "PUT",
                data: JSON.stringify(action.payload.nodes),
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
                data: JSON.stringify(action.payload.edges),
                success: function(data) {
                    console.log("%c成功将edges写入数据库", 'color: green;');
                },
                error: function(error) {
                    console.log("edges写入数据库失败: ", error);
                },
                dataType: "text",
                contentType: "application/json"
            });
            return action.payload;
        default:
            return datagram;
    }
}
