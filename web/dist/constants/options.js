"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = {
    locale: "en",
    autoResize: true,
    clickToUse: false,
    nodes: {
        shape: 'circularImage',
        brokenImage: "./img/default.png",
        image: "./img/default.png",
        size: 20,
        physics: false,
        shadow: false,
        color: {
            border: "black",
            background: "white",
            highlight: {
                border: "#58BB12",
                background: "#58BB12",
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
            highlight: "#58BB12"
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
        addNode: function (nodeInfo, callback) {
            nodeInfo.label = "new node";
            callback(nodeInfo);
        },
        editNode: function (nodeInfo, callback) {
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
        keyboard: true,
        navigationButtons: true,
        zoomView: true,
        dragView: true,
        dragNodes: true
    }
};
//# sourceMappingURL=options.js.map