import * as vis from "vis";

export var options = {
    locale: "en",
    autoResize: true,
    clickToUse: false,
    nodes: {
        shape: 'circularImage',
        brokenImage: "./img/computer.png",
        image: "./img/computer.png",
        size: 20,
        physics: false,
        shadow: false,
        labelHighlightBold: true,
        font: {
            face: "open sans"
        },
        color: {
            border: "black",
            background: "white",
            highlight: {
                border: "#58BB12",
                background: "#58BB12",
            },
            hover: {
                border: "#00ff00",
                background: "#ffffff",
            }
        },
        fixed: {
            x: false,
            y: false
        }
    },
    edges: {
        color: {
            color: "gray",
            highlight: "#58BB12",
            hover: "#66ff66"
        },
        arrows: {
            to: {
                enabled: true,
                scaleFactor: 0,
                type: 'arrow'
            },
            middle: {
                enabled: false,
                scaleFactor: 1,
                type: 'arrow'
            },
            from: {
                enabled: false,
                scaleFactor: 0.01,
                type: 'circle'
            }
        },
        smooth: {
            enabled: true,
            type: "cubicBezier",
            forceDirection: "horizontal",
            roundness: 0.5
        }
    },
    manipulation: {
        enabled: false,
        initiallyActive: true,
        addNode: function(nodeInfo, callback) {
            nodeInfo.topology_id = "sample";
            nodeInfo.shape = "circularImage";
            nodeInfo.image = "./img/computer.png";
            nodeInfo.label = $("#add_node_label").val();
            nodeInfo.res_id = $("#add_node_res_id").val();
            const nodeSize: number = parseInt($("#add_node_size").val());
            if (nodeSize >= 1 && nodeSize <= 100) {
                nodeInfo.size = nodeSize;
            }
            switch ($("#add_node_shape").val()) {
                case "computer":
                    nodeInfo.shape = "circularImage";
                    nodeInfo.image = "./img/computer.png";
                    break;
                case "user":
                    nodeInfo.shape = "circularImage";
                    nodeInfo.image = "./img/user.png";
                    break;
                case "api":
                    nodeInfo.shape = "circularImage";
                    nodeInfo.image = "./img/api.png";
                    break;
                case "download":
                    nodeInfo.shape = "circularImage";
                    nodeInfo.image = "./img/download.png";
                    break;
                case "disk":
                    nodeInfo.shape = "circularImage";
                    nodeInfo.image = "./img/disk.png";
                    break;
                default:
                    nodeInfo.shape = $("#add_node_shape").val();
                    nodeInfo.image = null;
                    break;
            }
            callback(nodeInfo);
        },
        editNode: function(nodeInfo, callback) {
            nodeInfo.label = $("#edit_node_label").val();
            nodeInfo.res_id = $("#edit_node_res_id").val();
            if ($("#edit_node_shape").val() != "stay_the_same") {
                switch ($("#edit_node_shape").val()) {
                    case "computer":
                        nodeInfo.shape = "circularImage";
                        nodeInfo.image = "./img/computer.png";
                        break;
                    case "user":
                        nodeInfo.shape = "circularImage";
                        nodeInfo.image = "./img/user.png";
                        break;
                    case "api":
                        nodeInfo.shape = "circularImage";
                        nodeInfo.image = "./img/api.png";
                        break;
                    case "download":
                        nodeInfo.shape = "circularImage";
                        nodeInfo.image = "./img/download.png";
                        break;
                    case "disk":
                        nodeInfo.shape = "circularImage";
                        nodeInfo.image = "./img/disk.png";
                        break;
                    default:
                        nodeInfo.shape = $("#edit_node_shape").val();
                        nodeInfo.image = null;
                        break;
                }
            }
            const nodeSize: number = parseInt($("#edit_node_size").val());
            if (nodeSize >= 1 && nodeSize <= 100) {
                nodeInfo.size = nodeSize;
            }
            nodeInfo.shadow = false; // vis.js glitch
            callback(nodeInfo);
        },
        addEdge: true,
        editEdge: true,
        deleteNode: true,
        deleteEdge: true,
    },
    layout: {
        hierarchical: {
            enabled: false,
            direction: "LR",
            sortMethod: "directed",
            nodeSpacing: 100,
            edgeMinimization: true
        }
    },
    interaction: {
        multiselect: false,
        keyboard: true,
        navigationButtons: true,
        zoomView: true,
        dragView: true,
        dragNodes: true,
        hover: true
    }
};
