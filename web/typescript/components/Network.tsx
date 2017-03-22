import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import * as datagram from "../constants/datagram";
import { options } from "../constants/options";
import { Showcase } from "./Showcase";
var network;

export var Network = React.createClass({
    getDefaultProps: function() {
        return {
            currentEditMode: "none"
        }
    },
    componentDidMount: function() {
        var data = {
            nodes: datagram.nodes,
            edges: datagram.edges
        };
        network = new vis.Network(document.getElementById('showcase'), data, options);
    },
    componentDidUpdate: function() {
        switch (this.props.currentEditMode) {
            case "add_node":
                network.addNodeMode();
                break;
            case "edit_node":
                network.editNode();
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
                console.log("open layout selector");
                break;
            default:
                console.log("none");
                break;
        }
    },
    render: function() {
        return (
            <div>
                <Showcase />
            </div>
        )
    }
});
