import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import * as dataset from "../../constants/dataset";
import { options } from "../../constants/options";

export class Network extends React.Component<any, any> {
    private network: any;
    private dataset: any;
    private options: any;
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.dataset = {
            nodes: dataset.nodes,
            edges: dataset.edges
        };
        this.options = options;
        this.network = new vis.Network(document.getElementById('network'), this.dataset, this.options);
    }
    componentDidUpdate() {
        const nodes = this.dataset.nodes;
        const selected_node_id = this.network.getSelectedNodes()[0];
        const selected_node_label = nodes.get(selected_node_id).label;
        let updateOptions = {};
        switch (this.props.currentEditMode) {
            case "add_node":
                this.network.addNodeMode();
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
                        this.network.editNode();
                    });
                }
                break;
            case "add_edge":
                this.network.addEdgeMode();
                break;
            case "edit_edge":
                this.network.editEdgeMode();
                break;
            case "delete_selected":
                this.network.deleteSelected();
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
                            this.network.setOptions(updateOptions);
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
                            this.network.setOptions(updateOptions);
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
                            this.network.setOptions(updateOptions);
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
                            this.network.setOptions(updateOptions);
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
                            this.network.setOptions(updateOptions);
                            break;
                        default:
                            break;
                    }
                });
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div id="network">
            </div>
        )
    }
}
