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
        datagram.nodes = data;
    },
    error: function(error) {
        console.log("ERROR: ", error);
    },
    dataType: "json"
});

export const datagramReducer = (state = { nodes: [], edges: [] }, action) => {
    switch (action.type) {
        case "save_topology":
            $.ajax({
                async: true,
                url: "/topology/nodes",
                type: "PUT",
                data: JSON.stringify(action.payload.nodes),
                success: function() {
                    console.log("成功写入数据库");
                },
                error: function(error) {
                    console.log(error);
                },
                dataType: "json",
                contentType: "application/json"
            });
            return action.payload;
        default:
            return datagram;
    }
}
