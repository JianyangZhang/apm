import * as React from "react";
import * as ReactDOM from "react-dom";

export class Network extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    componentDidUpdate() {
        switch (this.props.currentEditMode) {
            case "add_node":
                this.props.network.addNodeMode();
                break;
            case "edit_node":
                console.log("open edit node panel");
                this.props.network.editNode();
                break;
            case "add_edge":
                this.props.network.addEdgeMode();
                break;
            case "edit_edge":
                this.props.network.editEdgeMode();
                break;
            case "delete_selected":
                this.props.network.deleteSelected();
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
