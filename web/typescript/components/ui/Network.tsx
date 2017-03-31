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
            const selected_node_id = this.getSelectedNodes()[0];
            const position = this.getPositions(selected_node_id);
            const currentNodePosition = {
                id: selected_node_id,
                x: position[selected_node_id].x,
                y: position[selected_node_id].y
            }
            that.nodes.update(currentNodePosition);
        })
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
                break;
            case "edit_node":
                if (typeof (selected_node_label) == "undefined") {
                    $("#edit_node_label").val("没有节点被选中！");
                    $("#edit_node_label").prop('disabled', true);
                    $("#edit_node_shape").prop('disabled', true);
                    $("#edit_node_confirm").prop('disabled', true);
                } else {
                    $("#edit_node_label").prop('disabled', false);
                    $("#edit_node_shape").prop('disabled', false);
                    $("#edit_node_confirm").prop('disabled', false);
                    $("#edit_node_label").val(selected_node_label);
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
                const that = this;
                this.nodes.forEach(function(node) {
                    that.nodes.update({ id: node.id, topology_id: that.props.id, x: Math.round(node.x), y: Math.round(node.y) });
                });
                const currentDatagram = {
                    nodes: this.nodes.get(),
                    edges: this.edges.get()
                }
                if (this.props.onSave) {
                    this.props.onSave(currentDatagram);
                }
                // console.log(currentDatagram.nodes);
                // console.log(currentDatagram.edges);
                break;
            default:
                break;
        }
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
