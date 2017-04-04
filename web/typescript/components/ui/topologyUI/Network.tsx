import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import { options } from "../../../constants/topologyConstants/options";

export class Network extends React.Component<any, any> {
    private network: any;
    private container: any;
    private nodes: any;
    private edges: any;
    private datagram: any;
    private options: any;
    constructor(props, context) {
        super(props, context);
        this.nodes = new vis.DataSet(this.props.datagram.nodes);
        this.edges = new vis.DataSet(this.props.datagram.edges);
        this.datagram = {
            nodes: this.nodes,
            edges: this.edges
        }
        this.options = options;
    }
    componentDidMount() {
        const that = this;
        this.container = document.getElementById("network");
        this.network = new vis.Network(this.container, this.datagram, this.options);
        this.network.on("dragEnd", function() {
            // 每次拖拽后, 同步 "选中状态" 和 "被拖拽的node的新坐标" 到store
            const selected_nodes_id = this.getSelectedNodes();
            that.props.onNodesSelect(selected_nodes_id);
            if (selected_nodes_id.length != 0) {
                const selected_node_id = selected_nodes_id[0];
                const position = this.getPositions(selected_node_id);
                const currentNodePosition = {
                    id: selected_node_id,
                    x: Math.round(position[selected_node_id].x),
                    y: Math.round(position[selected_node_id].y)
                }
                that.nodes.update(currentNodePosition);
                that.props.onEdit("drag_node", { id: selected_node_id, data: currentNodePosition });
            }
        });

        this.network.on("release", function() {
            // 如果在增加元素的编辑状态, 继续添加模式
            if (that.props.isEditing && that.props.editMode == "add_node") {
                this.addNodeMode();
            }
            if (that.props.isEditing && that.props.editMode == "add_edge") {
                this.addEdgeMode();
            }
        });
        this.nodes.on("add", function() {
            const list = that.nodes.get();
            const new_node_data = list[list.length - 1];
            const new_node_id = new_node_data.id;
            const info = {
                id: new_node_id,
                data: new_node_data
            }
            that.props.onEdit("add_node", info);
        });
        this.edges.on("add", function() {
            const list = that.edges.get();
            const new_edge_data = list[list.length - 1];
            const new_edge_id = new_edge_data.id;
            const info = {
                id: new_edge_id,
                data: new_edge_data
            }
            that.props.onEdit("add_edge", info);
        });
        this.nodes.on("remove", function() {
            that.props.onNodesSelect([]);
            that.props.onEdgesSelect([]);
        });
        this.edges.on("remove", function() {
            that.props.onNodesSelect([]);
            that.props.onEdgesSelect([]);
        });

        // 正常操作
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
    }

    shouldComponentUpdate(nextProps, nextState) {
        const editMode = this.props.editMode.replace(/[0-9]/g, '');
        if (editMode == "save" && nextProps.editMode == this.props.editMode) {
            return false;
        }
        if (editMode == "delete_selected" && nextProps.editMode == this.props.editMode) {
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        const network = this.network;
        const selected_nodes_id = network.getSelectedNodes();
        const selected_edges_id = network.getSelectedEdges();
        const selected_node_id = selected_nodes_id[0];
        const selected_edge_id = selected_edges_id[0];
        const selected_node_label = this.nodes.get(selected_node_id).label;
        const selected_node_size = this.nodes.get(selected_node_id).size;
        const selected_node_res_id = this.nodes.get(selected_node_id).res_id;
        let updateOptions = {};
        if (this.props.isLocked) {
            updateOptions = {
                interaction: {
                    multiselect: false,
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
                    multiselect: false,
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
                $("#add_node_label").val("新节点");
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
                    $("#edit_node_res_id").val(selected_node_res_id);
                    $("#edit_node_shape").val("stay_the_same");
                    $("#edit_node_size").val(selected_node_size);
                    $("#edit_node_confirm").on("click", function() {
                        network.editNode();
                    });
                }
                break;
            case "add_edge":
                network.addEdgeMode();
                if (!this.props.isEditing) {
                    network.disableEditMode();
                }
                break;
            case "edit_edge":
                network.editEdgeMode();
                if (!this.props.isEditing) {
                    network.disableEditMode();
                }
                break;
            case "delete_selected":
                this.props.onEdit("delete_selected", { nodes: selected_nodes_id, edges: selected_edges_id });
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
                this.sync(); // sync everything for graph, store, and database.
                break;
            default:
                break;
        }
    }

    sync = () => {
        if (this.nodes.get().length == 0) {
            const currentDatagram = {
                nodes: "delete",
                edges: "delete",
                topology_id: this.props.id
            }
            this.props.onSave(currentDatagram);
            return;
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
    }

    render() {
        return (
            <div>
                <div id="network">
                </div>
            </div>
        )
    }
}
