import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToolbarButton } from "./ToolbarButton";

export var Toolbar = React.createClass({
    getInitialState: function() {
        return {
            isVisible: true,
        }
    },
    render: function() {
        var style = {
            display: this.state.isVisible ? "block" : "none"
        }

        return (
            <div id="toolbar" style={style}>
                <ToolbarButton name="add_node" value="add node" />
                <ToolbarButton name="edit_node" value="edit node" />
                <ToolbarButton name="add_edge" value="add edge" />
                <ToolbarButton name="edit_edge" value="edit edge" />
                <ToolbarButton name="delete_selected" value="delete" />
                <ToolbarButton name="layout" value="layout" />
            </div>
        )
    }
});
