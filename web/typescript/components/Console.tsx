import * as React from "react";
import * as ReactDOM from "react-dom";
import { PopMessage } from "./PopMessage";

export var Console = React.createClass({
    getDefaultProps: function() {
        return {
            currentEditMode: "none"
        }
    },
    render: function() {
        switch (this.props.currentEditMode) {
            case "none":
                return (<PopMessage id="console" message="" />);
            case "add_node":
                return (<PopMessage id="console" message="left-click in the white space to place a new node" />);
            case "edit_node":
                return (<div id="console">***edit node panel will appear at here***</div>);
            case "add_edge":
                return (<PopMessage id="console" message="drag from one node to another node to connect them" />);
            case "edit_edge":
                return (<PopMessage id="console" message="drag the end of the edge to another node" />);
            case "delete_selected":
                return (<PopMessage id="console" message="The selected element has been deleted" />);
            case "layout":
                return (<div id="console">***layout panel will appear at here***</div>);
            default:
                return (<div id="console"></div>);
        }
    }
});
