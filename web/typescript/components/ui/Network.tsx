import * as React from "react";
import * as ReactDOM from "react-dom";
import * as vis from "vis";
import * as datagram from "../../constants/datagram";
import { options } from "../../constants/options";

export class Network extends React.Component<any, any> {
    private network:any;
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        let data = {
            nodes: datagram.nodes,
            edges: datagram.edges
        };
        this.network = new vis.Network(document.getElementById('showcase'), data, options);
    }
    componentDidUpdate() {
        switch (this.props.currentEditMode) {
            case "add_node":
                this.network.addNodeMode();
                break;
            case "edit_node":
                console.log("open edit node panel");
                this.network.editNode();
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
                console.log("open layout panel");
                break;
            default:
                console.log("none");
                break;
        }
    }
    render() {
        return (
            <div id="showcase">
            </div>
        )
    }
}
