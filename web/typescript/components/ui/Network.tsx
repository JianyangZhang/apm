import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import { options } from "../../constants/options";

export class Network extends React.Component<any, any> {
    private network: any;
    private container: any;
    private nodes: any;
    private edges: any;
    private datagram: any;
    private options: any;
    private selected_nodes_id: any;
    private selected_edges_id: any;
    constructor(props, context) {
        super(props, context);
        this.nodes = new vis.DataSet(this.props.datagram.nodes);
        this.edges = new vis.DataSet(this.props.datagram.edges);
        this.datagram = {
            nodes: this.nodes,
            edges: this.edges
        }
        this.options = options;
        this.selected_nodes_id = [];
        this.selected_edges_id = [];
    }
    componentDidMount() {
        const that = this;
        this.container = document.getElementById("network");
        this.network = new vis.Network(this.container, this.datagram, this.options);
        this.network.on("dragEnd", function() {
            if (this.selected_nodes_id.length != 0) {
                const selected_node_id = this.selected_nodes_id[0];
                const position = this.getPositions(selected_node_id);
                const currentNodePosition = {
                    id: selected_node_id,
                    x: Math.round(position[selected_node_id].x),
                    y: Math.round(position[selected_node_id].y)
                }
                that.nodes.update(currentNodePosition);
            }
        });
        this.network.on("selectNode", function() {
            const selected_nodes_id = this.getSelectedNodes();
            that.props.onNodesSelect(selected_nodes_id);
        });
        this.network.on("deselectNode", function() {
            const selected_nodes_id = this.getSelectedNodes();
            that.props.onNodesSelect(selected_nodes_id);
        });
        this.network.on("selectEdge", function() {
            const selected_edges_id = this.getSelectedEdges();
            that.props.onEdgesSelect(selected_edges_id);
        });
        this.network.on("deselectEdge", function() {
            const selected_edges_id = this.getSelectedEdges();
            that.props.onEdgesSelect(selected_edges_id);
        });
        this.network.on("click", function(obj) {
            if (that.props.isEditing) {

            }
        });
        this.network.on("release", function() {
            if (that.props.isEditing && that.props.editMode == "add_node") {
                this.addNodeMode();
            }
            this.selected_nodes_id = this.getSelectedNodes();
            if (this.selected_nodes_id.length == 0) {
                return;
            }
            that.props.onNodesSelect(this.selected_nodes_id);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const editMode = this.props.editMode.replace(/[0-9]/g, '');
        if (editMode == "save" && nextProps.editMode == this.props.editMode) {
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        const network = this.network;
        const selected_node_id = network.getSelectedNodes()[0];
        const selected_node_label = this.nodes.get(selected_node_id).label;
        const selected_node_size = this.nodes.get(selected_node_id).size;
        let updateOptions = {};
        if (this.props.isLocked) {
            updateOptions = {
                interaction: {
                    keyboard: false,
                    navigationButtons: false,
                    zoomView: false,
                    dragView: false,
                    dragNodes: false,
                    hover: false
                }
            };
            network.setOptions(updateOptions);
            return;
        } else {
            updateOptions = {
                interaction: {
                    keyboard: true,
                    navigationButtons: true,
                    zoomView: true,
                    dragView: true,
                    dragNodes: true,
                    hover: true
                }
            };
            network.setOptions(updateOptions);
        }

        const editMode = this.props.editMode.replace(/[0-9]/g, '');
        switch (editMode) {
            case "add_node":
                network.addNodeMode();
                if (!this.props.isEditing) {
                    network.disableEditMode();
                }
                break;
            case "edit_node":
                if (typeof (selected_node_label) == "undefined") {
                    $("#edit_node_label").val("没有节点被选中！");
                    $("#edit_node_label").prop('disabled', true);
                    $("#edit_node_shape").prop('disabled', true);
                    $("#edit_node_size").prop('disabled', true);
                    $("#edit_node_confirm").prop('disabled', true);
                } else {
                    $("#edit_node_label").prop('disabled', false);
                    $("#edit_node_shape").prop('disabled', false);
                    $("#edit_node_size").prop('disabled', false);
                    $("#edit_node_confirm").prop('disabled', false);
                    $("#edit_node_label").val(selected_node_label);
                    $("#edit_node_shape").val("stay_the_same");
                    $("#edit_node_size").val(selected_node_size);
                    $("#edit_node_confirm").on("click", function() {
                        network.editNode();
                    });
                }
                break;
            case "add_edge":
                network.addEdgeMode();
                break;
            case "edit_edge":
                network.editEdgeMode();
                if (!this.props.isEditing) {
                    network.disableEditMode();
                }
                break;
            case "delete_selected":
                network.deleteSelected();
                break;
            case "layout":
                $("#layout_confirm").on("click", function() {
                    switch ($("#layout_selector").val()) {
                        case "UD":
                            updateOptions = {
                                layout: {
                                    hierarchical: {
                                        enabled: true,
                                        direction: "UD",
                                        sortMethod: "directed",
                                        nodeSpacing: 200,
                                        edgeMinimization: true
                                    }
                                },
                                edges: {
                                    smooth: {
                                        enabled: true,
                                        type: "cubicBezier",
                                        forceDirection: "vertical",
                                        roundness: 0.5
                                    }
                                }
                            }
                            break;
                        case "LR":
                            updateOptions = {
                                layout: {
                                    hierarchical: {
                                        enabled: true,
                                        direction: "LR",
                                        sortMethod: "directed",
                                        nodeSpacing: 100,
                                        edgeMinimization: true
                                    }
                                },
                                edges: {
                                    smooth: {
                                        enabled: true,
                                        type: "cubicBezier",
                                        forceDirection: "horizontal",
                                        roundness: 0.5
                                    }
                                }
                            }
                            break;
                        case "RL":
                            updateOptions = {
                                layout: {
                                    hierarchical: {
                                        enabled: true,
                                        direction: "RL",
                                        sortMethod: "directed",
                                        nodeSpacing: 100,
                                        edgeMinimization: true
                                    }
                                },
                                edges: {
                                    smooth: {
                                        enabled: true,
                                        type: "cubicBezier",
                                        forceDirection: "horizontal",
                                        roundness: 0.5
                                    }
                                }
                            }
                            break;
                        case "DU":
                            updateOptions = {
                                layout: {
                                    hierarchical: {
                                        enabled: true,
                                        direction: "DU",
                                        sortMethod: "directed",
                                        nodeSpacing: 200,
                                        edgeMinimization: true
                                    }
                                },
                                edges: {
                                    smooth: {
                                        enabled: true,
                                        type: "cubicBezier",
                                        forceDirection: "vertical",
                                        roundness: 0.5
                                    }
                                }
                            }
                            break;
                        case "default":
                            var updateOptions = {
                                layout: {
                                    hierarchical: {
                                        enabled: false,
                                        direction: "LR",
                                        sortMethod: "directed",
                                        nodeSpacing: 100,
                                        edgeMinimization: true
                                    }
                                },
                                edges: {
                                    smooth: {
                                        enabled: true,
                                        type: "cubicBezier",
                                        forceDirection: "horizontal",
                                        roundness: 0.5
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    network.setOptions(updateOptions);
                });
                break;
            case "save":
                if (this.nodes.get().length == 0) {
                    const currentDatagram = {
                        nodes: "delete",
                        edges: "delete",
                        topology_id: this.props.id
                    }
                    this.props.onSave(currentDatagram);
                    break;
                }
                const that = this;
                this.nodes.forEach(function(node) {
                    that.nodes.update({ id: node.id, x: Math.round(node.x), y: Math.round(node.y) });
                });
                this.edges.forEach(function(edge) {
                    that.edges.update({ id: edge.id, topology_id: that.props.id });
                });
                const currentDatagram = {
                    nodes: this.nodes.get(),
                    edges: this.edges.get()
                }
                if (this.props.onSave) {
                    this.props.onSave(currentDatagram);
                }
                console.log("准备写入数据库的nodes: ", currentDatagram.nodes);
                console.log("准备写入数据库的edges: ", currentDatagram.edges);
                break;
            default:
                break;
        }
    }
    /*
        syncStore = () => {
            const that = this;
            this.nodes.forEach(function(node) {
                that.nodes.update({ id: node.id, x: Math.round(node.x), y: Math.round(node.y) });
            });
            this.edges.forEach(function(edge) {
                that.edges.update({ id: edge.id, topology_id: that.props.id });
            });
            const currentDatagram = {
                nodes: this.nodes.get(),
                edges: this.edges.get()
            }
            this.props.onEdit(currentDatagram);
        }
    */
    render() {
        return (
            <div>
                <div id="network">
                </div>
            </div>
        )
    }
}
