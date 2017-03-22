import * as React from "react";
import * as ReactDOM from "react-dom";
import { FuncButton } from "./FuncButton";

export var Toolbar = React.createClass({
    getDefaultProps: function() {
        return {
            changeEditMode: function(current_mode: string) {
                console.log('Toolbar layer');
            }
        }
    },
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
                <FuncButton changeEditMode={this.props.changeEditMode} name="add_node" value="add node" seat="toolbar" />
                <FuncButton changeEditMode={this.props.changeEditMode} name="edit_node" value="edit node" seat="toolbar" />
                <FuncButton changeEditMode={this.props.changeEditMode} name="add_edge" value="add edge" seat="toolbar" />
                <FuncButton changeEditMode={this.props.changeEditMode} name="edit_edge" value="edit edge" seat="toolbar" />
                <FuncButton changeEditMode={this.props.changeEditMode} name="delete_selected" value="delete" seat="toolbar" />
                <FuncButton changeEditMode={this.props.changeEditMode} name="layout" value="layout" seat="toolbar" />
            </div>
        )
    }
});
